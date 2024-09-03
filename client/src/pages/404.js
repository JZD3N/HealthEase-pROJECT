import { Link } from "react-router-dom";

export default function Error404(){
  return(
    <main className="relative isolate min-h-full">
        <img
          src="https://images.unsplash.com/photo-1650692201357-3b1b15469952?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="mt-10 text-8xl font-semibold leading-8 text-black">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-cyan-700 sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base text-black sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex justify-center">
            <Link to='/dashboard' className="flex justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
  )
};
