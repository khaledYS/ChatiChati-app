import React, { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';

interface Props {}

function Logout(props: Props) {
    const {logout} = useAuth();
    const navigate = useNavigate();
    let loaded = false;
    useEffect(()=>{
        if(loaded) return ;
        (async ()=>{
            try {
                loaded = true;
                await logout();
                navigate("/login", {replace: true});
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

    return (
        <div className='w-full h-full grid place-items-center'>
            <h1 className='font-bold text-3xl text-[#555]'>Logging out...</h1>
        </div>
    )
}

export default Logout
