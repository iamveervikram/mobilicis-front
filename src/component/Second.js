import React from 'react'
import './table.css'

const Second = ({mydata}) => {
  return (
    <div>
      <div style={{fontSize:'20px',color:'white',backgroundColor:'#04AA6D',margin:'1rem'}}>Male Users which have phone price greater than 10,000.</div>
      <div>
          <table className='customers'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone Price</th>
            </tr>
          </thead>
          <tbody>
            {mydata && mydata.map((user) => {
              if(user.gender==='Male' && user.phone_price>10000){
                return(
                  <tr key={user._id}>
                  <td>{`${user.first_name} ${user.last_name}`}</td>
                  <td>{user.gender}</td>
                  <td>{user.phone_price}</td>

                </tr>
                )
              }
            })}
          </tbody>
        </table> 
        </div>
    </div>
  )
}

export default Second