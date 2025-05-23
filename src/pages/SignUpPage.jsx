import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';

function SignUpPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // After successful registration, redirect to login page
    navigate('/login');
  };

  return <SignUpForm onRegister={handleRegister} />;
}

export default SignUpPage;
