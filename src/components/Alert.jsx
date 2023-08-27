
const Alert = ({estadoAlerta}) => {
  return (
 
    <div className="w-100 p-2 bg-rosado rounded-3 text-center" style={{color:estadoAlerta.color}}>
          {estadoAlerta.mensaje}
    </div>
  )
}

export default Alert