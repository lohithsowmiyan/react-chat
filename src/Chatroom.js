import React, { useState,useEffect } from 'react'
import {db,auth} from './firebase'
import {collection,doc,getDocs, serverTimestamp, setDoc,query,orderBy,onSnapshot} from 'firebase/firestore'
import './App.css'
import { Signout } from './Signin'



export default function Chatroom() { 
    
    const newCollectionRef = collection(db,'message');

    const [message,setMessage]= useState({})
    
     useEffect(() => {
        const getMessage = async ()=>{
            
            const q =  query(newCollectionRef,orderBy('created'))
            

            onSnapshot(q,(store) =>  setMessage(store.docs.map((doc)=>({ id: doc.id, ...doc.data() })))
           )
        } 
        
         console.log(message)
         getMessage();
      
     }, [])
     const [text,setText]= useState();

    

     const sendMessage=  async (e) =>{
         e.preventDefault()

         const {uid , photoURL} = auth.currentUser;

         let newMessage ={
             text : text,
             created : serverTimestamp(),
             uid,
             photoURL

         };

         setText("");
         const newDocRef  = await doc(collection(db,'message'))
         
         setDoc(newDocRef,newMessage);
     }

    return (
        <>
            <Signout/>
            <main>
             
            { message.map((chat)=>{ return(<ChatMessage key={chat.id}  message={chat}/>)})}
           
            </main>

            <form onSubmit={sendMessage}>
                <input onChange={(e)=>{setText(e.target.value)}} type='text' placeholder='type here...' id="inp"></input>
                <button type='submit' className='send' onClick={()=>{document.getElementById("inp").innerHTML="hi"}}>POST</button>
            </form>
        </>
    )
}

 function ChatMessage(props){
   const {text,uid,photoURL}=props.message

    const messagetype = uid === auth.currentUser.uid ? 'sent' : 'recieved';
    //console.log(messagetype)
    return(
        <>
        <div className={`message ${messagetype}`}>
        <img src={photoURL} />
        <p>{props.message.text}</p>
       </div>
        </>

    )
} 

/**/

