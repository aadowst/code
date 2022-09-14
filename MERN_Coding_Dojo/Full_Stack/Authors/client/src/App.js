
import './App.css';

import { Link, Navigate, Route, Routes} from 'react-router-dom'

import { AllAuthors } from './views/AllAuthors';
import { OneAuthor } from './views/OneAuthor';
import { NewAuthor } from './views/NewAuthor';
import { EditAuthor } from './views/EditAuthor';

// Add a not found view, if necessary


function App() {
  return (
    <div className="App">
{/* Any content that will always show up goes here */}

    <Routes>
      <Route path='/' element={<Navigate to='/authors' replace/>}/>
      <Route path='/authors' element={<AllAuthors/>}/>
      <Route path='/authors/new' element={<NewAuthor/>}/>
      <Route path='/authors/:id' element={<OneAuthor/>}/>
      <Route path='/authors/:id/edit' element={<EditAuthor/>}/>
    </Routes>
    </div>
  );
}

export default App;
