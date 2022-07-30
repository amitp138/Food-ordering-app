import React from 'react'
import "./Sidebar.css"
import {CgMenuBoxed} from "react-icons/cg";
const Sidebar = () => {
  return (
   <div className="container">

    <button className="btn"  type='button'> 
    <CgMenuBoxed className='menu' /> MENU</button>
</div>
  
  )
}

export default Sidebar