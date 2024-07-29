import React from 'react'

const Jobs = () => {

    

    return (
        <section style={{ marginTop: '100px' }}>
            <div className='job-listings'>
                <div className='job-card'>
                    <p style={{ fontSize: '20px', fontWeight: '700' }}>Job Title</p>
                    <div>
                        <p>company name</p>
                        <p>location</p>
                    </div>
                    <div>
                        <p>salary</p>
                        <p>schedule</p>
                    </div>
                    {/* <div>
                            description <br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis reprehenderit aperiam doloremque, laborum modi assumenda officia nobis exercitationem quidem ipsam, pariatur dolores in ullam. Et, dicta. Soluta ullam distinctio eaque!
                        </div> */}
                    <button>Apply Now</button>
                </div>
            </div>
        </section>
    )
}

export default Jobs