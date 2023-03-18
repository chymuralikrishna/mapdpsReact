import React from "react";
import { Link } from "react-router-dom";
export default function HeaderComponent(props){
    return (
        <div><header>
            <h1>{props.title}</h1>
        <nav>
        {
        props.navItems.map((item)=>{
         return(<Link to={item.urlName} key={item.urlName}>{item.displayName}</Link> )
            })
        }           
        </nav>
        </header>
        </div>
    )
}