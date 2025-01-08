import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext({})
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);

const googleProvider= new GoogleAuthProvider();
const[loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(updatedData)=>{
        return updateProfile (auth.currentUser,updatedData)
        }
         const handleSignOut=()=>{
            return signOut(auth);
         }
         const singInUser=(email,password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password)
         }
         const googleSignIn=()=>{
            setLoading(true);
return signInWithPopup(auth,googleProvider);
         }
        useEffect(()=>{
            const unSubscribed = onAuthStateChanged(auth,currentUser=>{
              setLoading(false)
          setUser(currentUser)
            })
            return ()=>{
              unSubscribed()
            }
          },[])
    const authInfo={
        createUser,
        updateUserProfile,
        user,
        setUser,
        loading,
        handleSignOut,
        singInUser,
        googleSignIn
    }
    return (
<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
    );
};

export default AuthProvider;