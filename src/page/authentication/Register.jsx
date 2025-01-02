import loginImg from "/others/authentication2.png";
import loginBg from "/others/authentication.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Register = () => {
  const { googleSignIn, createUser, updateUserProfile } =
    useContext(AuthContext);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   createUser(email, password).then((res) => {
  //     const user = res.user;
  //     console.log(user);
  //   });
  // };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data?.email, data?.password).then((res) => {
      const loggedUser = res.user;
      // console.log(loggedUser);
      updateUserProfile(data?.name, data?.photo)
        .then((res) => {
          Swal.fire({
            text: `${data?.name} successfully created an acoount`,
            icon: "success",
          });
          reset();
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>TasteBud || Sign Up</title>
      </Helmet>
      <div
        className="h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${loginBg})`,
        }}
      >
        <div className="md:flex flex-row-reverse items-center container md:mx-auto gap-28 border-2 shadow-2xl mx-4 px-8 py-14">
          <div>
            <img src={loginImg} alt="" />
          </div>
          <div className="card w-full max-w-md shrink-0">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="text-black">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input bg-white"
                />
                {errors.name && (
                  <span className=" text-red-500 mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-black">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  {...register("photo", { required: true })}
                  placeholder="photoUrl"
                  className="input bg-white"
                />
                {errors.photo && (
                  <span className=" text-red-500 mt-1">
                    Photo url is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-black">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input bg-white"
                />
                {errors.email && (
                  <span className=" text-red-500 mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-black">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}/,
                  })}
                  placeholder="password"
                  className="input bg-white"
                />
                {errors.password?.type === "required" && (
                  <span className=" text-red-500 mt-1">
                    password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className=" text-red-500 mt-1">
                    Password must be at least 6 characters long
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className=" text-red-500 mt-1">
                    Password must be at least one uppercase,one lowercase,one
                    number & one special char
                  </span>
                )}
              </div>

              <div className="form-control">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn bg-[#dbb984] border-none mt-4 text-black hover:text-white"
                />
              </div>
            </form>
            <div className="text-center text-black space-y-3">
              <p className="text-[#dbb984] ">
                Already register? <Link to="/login">Go to log in</Link>
              </p>
              <p className=" text-black">Or sign up with</p>
              <div className=" flex justify-center gap-2">
                <button className=" border border-black btn-ghost btn-circle flex justify-center items-center">
                  <FaFacebookF className=" text-xl" />
                </button>
                <button
                  onClick={googleSignIn}
                  className=" border border-black btn-ghost btn-circle flex justify-center items-center"
                >
                  <FaGoogle className=" text-xl" />
                </button>
                <button className=" border border-black btn-ghost btn-circle flex justify-center items-center">
                  <FaGithub className=" text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
