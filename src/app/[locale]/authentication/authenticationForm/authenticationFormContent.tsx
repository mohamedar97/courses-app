import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import {
  Alert,
  Box,
  Container,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import { AuthenticationFormContentProps } from "./interfaces";

const AuthenticationFormContent: React.FC<AuthenticationFormContentProps> = ({
  isSignUp,
  userState,
  handleChange,
  handleSubmit,
  error,
  setError,
}) => {
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
                value={userState.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
              />
            )}
            {isSignUp && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateField"]}>
                  <DateField
                    format="DD-MM-YYYY"
                    fullWidth
                    label="Date of Birth"
                    value={userState.date}
                    onChange={(date) => handleChange("date", date)}
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
              value={userState.email}
              onChange={(e) => handleChange("email", e.target.value)}
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
                value={userState.mobileNumber}
                onChange={(e) => handleChange("mobileNumber", e.target.value)}
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
              value={userState.password}
              onChange={(e) => handleChange("password", e.target.value)}
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
                value={userState.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
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

export default AuthenticationFormContent;
