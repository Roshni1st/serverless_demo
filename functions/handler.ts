import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getAll, getById, createUser, deleteUser, updateUser } from './service';

export const usersAll = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return await getAll();
};

export const usersOne = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return await getById(event);
};

export const saveUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return await createUser(event);
};

export const removeUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return await deleteUser(event);
};

export const editUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return await updateUser(event);
};
