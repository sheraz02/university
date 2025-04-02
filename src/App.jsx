import { BrowserRouter as Router, Outlet, Route, Routes, useLocation, Link } from "react-router-dom";
import Navbar from './components/NavBar/Navbar';
import Economics from './components/departments/Economics';
import Home from './components/Home/Home';
import Psychology from './components/departments/Psychology';
import MassCommunication from './components/departments/MassCommunication';
import Mathematics from './components/departments/Mathematics';
import Architecture from './components/departments/Architecture';
import Chemistry from './components/departments/Chemistry';
import CivilEngineering from './components/departments/CivilEngineering';
import Commerce from './components/departments/Commerce';
import ComputerScience from './components/departments/ComputerScience';
import Education from './components/departments/Education';
import ElectricalEngineering from './components/departments/ElectricalEngineering';
import English from './components/departments/English';
import FineArts from './components/departments/FineArts';
import InformationTechnology from './components/departments/InformationTechnology';
import Llb from './components/departments/Llb';
import MechanicalEngineering from './components/departments/MechanicalEngineering';
import Physics from './components/departments/Physics';
import BusinessSchool from './components/departments/SouthernBusinessSchool';
import Footer from './components/Home/HomeComponents/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/economics" element={<Economics />} />
        <Route path="/psychology" element={<Psychology />} />
        <Route path="/mass-communication" element={<MassCommunication />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/chemistry" element={<Chemistry />} />
        <Route path="/civil-engineering" element={<CivilEngineering />} />
        <Route path="/commerce" element={<Commerce />} />
        <Route path="/computer-science" element={<ComputerScience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/electrical-engineering" element={<ElectricalEngineering />} />
        <Route path="/english" element={<English />} />
        <Route path="/fine-arts" element={<FineArts />} />
        <Route path="/information-technology" element={<InformationTechnology />} />
        <Route path="/llb" element={<Llb />} />
        <Route path="/mechanical-engineering" element={<MechanicalEngineering />} />
        <Route path="/physics" element={<Physics />} />
        <Route path="/business-school" element={<BusinessSchool />} />
      </Route>
      </Routes>
    </>
      
  );
}


export default App;
