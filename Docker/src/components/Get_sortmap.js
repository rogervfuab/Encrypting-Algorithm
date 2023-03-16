import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Link} from "react-router-dom"


export const Get_sortmap = () => {

    const [identifier, setIdentifier] = useState("");
    const [response, setResponse] = useState(null);
  
    const handleSubmit4 = async (event) => {
      event.preventDefault();
        if (/^\d+$/.test(identifier)) {
          try {
            const { data } = await axios.post(
              "http://localhost:8000/api/sortmaps",
              {id:identifier}
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
          <form onSubmit={handleSubmit4}>
            <label>
                Get the Sortmap by Id: 
                <input
                type="text"
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
                />
            </label>
            <button type="submit">Get</button>
          </form>
        {response && (
            <div>
                {response.id?
                    <div>
                        <p>{'{'}</p>
                        <p>"id": {' '}{response.id}{','}</p>
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


export default Get_sortmap;
