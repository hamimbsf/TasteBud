import loginImg from "/others/authentication2.png";
import loginBg from "/others/authentication.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { googleSignIn, createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password).then((res) => {
      const user = res.user;
      console.log(user);
    });
  };
  return (
    <>
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
            <form onSubmit={handleSubmit} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="text-black">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-black">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input bg-white"
                  required
                />
              </div>

              <div className="form-control">
                <button className="btn bg-[#dbb984] border-none mt-4 text-black hover:text-white">
                  Sign Up
                </button>
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
