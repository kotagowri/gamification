import logo from './logo.svg';
import './App.css';
import { Game } from './proj';
function App() {
 
  return (
   <>
    <BrowserRouter>
    <Routes>
     <Route path="/gam" element={<Game/>}/> 
    </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
