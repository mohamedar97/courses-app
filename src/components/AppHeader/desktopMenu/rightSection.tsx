import Grid from "@mui/material/Grid";
import React from "react";
import UserAvatar from "@/components/AppHeader/userAvatar";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase";
import Button from "@mui/material/Button";
import Link from "next/link";

const auth = getAuth(firebaseApp);
const user = auth.currentUser;

const RightSection = () => {
  const elements = user ? (
    <Grid item>
      <UserAvatar />
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
          <Link href="/login">Login </Link>
        </Button>
      </Grid>
      <Grid item>
        <Button color="secondary" disableElevation variant="contained">
          <Link href="/signup">Sign Up</Link>
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
