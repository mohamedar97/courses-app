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
import signUp from "./signUp";
import { useAuthContext } from "@/contexts/authContext";
import validateForm from "./formValidation";

const SignUpForm: React.FC = () => {
  const { setUsername } = useAuthContext();

  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [date, setDate] = useState<Dayjs | null>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    });

    if (formErrors) {
      setError(formErrors);
      return;
    }
    const dob = `${date!.date()}-${date!.month() + 1}-${date!.year()}`;

    // const user = await signUp({
    //   fullName,
    //   mobileNumber,
    //   dob,
    //   email,
    //   password,
    // });
    // setUsername(user!.email);
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
            Sign Up
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component={"form"}
            sx={{
              width: "100%",
              marginTop: "1em",
            }}
          >
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
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="confirm-password"
              id="confirm-password"
              autoComplete="current-confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignUpForm;
