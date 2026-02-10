import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import LoginPage from './Pages/LoginPage';
import ViewDetails from "./Components/ViewDetails";
import CardPage from './Pages/CardPage';
import Navbar from './Components/Common/Navbar';
import DataProvider from "./Components/Context/DataProvider";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
    
  return (
    
      <BrowserRouter>
        <DataProvider>    
             <Navbar/>
    <Routes>
          <Route path='/' element={<HomePage/>}/> 
          <Route path='/productpage' element={<ProductPage/>}/>
          <Route path='/loginpage' element={<LoginPage/>}/>
          <Route path="/viewdetails/:id" element={<ViewDetails/>}/>
         <Route element={<ProtectedRoute />}>
           <Route path='/cardpage' element={<CardPage/>}/>
        </Route>
    </Routes>
        </DataProvider>
   </BrowserRouter>
   
  );
}

export default App;
