import React, { createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleSignIn = (provider) => {
    // setLoader(true);
    return signInWithPopup(auth, provider);
  };
  const LogOut = () => {
    // setLoader(true);
    return signOut(auth);
  };
  const createUser = (email, password) => {
    // setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    // setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) =>{
    return updateProfile(auth.currentUser,profile)
  }

  const verifiedEmail = () =>{
    return sendEmailVerification(auth.currentUser);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser === null || currentUser.emailVerified){
        setUser(currentUser);
      }
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    googleSignIn,
    LogOut,
    updateUserProfile,
    createUser,
    verifiedEmail,
    signInUser,
    loader,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
