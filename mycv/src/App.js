import { useState } from 'react';
import './App.scss';
import Controls from './Components/Controls/Controls';
import CV from './Components/CV/CV';

function App() {

  const [save, setSave] = useState(false);
  return (
    <div className="App">
      <div className='cvBx'>
        <CV save={save} />
      </div>
      <div className='controlsBx'>
        <Controls setSave={setSave} />
      </div>
    </div>
  );
}

export default App;
