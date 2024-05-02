
import { useForm } from "react-hook-form";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"


import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext)

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const { register, handleSubmit, formState: { errors },} = useForm();
   const onSubmit = data =>{
    const {email,password,name} = data;
    console.log(name,email,password);
    createUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error => {
      console.error(error)
    })

    // if(password.length < 6){
    //   Toast.fire({
    //     icon: 'error',
    //     title: 'password must be six character or longer',
    //   })
         
    //       return;
    //     }else if(!/[A-Z]/.test(password)){
    //       Toast.fire({
    //         icon: 'error',
    //         title: 'Password should have at least an uppercase',
           
    //       })
    //       return;
    //     } else if(!/[a-z]/.test(password)){
    //       Toast.fire({
    //         icon: 'error',
    //         title: 'Password should have at least a lowercase',
    //       })
    //       return;
    //     }
   }
    
  return (
    <div className="bg-white flex max-w-md md:max-w-5xl lg:max-w-7xl p-1 md:p-10 lg:p-10">
      <div className="w-2/5">
        <img src={img} alt="" />
      </div>
       <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 md:w-3/5 lg:w-2/5 mx-auto p-3 bg-white shadow-md border lg:p-9 my-5 space-y-3 rounded">
       <h1 className="text-3xl animate__animated animate__backInDown font-semibold text-center uppercase">Register</h1>
       <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">User Name:</span>
          </label>
          <input type="text" placeholder="User name" name="name" className="input input-bordered" 
          {...register("name", { required: true })}
          />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Email:</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered"
             {...register("email", { required: true })}
            />
             {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">photoURL
              :</span>
          </label>
          <input type="text" placeholder="photoURL
          " className="input input-bordered" name="photo"
          {...register("photo", { required: true })}
          />
            {errors.photo && <span className="text-red-500">This field is required</span>}
        </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-base">Password:</span>
            </label>
            <input
             type="password"
              placeholder="password"
               name="password" 
               className="input input-bordered"
               
               {...register("password", { required: true })}
               />

            {/* <sopan className="absolute bottom-3 right-4 text-xl" onClick={()=> setShowPassword(!showPassword)}>{
              showPasswrd ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }</sopan> */}
             {errors.password && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <button className="btn mt-6 bg-[#b18b5e] text-white ext-base lg:text-lg mb-3 uppercase">create an account</button>
          </div>
          <Link className="flex justify-center text-xs lg:text-base" to="/login">Already have an account?<span className="text-[#b18b5e] ml-1">Sign in.</span></Link>
        </form>
       
    </div>
  );
};

export default Register;