import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Link} from "react-router-dom"



export const DeleteSortmap= () => {
  const [identifier, setIdentifier] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    if (/^\d+$/.test(identifier)) {
        try {
        const { data } = await axios.delete(
            "http://localhost:8000/api/sortmap/"+identifier,
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
          <form onSubmit={handleSubmit1}>
            <label>
              Sortmap Id to delete: 
              <input
                type="text"
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
              />
            </label>
            <button type="submit">Delete</button>
          </form>
          {response && (
            <div>
                {response.Error?
                    <div>
                        <p>{response.Error}</p>
                    </div>
                    :
                    <p>{response}</p>
                }
                

            </div>
          )}
            <Link to='/' className='enlace-bloque'>Return to Menu</Link>

        </div>
      );
    }
    
    

export default DeleteSortmap;
