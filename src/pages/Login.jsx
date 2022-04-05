import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup, signInWithGoogle } from '../helpers/auth'

const Login = () => {
    const [userInput, setUserInput] = useState({
        email: '',
        password: ''
    })
    const [errorInput, setErrorInput] = useState(false)

    const handleChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorInput({ error: '' })

        try {
            await signup(userInput.email, userInput.password)
        } catch (error) {
            setErrorInput({ error: error.message })
        }

    }

    const googleSignIn = () => {
        try {
            signInWithGoogle()
        } catch (error) {
            setErrorInput({ error: error.message })
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <h1>
                    Login to <Link to='/'>Chatty</Link>
                </h1>
                <p>Fill in the form below to login your account.</p>
                <div>
                    <input type="email"
                        placeholder='Email'
                        name='email'
                        onChange={handleChange}
                        value={userInput.email}
                    />
                </div>
                <div>
                    <input type="password"
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        value={userInput.password}
                    />
                </div>
                <div>
                    {errorInput.error ? <p>{errorInput.error}</p> : null}
                    <button type='submit'>Login</button>
                </div>
                <hr />
                <div>
                    <p>Don't have an account? <Link to='/signup'>Sing up</Link></p>
                    <p>Or</p>
                    <button type='button' onClick={googleSignIn}>
                        Sign up with Google
                    </button>
                </div>


            </form>
        </div>
    )
}

export default Login