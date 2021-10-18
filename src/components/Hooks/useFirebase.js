import initializeFirebaseAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


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
        handleGoogleSignIn,
        services
    }
}

export default useFirebase;