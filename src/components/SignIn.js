import React, { useState } from 'react';
import { auth, googleAuth } from '../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errMsg, setErrMsg] = useState('Enter a valid case of all parameter.')
    const [submitDisable, setSubmitDisable] = React.useState(false);

    React.useEffect( () => {
    
        const keepLogin = auth.onAuthStateChanged( (user) => {
            if(user){
                navigate('/mainpage')
            }
        } )
        return () => keepLogin();
    },[])

    function handleOnChange(event) {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const signIn = async (event) => {
       event.preventDefault();
       if(!formData.email || !formData.password){
        setErrMsg('Fill all the Fields')
       }
       setErrMsg('')
       setSubmitDisable(true);

       try {
        await signInWithEmailAndPassword(auth,formData.email,formData.password);
        navigate('mainpage')
        
       } catch (err) {
        setErrMsg(err.message)
       }
       finally{
        setSubmitDisable(false);
       }

    }

    const signUpWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuth)
        } catch (err) {
            setErrMsg(err.message)
        }
    }

    

    return (
        <div className='h-screen w-full bg-gradient-to-br from-pink-700 via-black to-pink-950 flex justify-center items-center'>
            <div className='sm:shadow-lg sm:shadow-white p-10 border-t-4 border-b-4 sm:border-1 sm:border sm:w-[55%] lg:w-[30%] flex flex-col gap-6 sm:gap-16'>
                <div>
                    <h1 className='text-white text-sm sm:text-3xl'>Welcome to </h1>
                    <h1 className='text-white text-lg sm:text-3xl'>PCCOE FITNESS FIRST FESTIVAL</h1>
                </div>
                <form className='flex flex-col gap-4' action="">
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        value={formData.email}
                        onChange={handleOnChange}
                        id=""
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name="password"
                        value={formData.password}
                        onChange={handleOnChange}
                        id=""
                    />
                </form>
                <p style={{ color: 'red', fontWeight: 'bolder' }}>{errMsg}</p>
                <h1 className='text-white'>Don't have an account ? <span><Link style={{ color: 'yellow', textDecoration: 'none', fontWeight: 'bolder' }} to='/signup'>Sign Up</Link></span></h1>
                <div className='flex gap-4'>
                    <button onClick={signIn} disabled={submitDisable} className='text-white border px-2 py-1 hover:bg-pink-500 transition-colors duration-200 hover:border-pink-500'>Sign In</button>
                    <button onClick={signUpWithGoogle} className='text-white border px-2 py-1 hover:bg-pink-500 transition-colors duration-200 hover:border-pink-500'>Sign Up With Google</button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
