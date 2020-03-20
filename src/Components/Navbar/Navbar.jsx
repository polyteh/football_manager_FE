import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Nav=()=>{
return(
<div className={classes.nav}>
    <div className={classes.item} >
        <NavLink to="/teams" activeClassName={classes.active}>Teams</NavLink>
    </div>
    <div className={classes.item}>
        <NavLink to="/players" activeClassName={classes.active}>Players</NavLink>
    </div>

</div>

)

}
export default Nav;
