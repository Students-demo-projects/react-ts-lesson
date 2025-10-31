import React from "react";
import { Link } from "react-router-dom";

const users = ["John Doe", "Jane Smith", "Michael Brown", "Emily Johnson", "Sarah Connor"];

const UserPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-wide">
        👥 User Page
      </h1>
            <Link to={"/user"}>user page</Link>

      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-6 backdrop-blur-lg bg-opacity-80">
        <h2 className="text-2xl font-semibold mb-4 text-center border-b border-gray-600 pb-2">
          List of Users
        </h2>

        <ul className="space-y-3">
          {users.map((user, index) => (
            <li
              key={index}
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition duration-200 cursor-pointer text-center font-medium"
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
