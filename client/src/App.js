import Router from './routes/Router';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>    
    </BrowserRouter>
  );
}

export default App;
