import crypto from "crypto";
import { QRPayload } from "@/types/qr";

/**
 * Derives a 32-byte Buffer key from the server environment variable `QR_SECRET_KEY`.
 * Pads with "0" or truncates to 32 bytes to strictly satisfy AES-256 requirement.
 * 
 * SECURITY NOTE: This function accesses `process.env.QR_SECRET_KEY` which is a private
 * server-side environment variable. It is NEVER exposed to the browser.
 */
const getQRSecretKey = (): Buffer => {
  const secret = process.env.QR_SECRET_KEY || "SplitryQRSecretKey32BytesLong!";
  return Buffer.from(secret.padEnd(32, "0").slice(0, 32));
};

/**
 * Decrypts an encrypted QR payload string using AES-256-CBC algorithm.
 * 
 * The payload is expected to be formatted as `iv:encryptedText`, where:
 * - `iv` is a 16-byte hex-encoded string.
 * - `encryptedText` is a base64-encoded string representing JSON data.
 * 
 * @param qrCodeSecret The encrypted QR payload from the URL parameter.
 * @returns The parsed QRPayload object or null if decryption/parsing fails.
 */
export function decryptQRPayload(qrCodeSecret: string): QRPayload | null {
  try {
    console.log({ qrCodeSecret })
    if (!qrCodeSecret || typeof qrCodeSecret !== "string") return null;

    let decodedSecret = qrCodeSecret;
    try {
      decodedSecret = decodeURIComponent(qrCodeSecret);
    } catch {
      decodedSecret = qrCodeSecret;
    }

    const parts = decodedSecret.split(":");
    if (parts.length !== 2) return null;

    const key = getQRSecretKey();
    const iv = Buffer.from(parts[0], "hex");
    const encryptedText = parts[1];

    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    let decrypted = decipher.update(encryptedText, "base64", "utf8");
    decrypted += decipher.final("utf8");

    const payload = JSON.parse(decrypted) as QRPayload;

    // Validate essential fields
    if (!payload || typeof payload !== "object" || !payload.userId || !payload.fullName) {
      return null;
    }

    return payload;
  } catch (error) {
    console.log(error)
    return null;
  }
}
