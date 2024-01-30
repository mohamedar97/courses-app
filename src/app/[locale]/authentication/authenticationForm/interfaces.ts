import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

export interface UserState {
  fullName?: string;
  mobileNumber?: string;
  date?: Dayjs | null;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthenticationFormContentProps {
  isSignUp: boolean;
  userState: any;
  handleChange: (field: keyof UserState, value: string | Dayjs | null) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
}
