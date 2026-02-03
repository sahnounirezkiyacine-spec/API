import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        👤 Liste des utilisateurs
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {listOfUser.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {user.name}
            </h2>

            <p className="text-gray-600">
              📧 <span className="font-medium">{user.email}</span>
            </p>

            <p className="text-gray-600 mt-1">
              📍 {user.address.city}
            </p>

            <p className="text-sm text-gray-400 mt-3">
              🏢 {user.company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
