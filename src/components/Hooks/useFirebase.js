import initializeFirebaseAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
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
        return signInWithPopup(auth, provider)
        // .then((result) => {
        //     setUser(result.user)
        //     console.log(result.user)
        // })
        // .catch((error) => {
        //     console.log(error.message)
        // });
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, [])

    return {
        user,
        handleGoogleSignIn,
        services,
        logOut
    }
}

export default useFirebase;