import React from 'react';
import g from './graph.module.css'
import { FiPlayCircle } from "react-icons/fi";
import img5 from './img5.jpg'
const Graph = () => {
    return (
        <div className={g.midpartcontainer}>
            <div className={g.part1}>
            <div className={g.feature}><h5>New feature</h5> Check out the team dashboard</div>
            <h1>Beautiful analytics to grow smarter</h1>
            <p className={g.para1}>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.Trusted by overr 4,000 startups.</p>
            <div className={g.btns}>
                <button className={g.btn1}><FiPlayCircle style={{position:'relative',top:'3px',marginRight:'5px'}}/>Demo</button>
                <button className={g.btn2}>Sign up</button>
            </div>
            <div className={g.imgcontain1}>
                <img src={img5} alt="" />
            </div>
            
            </div>
        </div>
    );
}

export default Graph;
