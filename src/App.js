import {auth,db} from './firebase'
import './App.css';
import {useAuthState} from 'react-firebase-hooks/auth'
import Signin from './Signin'
import Chatroom from './Chatroom'
import {BrowserRouter as Router,Routes,Route, Outlet} from 'react-router-dom'

function App() {
  const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      <section>
       <Router>
         <Routes>
           <Route element={<ProtectedRoute/>}>
           <Route exact path="/" element={<Chatroom/>}/>
           </Route>
           <Route  path="/Signin" element={<Signin/>}/>
         </Routes>
       </Router>
      </section>
    </div>
  );
}

export default App;
function  ProtectedRoute(){
   const [user] = useAuthState(auth)
   
  return user? <Outlet/> : <Signin/>
}