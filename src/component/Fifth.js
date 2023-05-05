import React from 'react'
import './table.css'

const Fifth = ({mydata}) => {

let sortedData;
async function dataHandle(){
    const result = Object.values(mydata.reduce((r, e) => {
      let k = `${e.city}`;
      if(!r[k]) {
        r[k] = {...e, count: 1}
      }else{
        r[k].count += 1;
        r[k].income += e.income;

      }
      return r;
    }, {}))
    
     sortedData=result.sort((a,b)=>{
      return b.count -a.count
    }).slice(0,10)
    }
    dataHandle()
  
  return (
    <div>
      <div style={{fontSize:'20px',color:'white',backgroundColor:'#04AA6D',margin:'1rem'}}>Show the data of top 10 cities which have the highest number of users and their average income</div>
      <div>
          <table className='customers'>
          <thead>
            <tr>
              <th>No Of Users</th>
              <th>City</th>
              <th>Avg Income</th>
            </tr>
          </thead>
          <tbody>
            {sortedData && sortedData.map((user) => {
                return(
                  <tr key={user._id}>
                  <td>{user.count}</td>
                  <td>{user.city}</td>
                  <td>{Math.round((Number(user.income.slice(1,5))+Number(user.income.slice(6,10))+Number(user.income.slice(11,15)))*100)/100}</td>
                </tr>
                )
              
            })}
          </tbody>
        </table> 
        </div>
    </div>
  )
}

export default Fifth