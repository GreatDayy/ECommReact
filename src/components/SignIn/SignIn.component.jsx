//In order to use Context inside other classes i need two things
//1:the useContext and secondly i need to get the userContext.
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../Form-input/Form-input.component";
import Button from "../button/button.component";

import "./SignIn.styles.scss";

const DefaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const {setCurrentUser} = useContext(UserContext);
  const logUserWithGooglePopUp = async () => {
     await signInWithGooglePopUp();
  };

  const [formFields, setFormfields] = useState(DefaultFormFields);
  const resetFormsField = () => {
    setFormfields(DefaultFormFields);
  };

  const { email, password } = formFields;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      
      // setCurrentUser(user);

      resetFormsField();
    } catch (error) {
      console.log(error);

      switch(error.code) {
        //email is wrong
        case 'auth/user-not-found':
          alert("No user associated with this email")
        break;

        case 'auth/wrong-password':
          alert("Incorrect password for email")
          break;
        default:
          break;
      }
    }
    


  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormfields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Have an Account?</h2>
      <span>Sign In with your email and password</span>
      <form method="POST" onSubmit={handleSubmit}>
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
        <div className="button-containers">
          <Button type="submit">Sign in</Button>

          <Button type="button" buttonType="google" onClick={logUserWithGooglePopUp}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
