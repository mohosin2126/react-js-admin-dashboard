import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  console.log(users);

  return (
    <div>
      <div>
        <div className="flex justify-evenly my-6 mb-10">
          <h2 className="text-4xl font-bold">
        <span className="text-[#FF3811]">All Users</span>
          </h2>
        </div>
        <div className="overflow-x-auto ml-10">
          <table className="table border-separate">
            {/* head */}
            <thead>
              <tr className="bg-orange-400">
                <th className="text-xl text-black">Name</th>
                <th className="text-xl text-black">Email</th>
                <th className="text-xl text-black">Role</th>
                <th className="text-xl text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={index % 2 === 0 ? "bg-gray-300" : "bg-orange-200"}
                >
                  <td>
                    <button>
                      <h1 className="font-bold">{user.name}</h1>
                    </button>
                  </td>
                  <td className="font-bold">{user.email}</td>
                  <td>
                    <button>
                      <h1 className="font-bold">Admin Manager</h1>
                    </button>
                  </td>
                  <td>
                    <button>
                      <h1 className="font-bold">Active</h1>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
