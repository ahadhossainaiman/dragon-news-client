import React, { createContext, useEffect } from "react";
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from "../../firebase/firebase.config";
import { useState } from "react";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null);
  const googleSignIn = (provider) =>{
        return signInWithPopup(auth,provider);
    }
  const LogOut = () =>{
    return signOut(auth);
  }  

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

  const authInfo = { user,googleSignIn,LogOut };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
