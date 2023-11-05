import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogo } from "phosphor-react";
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from '../../services/firebase';
import './styles.scss';
import { useUser } from './UserContext'; // Importe o useUser

export function SignIn() {
  const { user, setUser } = useUser(); // Use o hook aqui
  const navigate = useNavigate();

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
    <div className="user">
      {user?.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
      <strong>{user?.displayName}</strong>
      <small>{user?.email}</small>
    </div>
    <h1 className='h1' >Acesse sua conta</h1>
    <span>
      Acesse sua conta através do Google.
    </span>
    <button type="button" onClick={signInWithGoogle} className="button">
      <GoogleLogo />
      SignIn with Google
    </button>
  </div>
  )
}





/*
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogo } from "phosphor-react";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../services/firebase';
import './styles.scss';
import { useUser } from './UserContext'; // Importe o useUser

export function SignIn() {
  const { user, setUser } = useUser(); // Use o hook aqui
  const navigate = useNavigate();

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Adicione este useEffect para ouvir mudanças no estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        navigate('/home');
      }
    });
    return () => unsubscribe(); // Limpa a inscrição ao desmontar o componente
  }, [setUser, navigate]);

  return (
    <div className="container">
      <div className="user">
        {user?.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
        <strong>{user?.displayName}</strong>
        <small>{user?.email}</small>
      </div>
      <h1 className='h1' >Acesse sua conta</h1>
      <span>
        Acesse sua conta através do Google.
      </span>
      <button type="button" onClick={signInWithGoogle} className="button">
        <GoogleLogo />
        SignIn with Google
      </button>
    </div>
  );
}
*/