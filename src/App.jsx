import { useEffect, useState } from 'react';

import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';

function App() {

// const PacientesArr =[
//     {
//       nombre:'Hook',
//       propietario:'Jake',
//       email:'correo@correo.com',
//       fecha:'2022-02-02',
//       sintomas:'Solo duerme',
//       id:1
//     },
//     {
//       nombre:'Hook JR',
//       propietario:'Juank',
//       email:'correo2@correo.com',
//       fecha:'2022-02-02',
//       sintomas:'Solo duerme',
//       id:2
//     },
//     {
//       nombre:'Hook Padre',
//       propietario:'Kattia',
//       email:'correo3@correo.com',
//       fecha:'2022-02-02',
//       sintomas:'Solo duerme',
//       id:3
//     },
//     {
//       nombre:'Hook Abuelo',
//       propietario:'Steve',
//       email:'correo4@correo.com',
//       fecha:'2022-02-02',
//       sintomas:'Solo duerme',
//       id:4
//     },
//   ]

  const [pacientes,setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes'))??[]);
  const [paciente, setPaciente] = useState({})


  
  useEffect(()=>{

    localStorage.setItem('pacientes', JSON.stringify(pacientes))

  },[pacientes])

  const eliminarPaciente = (pacienteID) =>{
    
    const pacientesActualizado = pacientes.filter(paciente => paciente.id !== pacienteID)
    setPacientes(pacientesActualizado)
  }

  return (
    <div className='container mx-auto mt-20' >

      <Header/>
      
      <div className='mt-12 md:flex justify-between'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>


    </div>
  )
}

export default App
