import React,{useEffect,useState} from 'react'
import './App.css';
import First from './component/First';
import Second from './component/Second';
import Third from './component/Third';
import Fourth from './component/Fourth';
import Fifth from './component/Fifth';

function App() {
  const [mydata,setmydata]=useState()
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://mobilicis-vxla.onrender.com/');
      const jsonData = await response.json();
      setmydata(jsonData);
    };
  
    getData();
  },[]);
  const [choosed, setchoosed] = useState('problem_1')
  // console.log(mydata);
  function chooseTable(){
    switch (choosed) {
      case 'problem_1':
        return <First mydata={mydata}/>;
      case 'problem_2':
        return <Second mydata={mydata}/>;
      case 'problem_3':
        return <Third mydata={mydata}/>;
      case 'problem_4':
        return <Fourth mydata={mydata}/>; 
      case 'problem_5':
        return <Fifth mydata={mydata}/>;
             
      default:
        return null;
    }
  }
  return (
    <div>

      {!mydata?
      <div className="loader">
      </div>
        :
      <div className="App">
        <div>
          <p style={{fontSize:'20px',fontWeight:'bold'}}>Assignment for Internship position at “Mobilicis India Private Limited” </p>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <p style={{marginRight:'1rem'}}>Choose Correct Options: </p>
            <select
            style={{backgroundColor:'#04AA6D',borderColor:'#04AA6D',color:'white'}}
            value={choosed}
            onChange={(e) => setchoosed(e.target.value)}
            >
            <option value="problem_1">problem_1</option>
            <option value="problem_2">problem_2</option>
            <option value="problem_3">problem_3</option>
            <option value="problem_4">problem_4</option>
            <option value="problem_5">problem_5</option>
          </select>
        </div>
        <div>
          {chooseTable()}
        </div>
        
      </div>
      }
    </div>
  );
}

export default App;
