import React,{useState,useContext} from 'react'
import {Link} from "react-router-dom"




export const Menu = () => {
    const [isOpen,setIsOpen] = useState(false);


    const click = () => {
        setIsOpen(!isOpen);
    }




  return (
    <div className='Menu'>
        <button type='submit' onClick={click}>Menu</button>
        {isOpen &&(
            <ul className='container'>
                 <li>
                    <Link to={'/api/sortmap/get_list'}>
                        Get lists of sortmaps
                    </Link>
                </li>

                <li>
                    <Link to={'/api/sortmap/get_by_element'}>
                        Get sortmap entity
                    </Link>
                </li>

                <li>
                    <Link to={'/api/sortmap/create'}>
                        Create new entry
                    </Link>
                </li>

                <li>
                    <Link to={'/api/sortmap/update_element'}>
                        Update value
                    </Link>
                </li>

                <li>
                    <Link to={'/api/sortmap/delete_element'}>
                        Delete an already-set sortmap
                    </Link>
                </li>

                <li>   
                    <Link to={'/api/sortmap/sort'}>
                        Sorts the text according to the sortmap specified
                    </Link>
                </li>
            </ul>
        
        )}
    </div>
  )
}

export default Menu
