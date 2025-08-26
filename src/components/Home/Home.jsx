import React, { useEffect, useState } from 'react';
import User from './User';

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://test-ten-gray-39.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users);

    return (
        <div className='m-10'>
            <div className='grid md:grid-cols-4 gap-5'>
                {users.map(user => <User user={user}></User>)}
            </div>
        </div>
    );
};

export default Home;