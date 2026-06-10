import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="rubik">
      <h1 className="font-medium text-[28px] mt-[549px] ml-[20px] mr-[123px]">
        Welcome to PopX
      </h1>
      <p className="font-normal text-[18px] ml-[20px] mr-[123px] mt-[10px] text-[#1D2226] opacity-[0.6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <Link to="/signup">
        <button className="mx-[20px] mt-[29px] text-center h-[46px] w-[335px] items-center text-white bg-[#6C25FF] rounded rounded-[6px] text-[16px]">
          Create Account
        </button>
      </Link>
      <Link to="/login">
        <button className="mx-[20px] mt-[10px] text-center h-[46px] w-[335px] items-center text-black bg-[#6C25FF4B] rounded rounded-[6px] text-[16px]">
          {" "}
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
}

export default Home;
