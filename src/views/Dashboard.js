import React from "react";
// reactstrap components
import { Card, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";

const alumnos = [
  {
    nombre: "Gustavo",
    apellido: "Campagne",
    imagen: require("../assets/img/alumnos/Campagne.jpg"),
  },
  {
    nombre: "Bernardo",
    apellido: "Castañeda",
    imagen: require("../assets/img/alumnos/castañeda.jpg"),
  },
  {
    nombre: "Diego",
    apellido: "Gonzalez",
    imagen: require("../assets/img/alumnos/GonzálezHerrera.png"),
  },
  {
    nombre: "Jonathan",
    apellido: "Gurrola",
    imagen: require("../assets/img/alumnos/GurrolaAntuna.jpg"),
  },
  {
    nombre: "Paola",
    apellido: "Herrera",
    imagen: require("../assets/img/alumnos/Herrera_Ortiz.jpg"),
  },
  {
    nombre: "Graciela",
    apellido: "Leon",
    imagen: require("../assets/img/alumnos/Leon_Quintanaa.jpeg"),
  },
  {
    nombre: "Luis",
    apellido: "Luna",
    imagen: require("../assets/img/alumnos/luna.jpeg"),
  },
  {
    nombre: "Miguel",
    apellido: "Manzanilla",
    imagen: require("../assets/img/alumnos/manzanilla.jpg"),
  },
  {
    nombre: "Marlenne",
    apellido: "",
    imagen: require("../assets/img/alumnos/Marlenne.png"),
  },
  {
    nombre: "Luis",
    apellido: "Ontiveros",
    imagen: require("../assets/img/alumnos/ontiveros.png"),
  },
  {
    nombre: "Samuel",
    apellido: "Reyna",
    imagen: require("../assets/img/alumnos/reyna.jpg"),
  },
  {
    nombre: "Diego",
    apellido: "Rios",
    imagen: require("../assets/img/alumnos/rios.jpeg"),
  },
  {
    nombre: "Daniel",
    apellido: "Sanchez",
    imagen: require("../assets/img/alumnos/Sanchez_Daniel.jpeg"),
  },
  {
    nombre: "Alma",
    apellido: "Soto",
    imagen: require("../assets/img/alumnos/sotocervantes.jpg"),
  },
  {
    nombre: "Victor",
    apellido: "Soto",
    imagen: require("../assets/img/alumnos/SotoGraciano.jpg"),
  },
  {
    nombre: "Edgar",
    apellido: "Vallejo",
    imagen: require("../assets/img/alumnos/vallejo.jpg"),
  },
];

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          {alumnos.map((alumno, index) => (
            <Col lg="3" md="6" sm="6" key={index}>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <img
                          src={alumno.imagen}
                          alt={`${alumno.nombre} ${alumno.apellido}`}
                          className="img-fluid rounded-circle"
                          style={{ maxWidth: "100px" }}
                        />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Alumno</p>
                        <CardTitle tag="p">
                          {alumno.nombre} {alumno.apellido}
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats"></div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
