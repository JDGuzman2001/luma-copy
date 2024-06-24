import React from 'react';
import { useNavigate } from 'react-router-dom';
import  {AuthProvider, useAuth} from '../../Context/AuthContext'; 
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';
import Navbar from '../../Components/Navbar';


function SignIn() {
    const auth = useAuth();
    const navigate = useNavigate();


    const handleGoogle = async (e) => {
      e.preventDefault();
      try {
        await auth.loginWithGoogle(e);
        const { photoURL } = auth.user;
        console.log("Photo URL:", photoURL);
        navigate('/events', { state: { photoURL: photoURL } });
        console.log("Usuario inició sesión con Google");
        console.log(auth.user);
      } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
        // print("Error al iniciar sesión con Google:", error);
      }
    }

    return (
        <AuthProvider>
            <div className='flex justify-center items-center h-screen'>
            <Navbar/>
                <div className='flex flex-col rounded-lg bg-white/10 p-6'>
                  <div 
                      className=" top-0 left-0 flex justify-center items-center bg-white/10 w-20 h-20 rounded-full m-2 p-1 mb-10">
                      <ArrowLeftEndOnRectangleIcon className="size-10 text-white/60"/>
                  </div>
                  <h1 className='text-2xl text-white mb-2'>Welcome to luma</h1>
                  <p className='text-white/60 mb-5'>Please sign in with Google account</p>
                  <button 
                    className='flex items-center bg-white/10 text-white/60 py-2 px-7 rounded'
                    onClick={
                      (e) => {
                        handleGoogle(e);
                      }
                    }>
                      <img 
                          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" 
                          alt="Google logo" 
                          className='h-6 w-6 mr-2 filter grayscale' 
                      />
                      Sign In with Google
                  </button>

                </div>
            </div>
        </AuthProvider>
        
    )
  }
  
  export default SignIn