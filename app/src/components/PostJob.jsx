import React, { useState } from 'react'

const PostJob = () => {

    const [data,setData]=useState({
        title:'',
        company:'',
        location:'',
        salary:'',
        schedule:'',
        description:'',
        skills:'',
        qualification:''
    })



    return (
        <>

            <section style={{ marginTop: '100px' }}>
                <div className='form'>
                    <p>Add Job Posts</p>
                    <form action="">
                        <input type="text" name="title" id="" placeholder='Enter job title' />
                        <input type="text" name="company" id="" placeholder='Enter company name' />
                        <input type="text" name="location" id="" placeholder='Enter location' />
                        <input type="text" name="salary" id="" placeholder='Enter salary' />
                        <input type="text" name="schedule" id="" placeholder='Enter job schedule' />
                        <textarea name="description" id="" placeholder='Description'></textarea>
                        <input type="text" name="skills" id="" placeholder='Add required skills' />
                        <input type="text" name="qualification" id="" placeholder='Add required qualification' />
                        {/* <select name="skills" id="">
                    <option value="select">-select-</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="reactjs">React.js</option>
                    <option value="reactnative">React Native</option>
                    <option value="nodejs">Node.js</option>
                    <option value="expressjs">Express.js</option>
                    <option value="mongodb">MongoDB</option>
                    <option value="python">Python</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="dart">Dart</option>
                    <option value="java">Java</option>
                    <option value="javascript">JavaScript</option>
                </select> */}

                        <button>Post Job</button>
                    </form>
                </div>
            </section>


        </>
    )
}

export default PostJob