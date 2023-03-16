import './App.css';
import "./styles.css"
import Menu from './components/Menu';
import { BrowserRouter, Switch, Route, Routes, Router} from "react-router-dom";
import {CreateSortmap} from './components/CreateSortmap';
import {Get_list_sortmaps} from './components/Get_list_sortmaps';
import { Get_sortmap } from './components/Get_sortmap';
import { UpdateSortmap } from './components/UpdateSortmap';
import {DeleteSortmap} from './components/DeleteSortmap';
import { SortSortmap } from './components/SortSortmap';




function App() {

  return (
    <div className="App">
      
      <h1>WELCOME</h1> 
      <h2>This is a frontend to view current encryption algorithms</h2>
      <BrowserRouter>
        
        <Menu></Menu>
          <Routes>
            <Route path="/api/sortmap/get_list" element={<Get_list_sortmaps/>}></Route>
            <Route path="/api/sortmap/get_by_element" element={<Get_sortmap/>}></Route>
            <Route path="/api/sortmap/create" element={<CreateSortmap/>}></Route>
            <Route path="/api/sortmap/update_element" element={<UpdateSortmap/>}></Route>
            <Route path="/api/sortmap/delete_element" element={<DeleteSortmap/>}></Route>
            <Route path="/api/sortmap/sort" element={<SortSortmap/>}></Route>

          </Routes>
      </BrowserRouter>


    </div>
  );
}


function Home() {
  return <h2>Home</h2>;
}


export default App;