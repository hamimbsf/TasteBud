import loginImg from "/others/authentication2.png";
import loginBg from "/others/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

export const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password).then((res) => {
      const user = res.user;

      console.log(user?.displayName);

      Swal.fire({
        text: `${user?.displayName} successfully logged in`,
        icon: "success",
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>TasteBud || Login</title>
      </Helmet>
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
              <div className="form-control relative">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="type captcha"
                  className="input bg-white "
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-xs  absolute right-2 bottom-3"
                >
                  Validate
                </button>
              </div>
              <div className="form-control">
                <input
                  type="submit"
                  className="btn bg-[#dbb984] border-none text-black hover:text-white"
                  disabled={false}
                  value="Sign In"
                />
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
