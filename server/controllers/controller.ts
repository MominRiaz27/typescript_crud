import { createuser, getuser, updateuser, deleteuser } from './../models/userModel';
import { Request, Response } from 'express';
import CreateUserDTO from '../dto/CreateUserDTO';
import User from '../entity/user';

export const createUser =async (req: Request, res: Response) => {
  console.log(req.body);
  await createuser(req.body)
  const createUserDTO: CreateUserDTO = req.body;
  const user = new User(createUserDTO.name, createUserDTO.email);
  console.log(user);
  res.status(201).json({ message: 'User created successfully' });
};

export const getUser = async (req: Request, res: Response) => {
  console.log(req.body);
  const data = await getuser();
  res.status(200).json(data);
};

export const updateUser = async (req: Request, res: Response) => {
  console.log("inside update user");
  const data = await updateuser(req.body);
  res.status(200).json(data);
};

export const deleteUser = async (req: Request, res: Response) => {
  console.log("inside delete user");
  const data = await deleteuser(req.body);
  res.status(200).json(data);
};
