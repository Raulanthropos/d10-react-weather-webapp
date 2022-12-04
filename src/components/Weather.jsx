import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Weather = () => {
  const [input, setInput] = useState(""); // base state, new state to change on (string) ✔️
  const [cities, setCities] = useState(""); // base state, new state to change on (array = Data (Fetch)) ✔️
  const [isActive, setIsActive] = useState(false);

  const whatIsTheWeatherLike = () => {
    if (cities.weather[0].main.includes("loud")) {
        return "https://uxwing.com/wp-content/themes/uxwing/download/weather/cloudy-icon.png"
    } else if (cities.weather[0].main.includes("ain")) {
        return "https://cdn-icons-png.flaticon.com/512/116/116251.png"
    } else if (cities.weather[0].main.includes("now")){
        return "https://cdn-icons-png.flaticon.com/512/3915/3915582.png"
    } else {
        return "https://cdn-icons-png.flaticon.com/512/3222/3222794.png"
    }
}
  
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          input +
          ",&APPID=397cd86df13964282a84555acb9025ac&units=metric"
      );
      if (response.ok) {
        const data = await response.json();
        setCities(data);
        setIsActive(true);
      } else {
        alert("Error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="mt-2">
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={input}
              onChange={handleChange}
              placeholder="Input city name..."
              className="search-bar"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          <div className="d-flex justify-content-center">
            <div className={isActive ? "visible" : "invisible"}>
              <Container className="d-flex justify-content-between">
                <div>
                  <h1>
                    {cities?.name}, {cities?.sys?.country}
                  </h1>
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-thermometer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z" />
                    </svg>
                    <h1>{cities?.main?.temp}°C</h1>
                  </div>
                  <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-moisture" viewBox="0 0 16 16">
  <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"/>
</svg>
                    <h3 className="mx-2">{cities?.main?.humidity}%</h3>
                  </div>
                  <h5 className="semi-opaque mt-2">
                    Feels like: {cities?.main?.feels_like}°C
                  </h5>
                  <h4 className="text-capitalize">
                    {isActive? cities?.weather[0].description : ""}
                  </h4>
                  <img src={isActive? whatIsTheWeatherLike() : ""} alt="" width={100} height={100}/>

                </div>
                <div>
                </div>
              </Container>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Weather;