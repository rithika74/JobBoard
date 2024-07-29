import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Jobs = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get('http://localhost:7000/getjobs');
                setData(response.data);
                setFilteredData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredData(data.filter(job => 
            job.title.toLowerCase().includes(query) || 
            job.company.toLowerCase().includes(query) ||
            job.location.toLowerCase().includes(query) ||
            job.description.toLowerCase().includes(query)
        ));
    }

    return (
        <section style={{ marginTop: '100px' }}>
            <div>
                <div className='search'>
                    <input 
                        type="text" 
                        name="search" 
                        placeholder='Search jobs' 
                        value={searchQuery}
                        onChange={handleSearch} 
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className='job-listings'>
                    {filteredData.length > 0 ? (
                        filteredData.map(item => (
                            <div className='job-card' key={item._id}>
                                <p style={{ fontSize: '20px', fontWeight: '700' }}>{item.title}</p>
                                <div>
                                    <p>{item.company}</p>
                                    <p>{item.location}</p>
                                </div>
                                <div>
                                    <p>{item.salary}</p>
                                    <p>{item.schedule}</p>
                                </div>
                                {/* <div>{item.description}</div> */}
                                <button>Apply Now</button>
                            </div>
                        ))
                    ) : (
                        <div style={{ fontSize: '20px', color: 'gainsboro', fontWeight: 'bold' }}>No Jobs Found</div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Jobs
