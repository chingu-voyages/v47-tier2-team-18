import React from 'react';
import AllTasks from './components/AllTasks';
import Calendar from './components/Calander.jsx/Calendar';
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Calendar/> }/>
      <Route path='/tasks' element={<AllTasks />} />
      <Route path='*' element={<Calendar />} />
    </Routes>
  );
};

export default App;
