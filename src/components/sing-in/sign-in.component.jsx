import {useState} from 'react'; 
import {StyledSignIn, Title, Buttons } from './sign-in.styles'; 
import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../custom-botton/custom-button.component'; 
import {signInWithGoogle} from '../../firebase/firebase.utils'

const SignIn = () => { 
    const [state, setState] = useState({email: '', password: ''});  
    
    const handleSubmit = event => { 
        event.preventDefault();  
        setState({email: '', password: ''}); 
    }    

    const handleChange = event => { 
        const {name,value} = event.target; 
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    

    return( 
        <StyledSignIn>
            <Title>I already have an account </Title>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={state.email} required handleChange={handleChange} label="email" />

                <FormInput type="password" name="password" value={state.password} required handleChange={handleChange} label="password" />
                <Buttons>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </Buttons>

            </form>
        </StyledSignIn>
    ); 

}  

export default SignIn; 