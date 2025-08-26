import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { name, email, age, _id } = user;
    const handleDeleteUser = (id) => {
        const agree = window.confirm(`Are you want to delete? ${name} `)
        if (agree) {
            fetch(`https://test-ten-gray-39.vercel.app/user/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted!!😊😊😊')
                    }
                }
                )
        }
    };
    return (
        <div className="flex justify-center p-4">
            <div className="card bg-white shadow-lg rounded-lg w-full max-w-sm overflow-hidden">
                <figure className="w-full h-56 overflow-hidden">
                    <img
                        className="w-full h-full object-contain"
                        src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
                        alt={name}
                    />
                </figure>
                <div className="card-body text-center p-1">
                    <h2 className="card-title text-xl font-semibold mb-2">Name: {name}</h2>
                    <p className="text-gray-700 mb-2">Age: {age}</p>
                    <p className="text-gray-500 mb-4">{email}</p>

                    <div className="card-actions flex justify-between gap-2">
                        <Link to={`/user-details/${_id}`} className="flex-1">
                            <button className="btn btn-primary w-full">Show Details</button>
                        </Link>

                        <button
                            onClick={() => handleDeleteUser(_id)}
                            className="btn btn-outline btn-error flex-1"
                        >
                            Delete User
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default User;
