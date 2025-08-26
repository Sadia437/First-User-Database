import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const { name, age, email, _id } = user || {};

    const handleUpdateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        console.log(name, email, age);

        const user = {
            name: name,
            email: email,
            age: age,
            education: 'HSC'
        };

        fetch(`https://test-ten-gray-39.vercel.app/user/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0)
                    alert('Data Updated Successfully Done');
            });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 space-y-8">


            <div className="card bg-white shadow-xl rounded-lg w-full max-w-2xl overflow-hidden">
                <figure className="w-full h-80 overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="https://t4.ftcdn.net/jpg/02/14/74/61/240_F_214746139_URu1Ure11GJhj2w5H3BK3mbaS689ferz.webp"
                        alt="User"
                    />
                </figure>
                <div className="card-body text-center p-8">
                    <h2 className="card-title text-3xl font-bold mb-3">Name: {name}</h2>
                    <p className="text-gray-700 text-lg mb-1">Age: {age}</p>
                    <p className="text-gray-700 text-lg mb-1">Email: {email}</p>
                    <p className="text-gray-500 text-sm mb-4">ID: {_id}</p>

                    <Link to="/">
                        <button className="btn btn-primary w-full text-lg">Back to Home</button>
                    </Link>
                </div>
            </div>

            <div className="card-body w-full max-w-sm shadow-lg p-6 bg-white rounded-lg">
                <form onSubmit={handleUpdateUser} className="fieldset space-y-3">
                    <label className="label">Name</label>
                    <input type="text" defaultValue={name} name="name" className="input" placeholder="name here" />

                    <label className="label">Email</label>
                    <input type="email" defaultValue={email} name="email" className="input" placeholder="email" />

                    <label className="label">Age</label>
                    <input type="number" defaultValue={age} name="age" className="input" placeholder="your age" />

                    <button type="submit" className="btn btn-neutral w-full mt-4">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default UserDetails;
