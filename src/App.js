import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from './components/Weather'

function App() {
  return (
    <>
      <Container fluid className="d-flex justify-content-center" id="main-container">
        <Container className="shadow-lg p-3 mb-5 bg-body rounded" id="main">
            <Weather />
        </Container>
      </Container>
    </>
  );
}

export default App;