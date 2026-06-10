import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  
  // Track form input states
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    company_name: "",
    agency: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form details to the next page via route state
    navigate("/profile", { state: { user: formData } });
  };

  return (
    <div className="rubik p-5 w-full h-full flex flex-col bg-[#F7F8F9] text-[13px] font-normal">
      <h1 className="text-[28px] font-normal leading-[34px] text-[#1D2226] tracking-tight max-w-[220px]">
        Create your PopX account
      </h1>

      {/* Attach onSubmit handler */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-[30px] w-full">
        
        <div className="relative">
          <label className="absolute -top-[10px] left-[12px] bg-[#F7F8F9] px-[6px] text-[13px] font-normal text-[#6C25FF] tracking-wide">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full h-[48px] px-3 pt-1 border border-[#CBCBCB] rounded-[6px] text-[15px] text-[#1D2226] focus:outline-none focus:border-[#6C25FF] bg-transparent"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-[10px] left-[12px] bg-[#F7F8F9] px-[6px] text-[13px] font-normal text-[#6C25FF] tracking-wide">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Your 10 Digit number"
            required
            className="w-full h-[48px] px-3 pt-1 border border-[#CBCBCB] rounded-[6px] text-[15px] text-[#1D2226] focus:outline-none focus:border-[#6C25FF] bg-transparent"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-[10px] left-[12px] bg-[#F7F8F9] px-[6px] text-[13px] font-normal text-[#6C25FF] tracking-wide">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            required
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
            value={formData.password}
            onChange={handleChange}
            placeholder="Password must be at least 8 characters"
            required
            className="w-full h-[48px] px-3 pt-1 border border-[#CBCBCB] rounded-[6px] text-[15px] text-[#1D2226] focus:outline-none focus:border-[#6C25FF] bg-transparent"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-[10px] left-[12px] bg-[#F7F8F9] px-[6px] text-[13px] font-normal text-[#6C25FF] tracking-wide">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            placeholder="Example: Google, Amazon, etc."
            required
            className="w-full h-[48px] px-3 pt-1 border border-[#CBCBCB] rounded-[6px] text-[15px] text-[#1D2226] focus:outline-none focus:border-[#6C25FF] bg-transparent"
          />
        </div>

        <p className="text-[13px] font-normal">
          Are you an Agency?<span className="text-red-500">*</span>
        </p>
        <div className="flex gap-5">
          <label className="flex items-center gap-3 cursor-pointer" htmlFor="yes">
            <div className="relative flex items-center justify-center">
              <input
                id="yes"
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={handleChange}
                className="peer appearance-none h-6 w-6 border-2 border-slate-400 rounded-full bg-white checked:border-[#6C25FF] checked:bg-slate-50 transition-all duration-200"
              />
              <span className="absolute w-3 h-3 rounded-full scale-0 bg-[#6C25FF] peer-checked:scale-100 transition-transform duration-200"></span>
            </div>
            <span className="text-[14px]">Yes</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer" htmlFor="no">
            <div className="relative flex items-center justify-center">
              <input
                id="no"
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={handleChange}
                className="peer appearance-none h-6 w-6 border-2 border-slate-400 rounded-full bg-white checked:border-[#6C25FF] checked:bg-slate-50 transition-all duration-200"
              />
              <span className="absolute w-3 h-3 rounded-full scale-0 bg-[#6C25FF] peer-checked:scale-100 transition-transform duration-200"></span>
            </div>
            <span className="text-[14px]">No</span>
          </label>
        </div>

        {/* Change Link to a plain submit button inside the form */}
        <button 
          type="submit" 
          className="mt-[215px] h-[46px] w-full text-center items-center text-white bg-[#6C25FF] rounded-[6px] text-[16px]"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
