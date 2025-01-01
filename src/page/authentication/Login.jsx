import loginImg from "/others/authentication2.png";
import loginBg from "/others/authentication.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

export const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const info = { email, password };
    console.log(info);
  };
  return (
    <>
      <div
        className="h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${loginBg})`,
        }}
      >
        <div className="md:flex items-center container md:mx-auto gap-28 border-2 shadow-2xl mx-4 px-8 py-14">
          <div>
            <img src={loginImg} alt="" />
          </div>
          <div className="card w-full max-w-md shrink-0">
            <form onSubmit={handleLogin} className="card-body ">
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
                <label className="label">
                  <Link href="#" className="text-black hover:underline">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <button className="btn bg-[#dbb984] border-none text-white">
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center text-black space-y-3">
              <p className="text-[#dbb984] ">
                New here? <Link to="/register">Create a New Account</Link>
              </p>
              <p className=" text-black">Or sign in with</p>
              <div className=" flex justify-center gap-2">
                <button className=" border border-black btn-ghost btn-circle flex justify-center items-center">
                  <FaFacebookF className=" text-xl" />
                </button>
                <button className=" border border-black btn-ghost btn-circle flex justify-center items-center">
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
