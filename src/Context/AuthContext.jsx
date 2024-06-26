
import React, {useState, useEffect} from "react";
import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) {
        console.log('Error creating auth conext')
        
    }
    return context;
}

export function AuthProvider ({children}) {

    const [user, setUser] = useState("")
    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            if(!currentUser) {
                console.log('No user logged in')
                setUser("")
            }else{
                setUser(currentUser)
                console.log('User logged in')
                console.log(currentUser)
            }
        })
        return () => suscribed()
    }, [])

    // This fixed the Cors error
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider(); // Use 'GoogleAuthProvider' directly
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
        await signInWithPopup(auth, provider); // Use 'provider' directly here
        } catch (error) {
        alert(error.message);
        }
    };

    const logout = async () => {
        const response = await signOut(auth)
        console.log(response)
    }


    return (
        <authContext.Provider value={
            {
                loginWithGoogle,
                logout,
                user
            }
        }>
            {children}
        </authContext.Provider>
    )
}