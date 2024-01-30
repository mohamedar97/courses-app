import firebaseApp from "@/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { doc, getFirestore, setDoc, serverTimestamp } from "firebase/firestore";

interface Params {
  fullName?: string;
  email: string;
  password: string;
  mobileNumber?: string;
  dob?: string;
  isSignUp: boolean;
}
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const authenticate = async ({
  fullName,
  email,
  password,
  mobileNumber,
  dob,
  isSignUp,
}: Params) => {
  try {
    let userCredential: UserCredential;
    if (isSignUp) {
      userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        fullName,
        email,
        mobileNumber,
        dob,
        timestamp: serverTimestamp(),
      });
    } else {
      userCredential = await signInWithEmailAndPassword(auth, email, password);
    }

    return {
      email,
      id: userCredential.user.uid,
    };
  } catch (error) {
    return error!.toString();
  }
};
export default authenticate;
