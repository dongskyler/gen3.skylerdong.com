import React, { Component } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';

class Navbar extends Component {
  render() {
    return (
      <AppBar id="navbar" position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
          />
          <Typography variant="h6" className="classes.title">
            Skyler Dong
          </Typography>
          <Button color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
