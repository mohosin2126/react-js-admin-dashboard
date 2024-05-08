import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddUser = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      status: data.status,
    };
    console.log(formData)
    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem('formData', formDataJSON);

    if (localStorage.getItem('formData')) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "User Added",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div>
      <div className="mx-auto h-100vh p-2 md:p-4 md:m-6 m-4 bg-slate-50 border-2 rounded-lg border-orange-500">
        <div className="flex justify-evenly my-6 mb-10">
          <h2 className="text-4xl font-bold">
            <span className='text-[#FF3811]'>Add User</span>
          </h2>
        </div>
        <form className="md:p-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-serif font-bold text-lg ">
                Name*
              </span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register('name', { required: true })}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="md:flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                  Email*
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register('email', { required: true })}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register('password', { required: true })}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                  Role
                </span>
              </label>
              <select {...register('role')}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-serif font-bold text-lg ">
                  Status
                </span>
              </label>
              <input
                type="text"
                placeholder="Status"
                {...register('status', { required: true })}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <button
            className="btn btn-warning w-full bg-white text-black text-xl font-semibold hover:bg-orange-500 hover:text-white"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
