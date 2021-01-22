import React from 'react'
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Typography, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
// import classes from '*.module.css'
import logo from '../../Assests/1.png'
import useStyles from './styles'
const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant = "h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Roadie App" height="80px" className={classes.image}/>
                        Roadie Tee's
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart item" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>

                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
