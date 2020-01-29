import React from 'react'
import {getAllProductsCreator} from './../redux/reducers/shopPageReducer'
import ShopPage from './../screens/shopPage'

const shopPageContainer = (props) => {
    let getProducts = () => {
    props.dispatch(getAllProductsCreator())    
}
return (<ShopPage getProducts={getProducts}/>)
}

export default shopPageContainer