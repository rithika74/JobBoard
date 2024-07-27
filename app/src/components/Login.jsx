import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem('id')
        if (user) {
            navigate('/home')
        }
    }, [])

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let response = await axios.post('http://localhost:7000/login', data)
            console.log(response.data);
            const token = response.data.token;
            console.log(token);
            localStorage.setItem('token', token)
            localStorage.setItem('id', response.data.user._id)

            if (response.data) {
                console.log('success');
                toast.success('Login success')
                navigate('/home')
            }
            else {
                toast.error('Login Failed')
            }

        } catch (e) {
            toast.error('Login Failed');
        }
    }


    return (
        <>

            <section className='login' style={{ marginTop: '200px', marginBottom: '50px' }}>
                <div className='form'>
                    <p>LOGIN</p>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="email" name="email" id="" placeholder='Enter email' onChange={handleChange} />
                        <input type="password" name="password" id="" placeholder='Enter password' onChange={handleChange} />
                        <button>LOGIN</button>
                        <Link to={'/signup'}>
                            Create new account?
                        </Link>
                    </form>
                </div>
            </section>


        </>
    )
}

export default Login