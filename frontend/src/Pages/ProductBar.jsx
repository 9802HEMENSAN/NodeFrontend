import React from 'react'
import ProductList from '../components/Products'
 
import { Sidebar } from '../components/Sidebar'

const ProductBar = () => {
    return (
        <div style={{display:"flex"}}>
            <div className='sidebar'  width = "15%" >
                <Sidebar />
            </div>
            <div className='ProductList' width = "85%" >
                <ProductList/>
            </div>
        </div>
    )
}

export default ProductBar