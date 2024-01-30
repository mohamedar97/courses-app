"use client";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { useAuthContext } from "@/contexts/authContext";
import validateForm from "./formValidation";
import authenticate from "@/utils/auth/authenticate";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { UserState } from "./interfaces";
import AuthenticationFormContent from "./authenticationFormContent";

const initialUserState: UserState = {
  fullName: "",
  mobileNumber: "",
  date: null,
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthenticationForm: React.FC = () => {
  const { setUsername } = useAuthContext();
  const params = useSearchParams();
  const type = params.get("type");
  const isSignUp = type === "signup";
  const router = useRouter();

  const [userState, setUserState] = useState<UserState>(initialUserState);

  const handleChange = (
    field: keyof UserState,
    value: string | Dayjs | null
  ) => {
    setUserState((prevUserState) => ({ ...prevUserState, [field]: value }));
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm({
      fullName: userState.fullName,
      mobileNumber: userState.mobileNumber,
      dob: userState.date,
      email: userState.email,
      password: userState.password,
      confirmPassword: userState.confirmPassword,
      isSignUp,
    });

    if (formErrors) {
      setError(formErrors);
      return;
    }
    if (isSignUp) {
    }
    const dob = isSignUp
      ? `${userState.date!.date()}-${
          userState.date!.month() + 1
        }-${userState.date!.year()}`
      : "";

    const AuthenticationResult = await authenticate({
      fullName: userState.fullName,
      mobileNumber: userState.mobileNumber,
      dob: dob,
      email: userState.email,
      password: userState.password,
      isSignUp,
    });

    if (typeof AuthenticationResult === "string") {
      setError("Please try again");
      console.log(AuthenticationResult);
      return;
    }
    setUsername(AuthenticationResult);
    router.push("/");
  };

  return (
    <>
      <AuthenticationFormContent
        isSignUp={isSignUp}
        userState={userState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
      />
    </>
  );
};

export default AuthenticationForm;
