export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string | null;
  latitude: number | null;
  longitude: number | null;
  createdAt: string;
}

export interface AuthData {
  user: User;
  token: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
