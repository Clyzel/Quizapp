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
      {/* <h2><center>{JSON.stringify(data.results[0].question)}</center></h2> */}
      {/* <center><Button answer={"True"} /></center>
      <center><Button answer={"False"} /></center> */}

      {/* <center><button>Next Question</button></center>
   */}
      
      <>
      <h5>{data.results[0].question}</h5>
      <h5>{data.results[1].question}</h5>
      <h5>{data.results[2].question}</h5>
      <h5>{data.results[3].question}</h5>
      <h5>{data.results[4].question}</h5>
      </>
     
    
    </div>
  );
}

export default App;
