import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        dob: '',
        gender: '',
        password: ''
    })

    const navigate = useNavigate();


    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (data.name && data.email && data.dob && data.gender && data.password) {
            try {
                const response = await axios.post('http://localhost:7000/insert', data);
                if (response.data.emailExists) {
                    toast.error('Email already exists.');
                } else {
                    toast.success('Registration successful');
                    setData('');
                    navigate('/login');
                }
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    toast.error('Email already exists.');
                } else {
                    console.error('Error during signup:', error);
                    toast.error('An error occurred while processing your request.');
                }
            }
        } else {
            toast.error('Please fill in all fields.');
        }
    };


    return (
        <>

            <section className='login' style={{ marginTop: '100px', marginBottom: '50px' }}>
                <div className='form'>
                    <p>Sign Up</p>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" name="name" id="" placeholder='Username' onChange={handleChange} />
                        <input type="email" name="email" id="" placeholder='Email Id' onChange={handleChange} />
                        <input type="date" name="dob" id="" placeholder='Date of Birth' onChange={handleChange} onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                        <select name="gender" id="" onChange={handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <input type="password" name="password" id="" placeholder='Password' onChange={handleChange} />
                        <button>Sign Up</button>
                        <Link to={'/login'}>
                            Already have an account?
                        </Link>

                    </form>
                </div>
            </section>


        </>
    )
}

export default Register