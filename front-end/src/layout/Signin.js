import React from 'react'
import './Signin.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Signin({ setLoggedIn }) {
    return (
        <main className="form-signin text-center">
            <form>
                <h1>Unock Your Potential with SkillSprint!</h1>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember
                        me
                    </label>
                </div>
                <Link to="/explore">
                    <button
                        onClick={() => setLoggedIn(true)}
                        className="w-100 btn btn-lg btn-primary"
                    >
                        Sign in
                    </button>
                </Link>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
        </main>
    )
}

export default Signin
