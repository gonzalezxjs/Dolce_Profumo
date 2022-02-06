import React from 'react';
import './SignUp.css'
import NavBarApp from '../../1. Home/1.1. NavBar/NavBarApp'
import {Button} from 'react-bootstrap'

const SignUp = () => {
  return (
    <div class='hi'>
        <NavBarApp/>

        <div class= 'Claus'>

        
        <center><p>¿Tienes una cuenta?</p></center>
        <center><p>¿Aún no tienes una cuenta?</p></center>

        <Button variant="dark">Iniciar sesión</Button>{' '}
        <Button variant="light">Registrarse</Button>{' '}

        
        
        
        
        
                
        </div>

    </div>
  
  );
};

export default SignUp;
