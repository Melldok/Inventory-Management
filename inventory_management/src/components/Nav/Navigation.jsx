import React, { useState } from 'react';
import cart from '../../icons/cart.png';
import chart from '../../icons/chart.png';
import shelf from '../../icons/shelf.png';
import chef from '../../icons/chef.png';
import settings from '../../icons/settings.png';
import backward from '../../icons/backward.png';
import  './Navigation.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom';



export const Navigation = () => {


  


  return (
    <nav> 
        <img className='buttons' src={ backward } alt="" />
        <ul>
            <li><NavLink className={({ isActive }) => (isActive ? "activated" : "")} to="Cart"><img src={cart} alt=""/></NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "activated" : "")} to="Graphics"><img src={chart} alt="" /></NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "activated" : "")} to="Shelf"><img src={shelf} alt="" /></NavLink> </li>
            <li><NavLink className={({ isActive }) => (isActive ? "activated" : "")} to="Kitchen"><img src={chef} alt="" /></NavLink></li>
        </ul>
        <img className="buttons" src={ settings } alt="" />
    </nav>
  )
}
