import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import ButtonFetch from './components/ButtonFetch';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    return setIsClicked(true)
  }

  
  return (
    <div style={{ backgroundColor:'chartreuse', height:'100%', padding:'100px'}} className="App">
      <button className="btn btn-danger" onClick={ onClick }>
        Fetch This......
      </button>
      <div className="mx-auto w-50 h-50">
        {
          isClicked ?
          <ButtonFetch/> :
          ''
        }
      </div>

    </div>
  );
}

export default App;
