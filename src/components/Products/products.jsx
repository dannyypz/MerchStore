import React from 'react';
import {Grid} from '@material-ui/core'

import Product from './Product/product'
import useStyles from './style'

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes.', price:'$100.00', image:'https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'},
    {id: 2, name: 'Tshirt', description: 'Band Tshirt', price:'$20.00', image:'https://images.unsplash.com/photo-1597501653842-47f7f924c666?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
]

const Products = () =>{
    const classes = useStyles ();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
        <Grid container justify = "center" spacing= {4}>
            {products.map((product) =>(
                <Grid item key= {product.id} sx={12} sm={6} md={4} lg={3}>
                    <Product product = {product}/>
                    </Grid>
            ))}

        </Grid>
    </main>
    )

}

export default Products;