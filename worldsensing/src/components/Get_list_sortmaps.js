import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Link} from "react-router-dom"


export const Get_list_sortmaps = () => {

    const [response, setResponse] = useState(null);


  
    const handleSubmit2 = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/list_sortmaps",
      );
      setResponse(data);
    } catch (error) {
      console.error(error);
    }
    };


return (
        <div>
          <form onSubmit={handleSubmit2}>
            <label>
                Get the list of Sortmaps that you have created 
            </label>
            <button type="submit" >Get List</button>
          </form>
          {response && (
            <div>
              {response.Error?    
                  <p>{response.Error}</p>
                    :
                  <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent:'center'}}>
                  {response.map(map => (
                    <div key={map.id} style={{ width: '200px', margin: '10px' }}>
                      <p>{'{'}</p>
                      <p>"id":{' '} {map.id}{','}</p>
                      <p>{'\n'}</p>
                      <p>"value":{' '}{'"'} {map.value}{'"'}</p>
                      <p>{'}'}</p>
                    </div>
                  ))}
                </div> 
            
            }
            </div>
          )}
            <Link to='/' className='enlace-bloque'>Return to Menu</Link>
        </div>
        );
          }



export default Get_list_sortmaps;
