import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  render() {
    return (
      <Aux>
        <Toolbar opened={this.sideDrawerOpenHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
};

export default Layout;