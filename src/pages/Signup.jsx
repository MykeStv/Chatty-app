import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../helpers/auth'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleChange = () => {

    }
    const handleSubmit = () => {

    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <h1>
                    Sign Up to <Link to='/'>Chatty</Link>
                </h1>
                <p>Fill in the form below to create an account.</p>
                <div>
                    <input type="email"
                        placeholder='Email'
                        name='email'
                        onChange={handleChange}
                        value={email}
                    />
                </div>
                <div>
                    <input type="password"
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        value={password}
                    />
                </div>
                <div>
                    {error ? <p>{error}</p> : null}
                    <button type='submit'>Sign up</button>
                </div>
                <hr />
                <p>Already have an account? <Link to='/login'>Login</Link></p>

            </form>
        </div>
    )
}

export default Signup