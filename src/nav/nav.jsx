import React from 'react';
import N from './nav.module.css'
import img1 from './imgn.jpg'
import img2 from './samsung-camera-icon.png'
const Nav = () => {
    return (
        <div className={N.navcontainer}>
            <div className={N.titlecontainer}>
               
                <h2 className={N.title}>
                <img src={img2} alt="" width='25%' height='85%' />
                    Untitled UI</h2>
            </div>
            <ul className={N.list}>
                <li>Home</li>
                <li>Products<svg className={N.nsvg} xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 8 7"><path fill="#000" fill-opacity="1" fill-rule="evenodd" stroke="none" d="m3.646 5.354-3-3 .708-.708L4 4.293l2.646-2.647.708.708-3 3L4 5.707z"/></svg></li>
                <li>Resources<svg className={N.nsvg} xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 8 7"><path fill="#000" fill-opacity="1" fill-rule="evenodd" stroke="none" d="m3.646 5.354-3-3 .708-.708L4 4.293l2.646-2.647.708.708-3 3L4 5.707z"/></svg></li>
                <li>Pricing</li>
            </ul>
            <div className={N.nimgcontain}>
                <img src={img1} alt="no img" />
            </div>
        </div>
    );
}

export default Nav;
