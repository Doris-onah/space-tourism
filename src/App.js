
import './App.css';
import {Routes, Route} from "react-router-dom"
import Layout from './Layout';
import Home from './Home';
import Destination from './Destination';
import Technology from './Technology';
import Crew from './Crew';
import ErrorPage from './ErrorPage';
function App() {
  return (
    <div className='app-con'>
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="Destination" element={<Destination />} />
      <Route path="Crew" element={<Crew />} />
      <Route path="Technology" element={<Technology />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
      </Routes>
     <Layout/>
    </div>
    </div>
  );
}

export default App;
