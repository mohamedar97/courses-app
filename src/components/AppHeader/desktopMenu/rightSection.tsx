import Grid from "@mui/material/Grid";
import React from "react";
import UserAvatar from "@/components/AppHeader/userAvatar";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useAuthContext } from "@/contexts/authContext";

const RightSection = () => {
  const { user } = useAuthContext();
  const elements = user ? (
    <Grid item>
      <UserAvatar username={user.fullName} />
    </Grid>
  ) : (
    <>
      <Grid item>
        <Button
          sx={{
            color: "white",
          }}
          disableElevation
          variant="text"
        >
          <Link href="en/login">Login </Link>
        </Button>
      </Grid>
      <Grid item>
        <Button color="secondary" disableElevation variant="contained">
          <Link href="en/signup">Sign Up</Link>
        </Button>
      </Grid>
    </>
  );

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      {elements}
    </Grid>
  );
};

export default RightSection;
