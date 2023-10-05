import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Splash.css'
import educatedWhale from '../img/edcuated-whale.png'
import educatedLizard from '../img/educated-lizard.png'
import educatedKitten from '../img/educated-kitten.png'
import educatedAlien from '../img/educated-alien.png'
import crazyEducatedSnail from '../img/crazy-educated-snail.png'
import educatedSloth from '../img/educated-sloth.png'

function Splash() {
    return (
        <div className="row splash">
            <div className="col-md-6">
                <div className="message">
                    <h1>Let's learn</h1>
                    <p className="text-secondary">
                        You've got things you want to learn. We've got things
                        you can learn. Let's find the right match.
                    </p>
                    <Link to="/signin">
                        <button
                            type="button"
                            className="btn btn-lg btn-secondary mx-auto col-10"
                        >
                            Launch your learning journey
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <img className="img-fluid" src={educatedAlien} />
                        </div>
                        <div className="face2">
                            <img className="img-fluid" src={educatedWhale} />
                        </div>
                        <div className="face3">
                            <img className="img-fluid" src={educatedKitten} />
                        </div>
                        <div className="face4">
                            <img className="img-fluid" src={educatedLizard} />
                        </div>
                        <div className="face5">
                            <img className="img-fluid" src={educatedSloth} />
                        </div>
                        <div className="face6">
                            <img
                                className="img-fluid"
                                src={crazyEducatedSnail}
                            />
                        </div>
                    </div>
                </div>
                {/* <img
          className="img-fluid"
          src="https://placehold.it/600"
        /> */}
            </div>
        </div>
    )
}

export default Splash
