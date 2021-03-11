import {StyledCollectionPreview, Title, Preview} from './collection-preview.styles'; 
import CollectionItem from '../collection-item/collection-item.component'; 

const CollectionPreview = ({title,items}) => ( 
    <StyledCollectionPreview>
        <Title>{title.toUpperCase()}</Title>
        <Preview>
            { 
                items.filter((itm,ind)=> ind < 4).map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </Preview>
    </StyledCollectionPreview>
); 

export default CollectionPreview; 