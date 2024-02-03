import React from 'react'
import { useAuth } from '../../hooks/useAuth';

interface Props {}

function Me(props: Props) {
    const {user} = useAuth();

    return (
        <div>
            {user.username}
        </div>
    )
}

export default Me
