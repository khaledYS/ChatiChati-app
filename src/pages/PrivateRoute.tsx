import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

interface Props {
    children: React.ReactNode;
}

function PrivateRoute(props: Props) {
    const {user} = useAuth();
    const navigate = useNavigate();

    // if user doesn't exist, navigate to login page
    useEffect(()=>{
        if (!user) {
            navigate('/login', { replace: true });
        }
    }, [user])
    return (
        <> 
           {user ? props.children : (
            <div className='w-full h-full grid place-items-center text-[#333333] text-2xl '>
                401. Unauthorized access to this page.
            </div>
           )}
        </>
    )
}

export default PrivateRoute
