import {StyledCollectionItem, Image, CollectionFooter, Name, Price} from './collection-item.styles'; 

const CollectionItem = ({id, name, price, imageUrl}) => ( 
    <StyledCollectionItem>
        <Image imageUrl = {imageUrl}/> 
        <CollectionFooter>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </CollectionFooter>
    </StyledCollectionItem>
);  

export default CollectionItem; 