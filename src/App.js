import logo from './logo.svg';
import './App.css';
import ShowEmployee from "./student";
import CreateEmployee from "./createEmployee";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EditEmployee from "./updateEmployee";



function App() {
  return (
      <>
          <div className="App">
              <Router >
                  <Routes>
                      <Route path="/" element={<ShowEmployee/>}/>
                      <Route path="/create" element={<CreateEmployee/>}/>
                      <Route path={"/update/:id"} element={<EditEmployee/>}/>
                      <Route path={"/delete/:id"} element={<ShowEmployee/>}/>
                  </Routes>
              </Router>
          </div>

      </>

  );
}

export default App;
