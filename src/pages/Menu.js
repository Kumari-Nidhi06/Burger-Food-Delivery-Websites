import React from 'react';
import { MenuList } from "../helper/MenuList";
import MenuItem from '../component/MenuItem';
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>OUR MENU</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, Key) => {
          return (
            <MenuItem
              Key={Key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Menu
