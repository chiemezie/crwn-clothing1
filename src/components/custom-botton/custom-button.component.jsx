import { StyledCustomButton } from './custom-button.styles'; 

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => ( 
    <StyledCustomButton className={`${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>
        {children}
    </StyledCustomButton>
) ; 

export default CustomButton; 