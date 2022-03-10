import { useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data));
}, []);



  return (
    <div className="App">
      <h1>React Website with an Express backend</h1>

  
      
      <p>HOW DO I RENDER THIS BASIC DATA!!!! UGH</p>
    
    </div>
  );
}

export default App;
