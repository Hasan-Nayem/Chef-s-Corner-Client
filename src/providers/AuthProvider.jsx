import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase/__firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,SetUser] = useState(null);
    const [loader,SetLoader] = useState(true);
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();

    const register = (email, password) => createUserWithEmailAndPassword(auth,email,password);
    const login = (email, password) => signInWithEmailAndPassword(auth,email,password);
    const signInWithGoogle = () => signInWithPopup(auth,googleAuthProvider);
    const signInWithGithub = () => signInWithPopup(auth,githubAuthProvider);
    const logout = () => signOut(auth);


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            SetUser(currentUser);
            SetLoader(false);
        })

        //stop observing while unmounting
        return () => unsubscribe(); 
        
    },[]);

    const authInfo = {
        register,
        login,
        user,
        logout,
        loader,
        signInWithGoogle,
        signInWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;