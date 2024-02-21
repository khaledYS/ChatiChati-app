import { useAuth } from '@/hooks/useAuth'
import { Input } from '@/shadcn-ui-components/ui/input';
import React from 'react'
import { Link } from 'react-router-dom';

interface Props { }

function NavbarProfile(props: Props) {
    const { user } = useAuth();

    return (
        <div className='bg-[#3a3a3a] px-2 py-2 flex items-center gap-2'>
            <Link to={"/profile/me"} replace={true} className='block'><img width={53} src={`https://api.dicebear.com/7.x/initials/png?seed=${user.username}`} alt="" className='rounded-md block w-14' /></Link>

            <Input inputMode='email' className='bg-white font-sans text-base font-medium' placeholder='search A user by email' />
        </div>
    )
}

export default NavbarProfile
