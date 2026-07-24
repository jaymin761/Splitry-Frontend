export interface QRPayload {
  userId: string;
  fullName: string;
  avatarUrl?: string;
  email?: string;
  createdAt?: string;
}

export interface QRValidationResult {
  isValid: boolean;
  payload: QRPayload | null;
  error?: string;
}
