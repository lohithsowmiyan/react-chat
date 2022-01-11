import React from 'react'
import { Button, Card,Container } from 'react-bootstrap'
import {auth} from './firebase'
import {GoogleAuthProvider,signInWithPopup, signInWithRedirect, signOut} from 'firebase/auth';
import 'firebase/app';
import './Signin.css'
import { useNavigate } from 'react-router-dom'

export  function Signout(){
    const handleSignout =  () =>{
            signOut(auth)
    }
    return(
        <div>
            <Button variant='danger' onClick={handleSignout}>Sign Out</Button>
        </div>
    )
}

export default function Signin() {
   const signinWithGoogle =()=>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then(
        navigate("/")
    )
    
    
   
}

 let navigate = useNavigate()

  

    return (
        <>
        <Container className=" d-flex allign-items-center justify-content-center"
    style={{minHeight:"100vh"}}>
      <div className="w-100" style={{maxwidth:"400px"}}>
            <h1>Welcome to the public Chat:</h1>
            <Card className='box'>
                <Card.Body>
                    <p>To Signin click below</p>
                    <Button onClick={signinWithGoogle}>
                        Sign In 
                    </Button>
                </Card.Body>
            </Card>
            </div>
            </Container>
        </>
    )
}
