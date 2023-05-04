import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase/__firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,SetUser] = useState(null);
    const [loader,SetLoader] = useState(true);

    const register = (email, password) => createUserWithEmailAndPassword(auth,email,password);
    const login = (email, password) => signInWithEmailAndPassword(auth,email,password);
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
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;