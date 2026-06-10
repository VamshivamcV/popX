import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="rubik p-5 w-full h-full flex flex-col bg-[#F7F8F9] text-[13px] font-normal">
      <h1 className="text-[28px] font-medium leading-[34px] text-[#1D2226] tracking-tight max-w-[220px] mt-[40px]">
        Signin to your PopX account
      </h1>
      <p className="text-[18px] mt-[10px] text-[#1D2226] opacity-[0.6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form className="flex flex-col gap-5 mt-[30px] w-full">
        <div className="relative">
          <label className="absolute -top-[10px] left-[12px] bg-[#F7F8F9] px-[6px] text-[13px] font-normal text-[#6C25FF] tracking-wide">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full h-[48px] px-3 pt-1 border border-[#CBCBCB] rounded-[6px] text-[15px] text-[#1D2226] focus:outline-none focus:border-[#6C25FF] bg-transparent"
          />
        </div>
        <div className="relative">
          <label className="absolute -top-[10px] left-[12px] bg-[#F7F8F9] px-[6px] text-[13px] font-normal text-[#6C25FF] tracking-wide">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full h-[48px] px-3 pt-1 border border-[#CBCBCB] rounded-[6px] text-[15px] text-[#1D2226] focus:outline-none focus:border-[#6C25FF] bg-transparent"
          />
        </div>
        <Link to="/profile">
          <button className="mt-[14px] h-[46px] w-full text-center items-center text-white bg-[#CBCBCB] rounded-[6px] text-[16px]">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
