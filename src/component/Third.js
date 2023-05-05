import React from 'react'
import './table.css'

const Third = ({mydata}) => {
  return (
    <div>
      <div style={{fontSize:'20px',color:'white',backgroundColor:'#04AA6D',margin:'1rem'}}>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name</div>
      <div>
          <table className='customers'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Quote</th>
            </tr>
          </thead>
          <tbody>
            {mydata && mydata.map((user) => {
              if(user.last_name.slice(0,1)==='M' && user.quote.length>15 && user.email.search(user.last_name)){
                return(
                  <tr key={user._id}>
                  <td>{`${user.first_name} ${user.last_name}`}</td>
                  <td>{user.email}</td>
                  <td>{user.quote}</td>

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

export default Third