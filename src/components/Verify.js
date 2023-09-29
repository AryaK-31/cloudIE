import React, { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { Link, useNavigate } from 'react-router-dom';

function Verify() {
    const [isVerified, setIsVerified] = useState(false);
    const email = auth?.currentUser?.email;
    const verifyIcon = isVerified ? (
        <i className="fas fa-check-circle"></i>
    ) : (
        <i className="fas fa-envelope-open-text"></i>
    );

    const navigate = useNavigate();

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setIsVerified(user.emailVerified);
            navigate('/verify')
        }
    }, [email]);



    return (
        <div className='h-screen w-full bg-pink-700 p-32'>
            <div className='bg-white h-full'>
                <div className='flex flex-col gap-2 justify-center items-center h-full'>
                    <h1 className='text-[6rem]'>{verifyIcon}</h1>
                    {isVerified ? (
                        <>
                            <h1 className='text-4xl'>Your Email Is Successfully Verified</h1>
                            <p className='text-lg'>Thank You For Your Patience.</p>
                            <p className='text-xl cursor-pointer'>
                                To Continue: <Link to='/mainpage'>Main Page</Link>
                            </p>
                        </>
                    ) : (
                        <>
                            <h1 className='text-4xl'>Verify The Message Sent To Your Email To Continue</h1>
                            <p className='text-lg'>Thank You For Your Patience.</p>
                            <p className='text-xl'>
                                Email Sent To: <span>{email}</span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Verify;
