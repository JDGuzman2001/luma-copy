
import React from "react";
import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) {
        console.log('Error creating auth conext')
        
    }
    return context;
}

export function AuthProvider ({children}) {

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, responseGoogle)
    }

    const logout = async () => {
        const response = await signOut(auth)
        console.log(response)
    }


    return (
        <authContext.Provider value={
            {
                loginWithGoogle,
                logout
            }
        }>
            {children}
        </authContext.Provider>
    )
}