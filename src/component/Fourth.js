import React from 'react'
import './table.css'

const Fourth = ({mydata}) => {
  return (
    <div>
      <div style={{fontSize:'20px',color:'white',backgroundColor:'#04AA6D',margin:'1rem'}}>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit</div>
      <div>
          <table className='customers'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Car Brand</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {mydata && mydata.map((user) => {
              if((!user.email.match(/\d/g)) && (user.car==='BMW' || user.car==='Mercedes-Benz' || user.car==='Audi')){
                return(
                  <tr key={user._id}>
                  <td>{`${user.first_name} ${user.last_name}`}</td>
                  <td>{user.car}</td>
                  <td>{user.email}</td>

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

export default Fourth