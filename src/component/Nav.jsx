import React from "react";
import Logo from '../component/Logo'
import { LuSearch } from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const navlist =[
    {title:'Shop',link:'a'},
    {title:'About US', link:'b'},
    {title:'Journal',link:'c'},
    {title:'Store', link:'d'}
]

const icons = [
    {icon:<LuSearch />, link:'a'},
    {icon:<FaCartArrowDown />, link:'b'},
    {icon:<CiUser />, link:'c'}
]

 const Nav=()=>{
    return(
        <div className='flex justify-between  md:my-10 '>

            <Logo />
            <ul className="flex gap-3">
                {
                    navlist.map(({title,link})=>(
                        <li key={link}>{title}</li>

                    ))
                }
            </ul>
             <ul className="flex gap-3">
                {
                    icons.map(({icon,link})=>(
                        <li key={link} className="text-2xl">{icon}</li>

                    ))
                }
            </ul>


        </div>
    )
}
export default Nav
