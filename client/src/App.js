import { useState, useEffect} from 'react';
import Button from "./component/button";

function App() {
  const [data, setData] = useState({});
  //const [ca, setCA] = useState();

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data));
}, []);

//console.log(data);




const trueOrfalse = (answer) => {
  if (answer === data.results[1].correct_answer) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
};


//console.log(data.results)

if (data.results === undefined) {
  return (
    <div className='App'>
      Loading...
    </div>
  )
}

  return (
    <div className="App">
      <h1><center>History Quiz</center></h1>
  
      
      <h2><center>{data.results[1].question}</center></h2>

      <center> <Button word={"True"} trueOrfalse={trueOrfalse}/> <Button word={"False"} trueOrfalse={trueOrfalse}/></center>

      {/* <h2><center>{data.results[1].question}</center></h2>

      <center> <Button word={"True"} trueOrfalse={trueOrfalse}/> <Button word={"False"} trueOrfalse={trueOrfalse}/></center>

      <h2><center>{data.results[2].question}</center></h2>

      <center> <Button word={"True"} trueOrfalse={trueOrfalse}/> <Button word={"False"} trueOrfalse={trueOrfalse}/></center>


      <h2><center>{data.results[3].question}</center></h2>

      <center> <Button word={"True"} trueOrfalse={trueOrfalse}/> <Button word={"False"} trueOrfalse={trueOrfalse}/></center>

      <h2><center>{data.results[4].question}</center></h2>

      <center> <Button word={"True"} trueOrfalse={trueOrfalse}/> <Button word={"False"} trueOrfalse={trueOrfalse}/></center>

      <center><button>Reset Quiz</button></center> */}
      
     
    
    </div>
  );
}

export default App;
