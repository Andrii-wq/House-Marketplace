import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import OAuth from '../components/OAuth'


function SignIn() {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {

        e.preventDefault()

        try {
            const auth = getAuth()

            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            if (userCredential.user) {
                navigate('/')
            }
        } catch (error) {
            toast.error('Wrong user credentials')
        }


    }

    return (
        <>
            <div className='pageContainer'>
                <header>
                    <p className='pageHeader'>Welcome Back!</p>
                </header>
                <form onSubmit={onSubmit}>
                    <input
                        className='emailInput'
                        type='email'
                        placeholder='Email'
                        onChange={onChange}
                        id='email'
                        value={email} />

                    <div className='passwordInputDiv'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className='passwordInput'
                            placeholder='password'
                            id='password'
                            value={password}
                            onChange={onChange} />
                        <img src={visibilityIcon}
                            className='showPassword'
                            alt='show password'
                            onClick={() => setShowPassword((prevState) => !prevState)}
                        />
                    </div>

                    <Link to='/forgot-password' className='forgotPasswordLink'>Forgot password ?</Link>

                    <div className='signInBar'>
                        <p className='sigInText'>Sign In</p>
                        <button className='signInButton'>
                            <ArrowRightIcon fill='#ffffff' w='34px' height='34px' />
                        </button>
                    </div>
                </form>

                <OAuth />

                <Link to='/sign-up' className='registerLink' >Sign Up</Link>
            </div>
        </>
    )
}

export default SignIn