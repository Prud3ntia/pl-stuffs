import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Logo from '../ui/image/phone-lasso.png';


import BannerHamburger from './BannerHamburger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  buttons: {
    display: "flex",
    flex: 1
  },
  storeName: {
    color: "black",
    marginTop: "16px",
    display: "inline-block"
  },
  menuButton: {
    marginRight: "30px",
    textDecoration: "none",
    color: "black"
  },
  appbar: {
    padding: "20px 60px",
    [theme.breakpoints.down('md')]: {
      padding: "20px 10px"
    }
  }
});

const Banner = ({ classes, quantity, config, width }) => {

  const number = quantity ? ` (${quantity})` : "";

  const productLink = <Link to={`/product`} style={{flex: 1}} className={classes.menuButton}>
    <Typography variant="button" gutterBottom>Shop</Typography>
  </Link>

  let menu;
  if (isWidthDown('sm', width)) {
    menu = <BannerHamburger productLink={productLink} number={number} />
  } else {
    menu = (<span className={classes.buttons}>
        { productLink }
        <Link to={`/cart`} className={classes.menuButton} style={{ marginRight: 0 }}>
          <Typography variant="button" gutterBottom>Cart{number}</Typography>
        </Link>
      </span>)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" className={classes.appbar}>
        <Toolbar>
          <Link to={`/`} className={classes.menuButton}>
            <div className="logo" />
            <img src={Logo} width={150} height={75} />
          </Link>
          { menu }
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withWidth()(withStyles(styles)(Banner));