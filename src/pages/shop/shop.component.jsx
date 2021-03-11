import SHOP_DATA from './shop.data'; 
import {useState} from 'react'; 
import CollectionPreview from '../../components/collection-preview/collection-preview.component'; 
import {StyledShopPage} from './shop.styles'; 
const ShopPage = () => { 
    // assign the collections to the state 
    const [collections, setCollections] = useState(SHOP_DATA);  
    
    // THE RETURN 
    return( 
        <StyledShopPage>
            { 
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </StyledShopPage>
    )
} 

export default ShopPage; 