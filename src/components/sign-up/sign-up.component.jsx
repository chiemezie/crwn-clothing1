import {useState} from 'react';
import {StyledSignUp, Title, SignUpForm} from './sign-up.styles'; 
import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../custom-botton/custom-button.component'; 
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'; 

const SignUp = props => { 
    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }) ;  
    
    const handleSubmit = async event => { 
        // prevent the default arrangement when  a form is submitted 
        event.preventDefault(); 
        // be sure that the password and confirm password don't match 
        if(state.password !== state.confirmPassword){ 
            alert("Passwords don't match"); 
            return; 
        }

        try{ 
            const {user} = await auth.createUserWithEmailAndPassword(state.email, state.password);  
            // make sure we wait till the user profile document is created 
            await createUserProfileDocument(user, {displayName: state.displayName});  
            // set the state to empty again 
            setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }); 
        } 

        catch (error){ 
            console.error(error); 
        }


    } 

    const handleChange = event => { 
        const {name, value} = event.target; 
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    return(
        <StyledSignUp>
            <Title>I do not have an account</Title>
            <span> Sign up with your email and password</span>
            <SignUpForm onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' value={state.displayName}onChange = {handleChange} label='Display Name' required/>
                <FormInput type='email' name='email' value={state.email}onChange = {handleChange} label='Email' required/>
                <FormInput type='password' name='password' value={state.password}onChange = {handleChange} label='Password' required/>
                <FormInput type='password' name='confirmPassword' value={state.confirmPassword}onChange = {handleChange} label='Confirm Password' required/>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </SignUpForm>
        </StyledSignUp>
    );
} 

export default SignUp; 