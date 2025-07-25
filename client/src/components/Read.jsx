import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const Read = () => {

  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editMessage, setEditMessage] = useState("");

  const fetchMessageData = async () => {
    try {
      const response = await axios.get("http://localhost/react-php/server/api.php");
      setData(response.data);
      console.log(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMessageData();
  }, []);

  const handleEdit = (d) => {
    setEditingId(d.id);
    setEditName(d.name);
    setEditMessage(d.message);
  }

  const saveEdit = async(d) => {
    try {
      const response = await axios.put(`http://localhost/react-php/server/api.php?id=${d.id}`,
        {
        name: editName,
        message: editMessage
        }
      );
      console.log(response.data);
      toast.success(response.data);
      setEditingId(null);
      fetchMessageData();
    }
    catch(err){
      console.log(err);
    }
  }

  const handleDelete = async(d) => {
    try {
      const response = await axios.delete(`http://localhost/react-php/server/api.php?id=${d.id}`);
      console.log(response);
      fetchMessageData();
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <div className="overflow-x-auto mx-auto w-[70%] my-20 rounded-box border border-base-content/5 backdrop-blur-3xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Msg</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr>
                <th>1</th>
                <td>
                  {
                    editingId === d.id ?
                    <>
                      <input className='border border-gray-300 focus:outline-0 p-2' type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
                      </>
                      :
                      d.name
                  }
                </td>
                <td>
                  {
                    editingId === d.id ?
                      <input className='border border-gray-300 focus:outline-0 p-2' type="text" value={editMessage} onChange={(e) => setEditMessage(e.target.value)} />
                      :
                      d.message
                  }
                </td>

                <td className='flex gap-3'>
                  {editingId === d. id ?
                    (
                      <>
                        <button className="btn btn-soft btn-accent" onClick={() => saveEdit(d)}>Save</button>
                        <button className="btn btn-soft btn-warning" onClick={() => setEditingId(null)} >Cancel</button>
                      </>
                    )
                    :
                    (
                      <>
                        <button onClick={() => handleEdit(d)} className="btn btn-soft btn-info">Edit</button>
                        <button className="btn btn-soft btn-error" onClick={() => handleDelete(d)}>Delete</button>
                      </>
                    )
                  }
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
                  
    </>
  )
}

export default Read
