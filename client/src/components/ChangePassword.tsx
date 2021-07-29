import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { UPDATE_PASSWORD } from '../Graphql/Mutation';

const ChangePassword: React.FC = () => {
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  const changePassword = (): void => {
    updatePassword({
      variables: {
        username: username,
        oldPassword: currentPassword,
        newPassword: newPassword,
      },
    });
  };

  return (
    <div className="h-3/5 py-20 flex items-center justify-center bg-gray-100 ">
      <div className="h-80 w-80 border border-gray-300 bg-white rounded flex flex-col justify-center items-center space-y-2 shadow-md">
        <h1 className="text-3xl font-bold pb-3 text-blue-800">
          CHANGE PASSWORD
        </h1>
        <input
          className="py-2 px-2 w-2/3 border border-gray-700 rounded"
          type="text"
          placeholder="username.."
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="py-2 px-2 w-2/3 border border-gray-700 rounded"
          type="password"
          placeholder="current password.."
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          className="py-2 px-2 w-2/3 border border-gray-700 rounded"
          type="password"
          placeholder="new password.."
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          className="py-2 px-2 bg-blue-500 text-white rounded-sm hover:bg-blue-700"
          onClick={changePassword}
        >
          UPDATE PASSWORD
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
