import Box from '@mui/material/Box';
import './App.css';
import Calender from './components/calender/Calender';
import Logger from './components/logger/Logger.js';

function App() {
  const start = new Date();
  start.setFullYear(2022, 6, 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Meter Logger
        </h1>
      </header>
      <Box className='content'>
        <Calender startDate={start}/>
        <Logger/>
      </Box>
    </div>
  );
}

export default App;
