import { useRef  } from 'react';
import './App.css';



function App() {
  const submit = (e) => {
    e.preventDefault();

  };
 
  return (
    <form onSubmit={submit}>
  <input type="text" placeholder="color title..." /> 
  <input type="color" />
  <button>Add</button>
    </form>

    
    
  
  );
}

export default App;
