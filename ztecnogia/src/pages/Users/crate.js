import React from 'react';
import { useNavigate } from "react-router";
import { goBack } from '../../utilils/common-functions';
import UserForm from '../../components/UsersForm/UsersForm';

const UsersCreate = () => {
    const navigate = useNavigate();

    return (
        <div className='px-10 py-5'>
            <div className="flex justify-between mb-10">
                
                <button onClick={() => goBack(navigate)} className="flex items-center border rounded px-8 bg-merkapp-purple text-merkapp-white hover:bg-merkapp-white hover:text-merkapp-purple ease-in-out duration-300">Volver</button>
            </div>
            <UserForm />  
        </div>
    );
}

export default UsersCreate