import React, { useContext } from 'react';
import logo from '../../assets/images/logo.png'
import tore from '../../assets/images/tore.png'
import { AuthContext } from '../../Auth/AuthContext';



import { Link, Outlet
} from "react-router-dom";
import { 
  useNavigate
 } from 'react-router-dom';
import Permisions from '../../utilils/permisions';


const Layout = () => {
  const {signout} = useContext(AuthContext);
  const navigate = useNavigate();
  const cbRedirect = () =>{
    navigate('/login')
  }
  const fnLogout =()=>{
    signout(cbRedirect)
    localStorage.removeItem('userInfo')
  }
  return (
    <div className='flex h-scree'>
      <div className='flex  text-white bg-cyan-900 w-1/12 py-1 font-sans '>
        <ul className='flex flex-col text-center mx-2 '>
        <img src= {logo} alt="" />
          
          <Permisions>
            
          <li className='my-3 text-lg'>
            <Link to="/home">Home</Link>
          </li>

          <li className='my-3 text-lg'>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className='my-3 text-lg'>
            <Link to="/cotizaciones">Cotizaciones</Link>
          </li>
          <li className='my-3 text-lg'>
            <Link to="/clientes">Clientes</Link>
          </li>
          <li className='my-3 text-lg'>
            <Link to="/Productos">Productos</Link>
          </li>
          <li className='my-3 text-lg'>
            <Link to="/usuarios">Usuarios</Link>
          </li>
          </Permisions>
               <Permisions> 
           <li className='my-3 text-lg'>
            <Link onClick={fnLogout } >Salir</Link>
            </li>
          </Permisions>
          
            <li>
            <img src= {tore} alt="" className='mt-40' />
          </li>
          </ul>
          </div>
      
      <div className='w-3/4 py-5'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

