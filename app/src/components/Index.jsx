import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Index = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    const handlePostClick = () => {
        if (!token) {
            navigate('/login')
        }
        else {
            navigate('/home/postjob')
        }

    }

    const handleApplyClick = () => {
        if (!token) {
            navigate('/login')
        }
        else {
            navigate('/home/applyjob')
        }
    }

    return (
        <>

            <section style={{ marginTop: '150px' }}>
                <div className='btns'>
                    <button onClick={handlePostClick}>Post Job</button>
                    <button onClick={handleApplyClick}>Apply Job</button>
                </div>
            </section>

        </>
    )
}

export default Index