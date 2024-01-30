import { Dayjs } from "dayjs";

interface FormValidationParams {
  fullName: string;
  email: string;
  mobileNumber: string;
  dob: Dayjs | null;
  password: string;
  confirmPassword: string;
}

const validateForm = ({
  fullName,
  email,
  mobileNumber,
  dob,
  password,
  confirmPassword,
}: FormValidationParams): null | string => {
  if (
    !fullName ||
    !email ||
    !mobileNumber ||
    !dob ||
    !password ||
    !confirmPassword
  ) {
    return "All fields are required";
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }
  // Additional validation if needed

  const mobileNumberRegex = /^\d{10}$/;
  if (!mobileNumberRegex.test(mobileNumber)) {
    return "Invalid mobile number format. It should be 10 digits.";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  if (password.length < 6) {
    return "Password Must be at least 6 characters long";
  }

  return null;
};

export default validateForm;
