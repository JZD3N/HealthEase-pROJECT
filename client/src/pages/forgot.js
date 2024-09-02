import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/logo192.png'

export default function ForgotPassword(){
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Your validation code for go here

    navigate('/forgot'); // Redirect to dashboard
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center align-bottom px-6 py-12 lg:px-8 "  >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={Logo}
          alt="HealthEase"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
          Reset Your Password
        </h2>
        <p className="mt-5 text-base font-sm tracking-tight text-slate-600 text-center">Please enter your email and wait for a reset link</p>
      </div>

{/* //Reset Form// */}
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-black"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Reset Password
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          <Link
                  to="/signup"
                  className="font-semibold leading-6 text-blue-400 hover:text-indigo-500"
                >
                  Proceed to Login
                </Link>
        </p>
      </div>
    </div>
);
}