import {StyledMenuItem, Content, Title, Subtitle, BackgroundImage} from './menu-items.styles'; 
const MenuItem = ({title,imageUrl,size}) => (
 <StyledMenuItem  size={size}>
     <BackgroundImage className="background-image" imageUrl = {imageUrl}/>
     <Content className="content">
         <Title>
            {title.toUpperCase()}
         </Title>
         <Subtitle>SHOP NOW</Subtitle>
     </Content>
 </StyledMenuItem>
);  

export default MenuItem; 