import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const AllUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching users:", error));
    }, []);

    console.log(users);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                    method: 'DELETE'
                })
                .then(response => response.json())
                .then(data => {
                    if (data.hasOwnProperty('id')) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your user has been deleted.",
                            icon: "success"
                        });
                        setUsers(users.filter(user => user.id !== id));
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete user.",
                            icon: "error"
                        });
                    }
                })
                .catch(error => {
                    console.error("Error deleting user:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete user.",
                        icon: "error"
                    });
                });
            }
        });
    };
    const [searchText,setSearchText]=useState("")
    const handleSearchButton=()=>{

      fetch(`https://jsonplaceholder.typicode.com/users/${searchText}`)
      .then(res=>res.json())
    .then(data=>console.log(data))
    
    }
    return (
      <div>
        <div>
          <div className="flex justify-evenly my-6 mb-10">
            <h2 className="text-4xl font-bold">
              <span className="text-[#FF3811]">All Users</span>
            </h2>
          </div>
          <div className="flex w-96 mx-auto mb-4 gap-1  ">
      <input onBlur={(e)=>setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered  w-full max-w-xs " />
      <button onClick={handleSearchButton} className="btn btn-neutral bg-red-500 ">Search</button>
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
                  <th className="text-xl text-black">Action</th>
                  <th className="text-xl text-black">Delete</th>
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
                    <td>
                      <Link to={`/update/${user.id}`}>
                        <button className="btn btn-success">
                          <h1 className="font-bold">Edit</h1>
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(user.id)} className="btn btn-outline btn-error btn-sm">Delete</button>
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

export default AllUser;
