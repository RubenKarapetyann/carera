import Router from './routes/Router';
import './App.css';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Router/>    
    </BrowserRouter>
  );
}

export default App;
