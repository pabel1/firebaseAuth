import React, { useContext, useEffect, useState } from 'react'
import './firebase'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged}  from 'firebase/auth'


const authContext= React.createContext();

//  custome hook
export  const useAuth = ()=>{
    return useContext(authContext);
}

export const AuthContextProvider = ({children}) =>{

    const [loading,setLoading] = useState();
    const [currentUser,setCurrentUser]= useState();

    useEffect(()=>{
        const auth= getAuth();
        const unsubscribe= onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;

    },[])



    // signUp function
    const signUpfunction = async ( email,password,username)=>{
        const auth= getAuth();
        await createUserWithEmailAndPassword(auth,email,password);

        // update user
       await updateProfile(auth.currentUser,{
        displayName:username,

       });
       setCurrentUser({
        ...auth.currentUser,
       });

    }

    // Login function
    const Loginfuntion=(email,password)=>{
        const auth= getAuth();
        return signInWithEmailAndPassword(auth,email,password);
    }

    // logout function 

    const logOutFunction=()=>{
        const auth= getAuth();
        return signOut(auth);
    }

    const value={
        currentUser,
        signUpfunction,
        Loginfuntion,
        logOutFunction
    }




    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    )
} 