import React, { useState } from 'react'
import './Carusel.css'
import { images } from '../../Helpers/CarouseData.js'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Carusel() {
    const [currImg, setCueeImg] = useState(0)

    return (
        <div className="carusel">
            <div className="caruselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>

                <div className="left" onClick={() => {
                    currImg > 0 && setCueeImg(currImg - 1);
                }}>
                    <ArrowBackIosIcon />
                </div>
                <div className="center"></div>
                <div className="right" onClick={() => {
                    currImg < images.length - 1 && setCueeImg(currImg + 1);
                }}>
                    <ArrowForwardIosIcon />
                </div>

            </div>
        </div>
    )
}

// export default Carusel
