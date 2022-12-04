import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from './components/Weather'

function App() {
  return (
    <>
      <Container fluid className="d-flex justify-content-center" id="fullsize">
        <Container className="shadow-lg p-3 mb-5 bg-body rounded" id="main">
          <div>
            <Weather />
          </div>
        </Container>
      </Container>
    </>
  );
}

export default App;