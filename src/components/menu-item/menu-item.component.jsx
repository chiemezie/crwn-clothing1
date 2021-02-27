import {StyledMenuItem, Content, Title, Subtitle, BackgroundImage} from './menu-items.styles'; 
import {withRouter} from 'react-router-dom';  
const MenuItem = ({title,imageUrl,size,history,match,linkUrl}) => (
 <StyledMenuItem  size={size} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
     <BackgroundImage className="background-image" imageUrl = {imageUrl}/>
     <Content className="content">
         <Title>
            {title.toUpperCase()}
         </Title>
         <Subtitle>SHOP NOW</Subtitle>
     </Content>
 </StyledMenuItem>
);  

export default withRouter(MenuItem); 