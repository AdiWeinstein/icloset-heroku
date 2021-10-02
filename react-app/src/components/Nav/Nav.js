import './Nav.css';
import {Link} from "react-router-dom";
import {useState} from 'react';
//import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { BiCloset } from "react-icons/bi"
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { RiFindReplaceLine } from "react-icons/ri";



export default function Nav() {
    const [showLinks,setShowlinks] = useState(false); //when setShowLinks change to true, the menu Icon show 
   
    return ( 
    <>
    <nav className='navbar'>
        <div className='logo'>
        <Link to='/'> I CLOSET </Link>

        </div>
        <div className='right' id={showLinks ? 'hidden' : ""}> {/* (changing the id value) */}

            <Link to='/addItems'>
            <ControlPointOutlinedIcon/>
                Add Items
            </Link>
            <Link to='/mainComponent'>
            <RiFindReplaceLine size= '1.5em'/>
                Finde me 
            </Link>
            <Link to='/likedItems'>
                <FavoriteBorderOutlinedIcon/>
                Liked Items
            </Link>
            <Link to='/view-all'>
                <BiCloset size= '1.5em'/> 
                View all
            </Link>
{/*             
            <Link to='/logIn'>
                <AccountCircleOutlinedIcon/>Log in
            </Link> */}
            
        </div>

            <button className="menu-btn" onClick={() => setShowlinks(!showLinks)}>
                    < MenuOutlinedIcon fontSize="large"/>
            </button>
    </nav> 
    </>
    )
}