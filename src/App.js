import './App.css';
import Actividades from './components/Actividades';
import Acuerdo from './components/Acuerdo';
import Aerolineas from './components/Aerolineas';
import Crecemos from './components/Crecemos';
import FirstSection from './components/FirstSection';
import Footer from './components/Footer';
import Membresia from './components/Membresia';
import Navbar from './components/Navbar';
import Preguntas from './components/Preguntas';
import Planes from './components/SectionPlanes';
import Yellow from './components/Yellow';

function App() {
  return (
    <>
      <Navbar>
      </Navbar>
      <FirstSection></FirstSection>
      <Membresia></Membresia>
      <Planes></Planes>
      <Aerolineas></Aerolineas>
      <Yellow></Yellow>
      <Actividades></Actividades>
      <Crecemos></Crecemos>
      <Preguntas></Preguntas>
      <Acuerdo></Acuerdo>
      <Footer></Footer>
    </>
  );
}

export default App;
