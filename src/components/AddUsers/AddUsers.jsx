import React from 'react';

const AddUsers = () => {
    const handleAddUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;

        const user = {
            name,
            email,
            age
        }
        fetch('https://test-ten-gray-39.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Successfully Users added')
                    form.reset()
                }

            })

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className=" p-5 w-96 shadow-lg ">
                <form onSubmit={handleAddUser} className="fieldset">
                    <label className="label">Name</label>
                    <input name="name" type="text" className="input" placeholder="Name" />

                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />

                    <label className="label">Age</label>
                    <input name="age" type="Number" className="input" placeholder="Age" />
                    <button type="submit" className="btn btn-neutral mt-4">Add User </button>
                </form>
            </div>
        </div>
    );
};

export default AddUsers;