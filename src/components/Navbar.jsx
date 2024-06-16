function Navbar() {
  return (
    <div className="w-full p-8 sticky top-0 left-0 z-30">
      <div className="bg-[#E6E8E8] backdrop-blur-3xl flex justify-between items-center p-2 px-8 rounded-full border-[1px] border-white shadow-sm ">
        <div>
          <h1 className="font-bold font-bebas text-4xl tracking-wide">VEED</h1>
        </div>

        {/* BASE  */}
        <ul className="hidden md:flex justify-center items-center gap-4">
          <li className="flex justify-center items-center gap-1">
            <h3 className="font-roboto font-normal">Products</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="flex justify-center items-center gap-1">
            <h3 className="font-roboto font-normal">Use Case</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="flex justify-center items-center gap-1">
            <h3 className="font-roboto font-normal">Resources</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="flex justify-center items-center gap-1">
            <h3 className="font-roboto font-normal">For Business</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="flex justify-center items-center gap-1">
            <h3 className="font-roboto font-normal">Pricing</h3>
          </li>
        </ul>

        {/* NEXT  */}
        <ul className="hidden md:flex justify-center items-center gap-4">
          <li>
            <h3 className="font-roboto">Book A Demo</h3>
          </li>
          <button className="bg-white p-2 px-4 font-roboto font-semibold rounded-full">
            Login
          </button>
          <button className="bg-[rgb(50,50,50)] p-2 px-4 font-roboto font-semibold rounded-full text-white">
            Sign Up
          </button>
        </ul>

        <div className="flex justify-center items-center md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
