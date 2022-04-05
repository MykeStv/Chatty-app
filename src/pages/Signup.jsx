import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup, signInWithGoogle, signInWithGitHub } from '../helpers/auth'

const Signup = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

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

    const githubSignIn = () => {
        try {
            signInWithGitHub()
        } catch (error) {
            setErrorInput({ error: error.message })
        }
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
                    <button type='submit'>Sign up</button>

                </div>
                <div>
                    <p>Or</p>
                    <button type='button' onClick={googleSignIn}>
                        Sign up with Google
                    </button>
                    <button type='button' onClick={githubSignIn}>
                        Sign up with GitHub
                    </button>
                </div>
                <hr />
                <p>Already have an account? <Link to='/login'>Login</Link></p>

            </form>
        </div>
    )
}

export default Signup