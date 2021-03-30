import {StyledHeader, Options} from './header.styles'; 
import {Link} from 'react-router-dom'; 
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'; 



const Header = ({currentUser}) => (
    <StyledHeader>
        <Link className = "logo-container" to="/">
            <Logo className= "logo"/> 
        </Link> 
        <Options>
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop"  className="option">CONTENT</Link>
            { 
                currentUser? <div className="option" onClick={()=> auth.signOut()}>Sign out</div> : <Link to="/signin" className="option">Sign in</Link>
            }
        </Options>
    </StyledHeader>
) ; 

export default Header; 