import React from "react";
const UserList = (props) => {
  const { usersList } = props;
  console.log(usersList);

  return (
    <div>
      {usersList.length &&
        usersList.map((users, index) => (
          <div
            key={index}
            className="flex flex-col bg-slate-50 border-2 p-10 mb-3"
          >
            <div>
              <strong>Email:</strong> {users.email}
            </div>
             <div>
              {/* <strong>Usuario:</strong> {users.user.userdetail.firs_name} {users.user.userdetail.last_name} */}
            </div>
            <div>
              {/* <strong>Telefono:</strong> {users.user.userdetail.phone}  */}
             </div> 
             <div>
              {/* <strong>Rol:</strong> {users.user.rol.name}  */}
            </div> 
          </div>
        ))}
    </div>
  );
};

export default UserList;
