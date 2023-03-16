
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Link} from "react-router-dom"



export const SortSortmap = () => {
    const [mensaje, setMensaje] = useState("");
    const [identifier, setIdentifier] = useState("");
    const [time, setTime] = useState("");
    const [response, setResponse] = useState(null);

    const handleSubmit6 = async (event) => {
      const start = performance.now();

      event.preventDefault();
        if (/^\d+$/.test(identifier)) {
            try {
                const { data } = await axios.post(
                "http://localhost:8000/api/order",
                {id:identifier, value: mensaje }
                );
            setResponse(data);
            } catch (error) {
            console.error(error);
            }
        }else{
        setResponse({'Error':'Id must be an Intenger'});
        const end = performance.now(); 

        setTime(end-start); // i don't kwon why it doesn't return nothing
        }

    };

    return (
        <div>
          <form onSubmit={handleSubmit6}>
            <label>
              Sortmap ID: 
              <input
                type="text"
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
              />
            </label>
            <label>
              Message to Encrypt: 
              <input
                type="text"
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
              />
            </label>
            <button type="submit">Encrypt</button>
          </form>
          {response && (
            <div>
                {response.sortmap_id?
                    <div>
                        <p>{'{'}</p>
                        <p>"sortmap_id":{' '}{response.sortmap_id}{','}</p>
                        <p>{'\n'}</p>
                        <p>"response": {' '}{'"'}{response.response}{'"'}{','}</p>
                        <p>{'\n'}</p>
                        <p>"time": {' '}{time}</p>
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
