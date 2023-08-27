import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulario = ({estadoAlerta}) => {

    const validarInput = (e) => {
        e.preventDefault()
        if (nombre == "") {
            estadoAlerta({mensaje:"El nombre esta vacio", color:"success"})
            return
        }
        if (correo === "") {
            estadoAlerta({mensaje:"El correo esta vacio", color:"red"})
            return
        }
        else {
            const patronCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
            if ( !patronCorreo.test(correo) ) {
              estadoAlerta({mensaje:"Formato de correo incorrecto", color:"red"})
              return
              }
        }

        if ( (clave1 == "") || (clave2 == "" )) {
            estadoAlerta({mensaje:"Campo contraseña esta vacio", color:"red"})
            return
        }
        if (clave1 != clave2){
            estadoAlerta({mensaje:"Contraseñas no son iguales", color:"red"})
            return
        }

        estadoAlerta({mensaje:"Registro exitoso", color:"green"})
        return
    }

    const [nombre, setNombre] = useState("")
    const [correo, setEmail] = useState("")
    const [clave1, setContrasena1] = useState("")
    const [clave2, setContrasena2] = useState("")
    
    return (   
            <Form onSubmit={validarInput}>
                
                <Form.Group >
                    <Form.Control className="mb-3" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}
                    value={nombre}/>

                    <Form.Control className="mb-3" type="text" placeholder="pepito@tumail.com" onChange={(e) => setEmail(e.target.value)}
                    value={correo}/>

                    <Form.Control className="mb-3" type="password" placeholder="Contraseña" onChange={(e) => setContrasena1(e.target.value)}
                    value={clave1}/>
                    <Form.Control className="mb-3" type="password" placeholder="Confirma tu contraseña" onChange={(e) => setContrasena2(e.target.value)}
                    value={clave2} />

                    <Button className='w-100 mb-3' variant="success" type="submit"> Registrarse
                    </Button>
                </Form.Group>
            </Form>
       )
}

export default Formulario