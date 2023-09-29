import React, { useState } from 'react';
import { auth, googleAuth } from '../config/firebase'
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [errMsg, setErrMsg] = useState('Enter a valid case of all parameter.')
    const [submitDisable, setSubmitDisable] = React.useState(false);

    function handleOnChange(event) {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const signUp = async (event) => {
        event.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setErrMsg('Fill all the fields');
        }
        setErrMsg('')
        setSubmitDisable(true);

        try {
            let res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            let user = res.user;
            await updateProfile(user, {
                displayName: formData.username,
            })
            await sendEmailVerification(auth.currentUser);
            navigate('/verify');

        } catch (err) {
            setErrMsg(err.message);
        } finally {
            setSubmitDisable(false)
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
                        type="text"
                        placeholder='Username'
                        name="username"
                        value={formData.username}
                        onChange={handleOnChange}
                        id=""
                    />
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
                <h1 className='text-white'>Already have an account ? <span><Link style={{ color: 'yellow', textDecoration: 'none', fontWeight: 'bolder' }} to='/'>Sign In</Link></span></h1>
                <div className='flex gap-4'>
                    <button onClick={signUp} disabled={submitDisable} className='text-white border px-2 py-1 hover:bg-pink-500 transition-colors duration-200 hover:border-pink-500'>Sign Up</button>
                    <button onClick={signUpWithGoogle} className='text-white border px-2 py-1 hover:bg-pink-500 transition-colors duration-200 hover:border-pink-500'>Sign Up With Google</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
