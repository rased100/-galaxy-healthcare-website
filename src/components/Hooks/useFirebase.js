import initializeFirebaseAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

initializeFirebaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // console.log(user)

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                console.log(result.user)
            })
        // .catch((error) => {
        //     console.log(error.message)
        // });
    }

    return {
        user,
        handleGoogleSignIn
    }
}

export default useFirebase;