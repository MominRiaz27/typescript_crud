import { CreateUserDTO } from './../dto/CreateUserDTO';
import QueryDB from '../config/db_config';
import { object } from 'zod';
import UpdateUserDTO from '../dto/UpdateUserDTO';
import DeleteUserDTO from '../dto/DeleteUserDTO';


// export const login = (email:string) => { 
// return QueryDB('Select * from users where email = ?', [email as string]);
// }

export const createuser = async (registration_data:CreateUserDTO) => {
  const { name,  email} =
    registration_data;
    
    console.log("object data is ", Object.values(registration_data));
    

  return QueryDB(
    'INSERT into users (name,email) values(?,?) ',
    Object.values(registration_data)
  );
};

export const getuser = async () => {
  return QueryDB(
    'SELECT * from users ',
  );
};


export const updateuser = async (update_data:UpdateUserDTO) => {
  const { id, name, email} =
    update_data;
    
    console.log("object data is ", Object.values(update_data));
    

  return QueryDB(
    'UPDATE users SET name = ? , email = ? where id = ?',
    [name,email,id]
  );
};

export const deleteuser = async (delete_data:DeleteUserDTO) => {
  const {id} =
    delete_data;
    
    console.log("object data is ", Object.values(delete_data));
    

  return QueryDB(
    'DELETE from users where id = ?',
    [id]
  );
};