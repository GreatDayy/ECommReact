import {createContext, useState, useEffect} from 'react';
import {createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser} from '../utils/firebase/firebase.utils'

//1: First Create A variable that is the name+Context = createContext({})
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

//2: Second create an export function that will be the Provider

export const UserProvider = ({children}) => {

    //3: Create an appropriate useState variable that will be accessed by the entire application
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
     
   
    useEffect(() => {
      const unsubscribe=  onAuthStateChangedListener((user) => {
          if(user) {
              createUserDocumentFromAuth(user);
          }
          setCurrentUser(user);
      }) 
         return unsubscribe;
    
    },[])

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>

    )
}



