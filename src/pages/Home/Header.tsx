// Header.tsx
import React from 'react';
import { useUser } from '../SignIn/UserContext';
import './home.css';

function Header() {
    const { user } = useUser();

    return (
        user && (
            <div className='header'>
                <img src={user.photoURL || ''} alt="Foto do usuário" />
                <span>{user.displayName}</span>
            </div>
        )
    );
}

export default Header;
