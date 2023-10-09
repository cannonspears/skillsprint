import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Splash.css'
import splashImg from '../img/Hero.png'

function Splash() {
    return (
        <div className="splash">
            <div className="introContainer">
                <h1>
                    Unlock Your Potential with SkillSprint: Learn, Earn, and
                    Grow!
                </h1>
                <p>
                    Dive into a revolutionary website that empowers you to
                    acquire new skills, achieve your goals, and embark on a
                    journey of self-improvement like never before.
                </p>
                <Link to="/signin">
                    <button className="btn">Sign Up For Free</button>
                </Link>
            </div>
            <div className="splashImgContainer"></div>

            <img
                src={splashImg}
                className="splashImg"
                alt={'SkillSprint Splash'}
            />
        </div>
    )
}

export default Splash
