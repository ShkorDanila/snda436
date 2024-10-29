import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Outlet/>
    </div>
  );
}

export default App;
