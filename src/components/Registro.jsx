import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formulario from "./Formulario";
import SocialButton from "./SocialButton.jsx";
import Alert from './Alert';


const Registro = () => {
  const [estadoAlerta, setestadoAlerta] = useState({mensaje:"Completa todos los campos!", color:"red"})
  
  
  return (
    <Container className="bg-white rounded-4 w-50 mt-5 p-5">
      <Row className="justify-content-md-center">
        <Col>
          <h2 className="text-center fs-0">Crea una cuenta</h2>
          <div className ="d-flex justify-content-center gap-2" >  
             <SocialButton icono="fa-brands fa-facebook" />
             <SocialButton icono="fa-brands fa-github" />
             <SocialButton icono="fa-brands fa-linkedin-in" />
          </div>
          <p className="text-center fs-0">O usa tu email para registrarte</p>
          <Formulario estadoAlerta = {setestadoAlerta} />
          <Alert estadoAlerta ={estadoAlerta}/>

        </Col>
      </Row>
    </Container>
  )
}

export default Registro