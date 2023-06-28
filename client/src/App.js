import Router from './routes/Router';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Header from './components/Header/Header';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Suspense fallback={<p>loading...</p>} >
        <Router/>
      </Suspense> 
    </BrowserRouter>
  );
}

export default App;
