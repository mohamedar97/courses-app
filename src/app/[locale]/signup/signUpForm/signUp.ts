import firebaseApp from "@/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc, serverTimestamp } from "firebase/firestore";

interface Params {
  fullName: string;
  email: string;
  password: string;
  mobileNumber: string;
  dob: string;
}
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const signUp = async ({
  fullName,
  email,
  password,
  mobileNumber,
  dob,
}: Params) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
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

    return {
      fullName,
      id: userCredential.user.uid,
    };
  } catch (error) {
    return error!.toString();
  }
};
export default signUp;
