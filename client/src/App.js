import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Trip from "./pages/trip/Trip";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trips" element={<List/>}/>
        <Route path="/trips/:id" element={<Trip/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
