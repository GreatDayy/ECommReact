//Jag måste generalisera FormInputen i userSignIn
import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../Form-input/Form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

import './SignUp.styles.scss'

const DefaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
const {setCurrentUser} = useContext(UserContext);
  

  const [formFields, setFormfields] = useState(DefaultFormFields);
  const resetFormsField = () => {
    setFormfields(DefaultFormFields);
  };
   
  const { displayName, email, password, confirmPassword } = formFields;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Your password do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);

      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
    
      
      resetFormsField();
    } catch (error) {
      if ((error.code = "auth/email-already-in-use")) {
        alert("Oops, the email is already in use, please try again!");
        return;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormfields({ ...formFields, [name]: value }); //smart solution :)! Generically updating all values in the input field.
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form method="POST" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          required
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />

     
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button  type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
