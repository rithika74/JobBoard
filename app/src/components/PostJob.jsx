import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const PostJob = () => {
    const [data, setData] = useState({
        title: '',
        company: '',
        location: '',
        salary: '',
        schedule: '',
        description: '',
        skills: [],
        qualification: ''
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setData((prevData) => {
                if (checked) {
                    return { ...prevData, skills: [...prevData.skills, value] };
                } else {
                    return { ...prevData, skills: prevData.skills.filter((skill) => skill !== value) };
                }
            });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await axios.post('http://localhost:7000/post', data);
            if (response.data) {
                toast.success('Job posted successfully');
                setData({
                    title: '',
                    company: '',
                    location: '',
                    salary: '',
                    schedule: '',
                    description: '',
                    skills: [],
                    qualification: ''
                });
            }
            else{
                toast.error('Error posting job!!');
            }
        } catch (error) {
            console.error('Error posting job', error);
            toast.error('Error posting job!!');
        }
    };

    return (
        <>
            <section style={{ marginTop: '100px', marginBottom: '50px' }}>
                <div className='form'>
                    <p>Add Job Posts</p>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" name="title" placeholder='Enter job title' value={data.title} onChange={handleChange} />
                        <input type="text" name="company" placeholder='Enter company name' value={data.company} onChange={handleChange} />
                        <input type="text" name="location" placeholder='Enter location' value={data.location} onChange={handleChange} />
                        <input type="text" name="salary" placeholder='Enter salary' value={data.salary} onChange={handleChange} />
                        <input type="text" name="schedule" placeholder='Enter job schedule' value={data.schedule} onChange={handleChange} />
                        <textarea name="description" placeholder='Description' value={data.description} onChange={handleChange}></textarea>
                        <input type="text" name="qualification" placeholder='Add required qualification' value={data.qualification} onChange={handleChange} />

                        <div className="checkbox-group">
                            <p>Add required skills:</p>
                            {['html', 'css', 'reactjs', 'reactnative', 'nodejs', 'expressjs', 'mongodb', 'python', 'C', 'C++', 'dart', 'java', 'javascript'].map((skill) => (
                                <label key={skill}>
                                    <input type="checkbox" name="skills" value={skill} checked={data.skills.includes(skill)} onChange={handleChange} />
                                    {skill.toUpperCase()}
                                </label>
                            ))}
                        </div>

                        <button type="submit">Post Job</button>
                    </form>
                </div>
            </section>

            <ToastContainer />
        </>
    );
};

export default PostJob;
