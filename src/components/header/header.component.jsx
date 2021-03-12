import {StyledHeader, Options} from './header.styles'; 
import {Link} from 'react-router-dom'; 
import {ReactComponent as Logo} from '../../assets/crown.svg'
 



const Header = () => (
    <StyledHeader>
        <Link className = "logo-container" to="/">
            <Logo className= "logo"/> 
        </Link> 
        <Options>
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop"  className="option">CONTENT</Link>
        </Options>
    </StyledHeader>
) ; 

export default Header; 