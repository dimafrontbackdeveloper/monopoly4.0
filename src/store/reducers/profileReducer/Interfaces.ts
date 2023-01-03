export interface ProfileState {
  walletAddress: string | null;
  balanceETH: number;
  balanceUSD: number;
  isLoading: boolean;
  error: string;
  count: number;
}

// export interface IUser {
//   id: number;
//   name: string;
//   email: string;
// }
