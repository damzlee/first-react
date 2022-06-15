import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom"

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
       
      </a>
      <a className="menu-item" href="/salads">
       
      </a>
      <a className="menu-item" href="/pizzas">
       
      </a>
      <a className="menu-item" href="/desserts">
      
      </a>
    </Menu>
  );
};