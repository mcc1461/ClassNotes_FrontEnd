import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { auth } from "../auth/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = useCallback(
    async (email, password, displayName) => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
          displayName: displayName,
        });
        navigate("/");
        toastSuccessNotify("Registered successfully!");
      } catch (error) {
        console.log(error);
        toastErrorNotify(error.message);
      }
    },
    [navigate]
  );

  const signIn = useCallback(async (email, password) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      toastSuccessNotify("Logged in successfully!");
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
    }
  }, [navigate]);

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        setCurrentUser(false);
        sessionStorage.removeItem("user");
      }
    });
  };

  const logOut = useCallback(() => {
    signOut(auth);
    toastSuccessNotify("Logged out successfully");
  }, []);

  const signUpProvider = useCallback(() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/");
        toastSuccessNotify("Logged in successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  const forgotPassword = useCallback((email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastSuccessNotify("Please check your email");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  }, []);

  const values = React.useMemo(() => {
    return {
      createUser,
      signIn,
      logOut,
      currentUser,
      signUpProvider,
      forgotPassword,
    };
  }, [createUser, signIn, logOut, currentUser, signUpProvider, forgotPassword]);

  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
