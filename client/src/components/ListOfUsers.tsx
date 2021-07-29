import React from 'react';
import { GET_ALL_USERS } from '../Graphql/Queries';
import { DELETE_USER } from '../Graphql/Mutation';
import { useMutation } from '@apollo/client';

import { useQuery } from '@apollo/client';

const ListOfUsers = () => {
  const { data } = useQuery(GET_ALL_USERS);
  const [deleteUser, { error }] = useMutation(DELETE_USER);

  const deleteUserById = (id: any): void => {
    deleteUser({ variables: { id: id } });
  };

  if (data) {
    console.log(data.getAllUsers[0]);
  }
  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div className="flex space-x-4 space-y-4 items-center pl-4">
              <h1 className="text-lg py-2 ">{user.name}</h1>
              <button
                className="text-white bg-red-500 rounded py-2 px-2 hover:bg-red-800 outline-none"
                onClick={() => {
                  deleteUserById(user.id);
                }}
              >
                DELETE USER
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ListOfUsers;
