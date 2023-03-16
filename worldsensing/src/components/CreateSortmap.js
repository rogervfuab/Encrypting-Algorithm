import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Link} from "react-router-dom"



export const CreateSortmap = () => {
  const [mensaje, setMensaje] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit5 = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/sortmap",
        {value: mensaje }
      ); 


      setResponse(data);
    } catch (error) {
      console.error(error);
    }
  };
      return (
        <div>
          <form onSubmit={handleSubmit5}>
            <label>
              Sortmap Value: 
              <input
                type="text"
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
              />
            </label>
            <button type="submit">Create</button>
          </form>
          {response && (
            <div>
                {response.id?
                    <div>
                        <p>{'{'}</p>
                        <p>"id":{' '}{response.id}{','}</p>
                        <p>{'\n'}</p>
                        <p>"value":{' '}{'"'}{response.value}{'"'}</p>
                        <p>{'}'}</p>
                    </div>
                    :
                    <p>{response.Error}</p>
                }


            </div>
          )}
          
          <Link to='/' className='enlace-bloque'>Return to Menu</Link>

        </div>
      );
    }
    
    

export default CreateSortmap;
