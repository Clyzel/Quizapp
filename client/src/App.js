import { useState, useEffect} from 'react';
//import Button from "./component/buttoncomponent"

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data));
}, []);

//console.log(data);


  return (
    <div className="App">
      <h1><center>History Quiz</center></h1>
  
      
      <>
      <h2><center>{data.results[0].question}</center></h2>

      <center><button>True</button> <button>False</button></center>

      <h2><center>{data.results[1].question}</center></h2>

      <center><button>True</button> <button>False</button></center>

      <h2><center>{data.results[2].question}</center></h2>

      <center><button>True</button> <button>False</button></center>


      <h2><center>{data.results[3].question}</center></h2>

      <center><button>True</button> <button>False</button></center>

      <h2><center>{data.results[4].question}</center></h2>

      <center><button>True</button> <button>False</button></center>
      <br></br>
      <center><button>Reset Quiz</button></center>
      </>
     
    
    </div>
  );
}

export default App;
