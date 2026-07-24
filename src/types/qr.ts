export interface QRPayload {
  userId: string;
  fullName: string;
  avatarUrl?: string;
  email?: string;
  createdAt?: string;
}

export interface GroupQRPayload {
  groupId: string;
  name: string;
  avatarUrl?: string;
  createdAt?: string;
}

export interface QRValidationResult {
  isValid: boolean;
  payload: QRPayload | null;
  error?: string;
}
