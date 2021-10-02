import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Footer.css'


function Footer() {
    return (
        <>
        <div className='footer'>
            <div className="socialMedia">
                <FacebookIcon /><InstagramIcon /> <PinterestIcon /> <YouTubeIcon />
            </div>
            <p className='copy'> &copy; 2021 Netcraft Project</p>
        </div>
        </>
    )
}

export default Footer
