export interface AuthState {
  token: string;
  isConnected: boolean;
};

export interface StoreState {
  auth: AuthState;
}