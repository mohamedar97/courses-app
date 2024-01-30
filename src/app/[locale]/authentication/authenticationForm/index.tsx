"use client";
import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Dayjs } from "dayjs";
import { useAuthContext } from "@/contexts/authContext";
import validateForm from "./formValidation";
import authenticate from "./authenticate";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const AuthenticationForm: React.FC = () => {
  const { setUsername } = useAuthContext();
  const params = useSearchParams();
  const type = params.get("type");
  const isSignUp = type === "signup";
  const router = useRouter();

  const [fullName, setFullName] = useState<string | undefined>();
  const [mobileNumber, setMobileNumber] = useState<string | undefined>();
  const [date, setDate] = useState<Dayjs | undefined | null>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string | undefined>();

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm({
      fullName,
      mobileNumber,
      dob: date!,
      email,
      password,
      confirmPassword,
      isSignUp,
    });

    if (formErrors) {
      setError(formErrors);
      return;
    }
    if (isSignUp) {
    }
    const dob = isSignUp
      ? `${date!.date()}-${date!.month() + 1}-${date!.year()}`
      : "";

    const AuthenticationResult = await authenticate({
      fullName,
      mobileNumber,
      dob,
      email,
      password,
      isSignUp,
    });

    if (typeof AuthenticationResult === "string") {
      setError("Please try again");
      return;
    }
    setUsername(AuthenticationResult);
    router.push("/");
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "8vh", // Adjust as needed
        }}
      >
        {error && (
          <Alert
            sx={{
              width: "100%",
            }}
            variant="outlined"
            severity="error"
            onClose={() => {
              setError(null);
            }}
          >
            {error}
          </Alert>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {isSignUp ? "Sign Up" : "Login"}
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component={"form"}
            sx={{
              width: "100%",
              marginTop: "1em",
            }}
          >
            {isSignUp && (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            )}
            {isSignUp && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateField"]}>
                  <DateField
                    format="DD-MM-YYYY"
                    fullWidth
                    label="Date of Birth"
                    value={date}
                    onChange={(date) => setDate(date)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            )}

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isSignUp && (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="mobile"
                autoComplete="mobile"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            )}

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUp && (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="current-confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}

            {/* Add more form fields as needed */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                mt: 1,
              }}
            >
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AuthenticationForm;
