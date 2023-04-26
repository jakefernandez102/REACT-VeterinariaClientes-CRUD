/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import Error from './Error';

const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

  const [nombre, setNombre]=useState('');
  const [propietario, setPropietario]=useState('');
  const [email, setEmail]=useState('');
  const [fecha, setFecha]=useState('');
  const [sintomas, setsintomas]=useState('');

  const [error,setError] = useState(false);

  useEffect(() => {

    if(Object.keys(paciente).length >0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setsintomas(paciente.sintomas)
    }
  }, [paciente])



  const generarId =() => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return fecha +random;
  }

  const handleSubmit =(e) =>{
    e.preventDefault();

    //validacion del form
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      console.log('Hay al menos un campo vacio');

      setError(true);
      return;
    }
    setError(false);
    
    //Objeto Paciente
    const objPaciente ={
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if(paciente.id){
      //Editante
      objPaciente.id = paciente.id;
      const pacientesActializados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
      
      setPacientes(pacientesActializados);
      setPaciente({})
      
    }else{
      objPaciente.id = generarId();
      setPacientes([...pacientes, objPaciente])
    }
    

    
    
    //reiniciar Form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setsintomas('')
    
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''} <span className="text-indigo-600 font-bold ">Administralos</span> </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
            onSubmit={handleSubmit}
        >
          {error && <Error> <p> Todos los campos son obligarios</p></Error> }
          
          {/* campo */}
          <div className="mb-5">
            <label 
                className="block text-gray-700 uppercase font-bold "
                htmlFor="mascota"
                > 
                Nombre Mascota
            </label>
            <input 
                type="text" 
                placeholder="Nombre de la mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                id="mascota"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
          </div>
          {/* campo */}
          
          {/* campo */}
          <div className="mb-5">
            <label 
                className="block text-gray-700 uppercase font-bold "
                htmlFor="propietario"
                > 
                Nombre Propietario
            </label>
            <input 
                type="text" 
                placeholder="Nombre del propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                id="propietario"
                value={propietario}
                onChange={(e) => setPropietario(e.target.value)}
                />
          </div>
          {/* campo */}
          
          {/* campo */}
          <div className="mb-5">
            <label 
                className="block text-gray-700 uppercase font-bold "
                htmlFor="email"
                > 
                Email
            </label>
            <input 
                type="email" 
                placeholder="Email del propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
          </div>
          {/* campo */}
          
          {/* campo */}
          <div className="mb-5">
            <label 
                className="block text-gray-700 uppercase font-bold "
                htmlFor="fecha"
                > 
                Fecha de alta
            </label>
            <input 
                type="date" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                id="fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                />
          </div>
          {/* campo */}
          
          {/* campo */}
          <div className="mb-5">
            <label 
                className="block text-gray-700 uppercase font-bold "
                htmlFor="sintomas"
                > 
                Sintomas
            </label>
            <textarea  
                    id="sintomas" 
                    cols="30" 
                    rows="10"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Escribe los sintomas"
                    value={sintomas}
                  onChange={(e) => setsintomas(e.target.value)}
            >

            </textarea>
          </div>
          {/* campo */}

          <input 
              type="submit" 
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointe transition-all"
              value={paciente.id  ? 'Editar Paciente' : 'Agregar Paciente'}
          />

        </form>
    </div>
  )
}

export default Formulario
