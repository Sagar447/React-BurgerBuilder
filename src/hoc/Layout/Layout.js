import React, {Component} from 'react';
import Aux from '../Auxillary/Auxillary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'; 
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
  state={
    showSideDrawer :false
  }

  sideDrawerToggleHandler = () =>{
    this.setState((preState) =>{
      return {showSideDrawer:!preState.showSideDrawer};
    })
  }

  sideDrawerClosedHandler= () =>{
    this.setState({showSideDrawer: false});
  }
  render(){
    return(
    <Aux>
      <Toolbar toggleDrawerClicked = {this.sideDrawerToggleHandler} />
      <SideDrawer 
      open = {this.state.showSideDrawer}
      closed = {this.sideDrawerClosedHandler}/>
      <main className = {classes.Content}>
        {this.props.children}
      </main>
    </Aux>
    );
  }
}
  

export default Layout;