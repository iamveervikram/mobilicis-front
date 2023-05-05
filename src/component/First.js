import React from 'react'
import './table.css'
const First = ({mydata}) => {
  return (
    <div>
        <div style={{fontSize:'20px',color:'white',backgroundColor:'#04AA6D',margin:'1rem'}}>Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</div>
        <div>
          <table className='customers'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Car Brand</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {mydata && mydata.map((user) => {
              if((Math.floor(user.income.slice(1))<5) && (user.car==='BMW' || user.car==='Mercedes-Benz')){
                return(
                  <tr key={user._id}>
                  <td>{`${user.first_name} ${user.last_name}`}</td>
                  <td>{user.car}</td>
                  <td>{user.income}</td>

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

export default First