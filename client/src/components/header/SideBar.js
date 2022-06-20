import SideBarLink from "./SideBarLink";
import React from 'react'

const Sidebar = () => {
  return(
    <div className="sidebar">
        <SideBarLink text="All Categories" />
        <SideBarLink text="Electronics" />
        <SideBarLink text="Jewelery" />
        <SideBarLink text="Men's Clothing" />
        <SideBarLink text="Womens's Clothing" />
    </div>
  );
}
export default Sidebar;