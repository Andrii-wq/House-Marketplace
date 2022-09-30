import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../firebase.config'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import OAuth from '../components/OAuth'

function SignUp() {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = formData

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

            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredentials.user

            updateProfile(auth.currentUser, {
                displayName: name
            })

            const formDataCopy = { ...formData }
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            navigate('/')

        } catch (error) {
            toast.error('Something went wrong with registration ')
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
                        className='nameInput'
                        type='name'
                        placeholder='Name'
                        id='name'
                        value={name}
                        onChange={onChange}

                    />
                    <input
                        className='emailInput'
                        type='email'
                        placeholder='Email'
                        id='email'
                        value={email}
                        onChange={onChange}
                    />

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

                    <div className='signUpBar'>
                        <p className='sigUpText'>Sign Up</p>
                        <button className='signUpButton'>
                            <ArrowRightIcon fill='#ffffff' w='34px' height='34px' />
                        </button>
                    </div>
                </form>

                <OAuth />
                <Link to='/sign-in' className='registerLink' >Sign In</Link>
            </div>
        </>
    )
}

export default SignUp