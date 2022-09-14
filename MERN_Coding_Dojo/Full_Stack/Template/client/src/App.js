
import './App.css';

import { Link, Navigate, Route, Routes} from 'react-router-dom'

import { AllModels } from './views/AllModels';
import { OneModel } from './views/OneModel';
import { NewModel } from './views/NewModel';
import { EditModel } from './views/EditModel';

// Add a not found view, if necessary


function App() {
  return (
    <div className="App">
{/* Any content that will always show up goes here */}

    <Routes>
      <Route path='/' element={<Navigate to='/models' replace/>}/>
      <Route path='/models' element={<AllModels/>}/>
      <Route path='/models/new' element={<NewModel/>}/>
      <Route path='/models/:id' element={<OneModel/>}/>
      <Route path='/models/:id/edit' element={<EditModel/>}/>
    </Routes>
    </div>
  );
}

export default App;
