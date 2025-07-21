import React from 'react'
import { Link } from 'react-router-dom'

const Read = () => {
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td className='flex gap-3'>
                <button className="btn btn-soft btn-info">Edit</button>
                <button className="btn btn-soft btn-error">Delete</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Read
