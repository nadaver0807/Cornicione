export type AdminSession = {
  token: string;
  expiresAt: string;
};

export type LoginResponse = AdminSession;
