import {useState, useEffect} from 'react';
import './App.css'; 
import HomePage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shop/shop.component'; 
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/header.component'; 
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'; 
import { auth } from './firebase/firebase.utils'; 

function App() { 
  const [currentUser, setCurrentUser] = useState(null);  
 
  useEffect(()=>{ 
      const unlisten = auth.onAuthStateChanged(user => { 
        user? setCurrentUser(user) : setCurrentUser(null);   

        console.log(user); 
      }) 
      return () => { 
        unlisten(); 
      }
  })
  return (
    <div >
      <Header currentUser = {currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>

    </div> 
  );
}

export default App;
