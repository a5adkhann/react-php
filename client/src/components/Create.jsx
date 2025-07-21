import React, { useState } from 'react'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'

const Create = () => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmission = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("message", message);

            const resposne = await axios.post("http://localhost/react-php/server/api.php", formData);
            console.log(resposne.data.message);
            toast.success(resposne.data.message);

            setName("");
            setMessage("");
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className='flex justify-center my-20'>
                <form onSubmit={handleSubmission}>
                    <fieldset className="fieldset backdrop-blur-3xl border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Add Message</legend>

                        <label className="label">Name</label>
                        <input type="name" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

                        <label className="label">Message</label>
                        <textarea className="textarea" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                        <button className="btn btn-neutral mt-4" >ADD</button>
                    </fieldset>
                </form>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    )
}

export default Create
