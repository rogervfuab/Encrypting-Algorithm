import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Link} from "react-router-dom"



export const UpdateSortmap = () => {
    const [mensaje, setMensaje] = useState("");
    const [identifier, setIdentifier] = useState("");


    

    const [response, setResponse] = useState(null);
    const handleSubmit3 = async (event) => {
      event.preventDefault();
      if (/^\d+$/.test(identifier)) {
          try {
            const { data } = await axios.put(
              "http://localhost:8000/api/sortmap/"+identifier,
              {value: mensaje }
            );
            setResponse(data);
          } catch (error) {
            console.error(error);
          }
      }else{
        setResponse({'Error':'Id must be an Intenger'});
      }

    };


    return (
        <div>
          <form onSubmit={handleSubmit3}>
            <label>
              Sortmap ID : 
              <input
                type="text"
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
              />
            </label>
            <label>
              Sortmap Value : 
              <input
                type="text"
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
              />
            </label>
            <button type="submit">Update</button>
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
