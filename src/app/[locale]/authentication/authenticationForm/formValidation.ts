import { Dayjs } from "dayjs";

interface FormValidationParams {
  fullName?: string;
  email: string;
  mobileNumber?: string;
  dob?: Dayjs | null;
  password: string;
  confirmPassword?: string;
  isSignUp: boolean;
}

const validateForm = ({
  fullName,
  email,
  mobileNumber,
  dob,
  password,
  confirmPassword,
  isSignUp,
}: FormValidationParams): null | string => {
  if (!email || !password) {
    return "All fields are required";
  }

  // Login validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }
  if (password.length < 6) {
    return "Password Must be at least 6 characters long";
  }
  // SignUp validation

  if (isSignUp) {
    if (!fullName || !mobileNumber || !dob || !confirmPassword) {
      return "All fields are required";
    }
    const mobileNumberRegex = /^\d{11}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
      return "Invalid mobile number format. It should be 11 digits.";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
  }

  return null;
};

export default validateForm;
