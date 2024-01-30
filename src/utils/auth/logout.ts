import firebaseApp from "@/firebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    return error!.toString();
  }
};
export default logout;
