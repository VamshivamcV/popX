import { useLocation } from "react-router-dom";
import photo from "../assets/photo.png";
import cam from "../assets/cam.svg";

function Profile() {
  const location = useLocation();
  
  // Extract user values from router state, fall back to defaults if empty
  const user = location.state?.user || {
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    company_name: "Not Provided"
  };

  return (
    <div className="rubik w-full h-full flex flex-col bg-[#F7F8F9] text-[13px] font-normal">
      <h1 className="text-[18px] font-normal text-[#1D2226] bg-white h-[68px] w-full flex items-center px-5">
        Account Settings
      </h1>

      <div className="px-5 flex gap-[20px] mt-[30px] items-center">
        <div className="relative w-[76px] h-[76px] flex-shrink-0">
          <img
            src={photo}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 rounded-full cursor-pointer flex items-center justify-center">
            <img src={cam} alt="Change profile" className="w-[23px] h-[23px]" />
          </div>
        </div>

        <div className="flex flex-col gap-0.5">
          {/* Dynamically render registration info */}
          <p className="text-[15px] font-medium leading-tight">{user.name}</p>
          <p className="text-[14px] font-normal text-[#1D2226] leading-tight break-all">
            {user.email}
          </p>
        </div>
      </div>

      <p className="text-[14px] font-normal capitalize px-5 mt-[30px] leading-relaxed max-w-[600px] text-left">
        Hello! You are successfully registered from company <span className="font-semibold text-[#6C25FF]">{user.company_name}</span>. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
      </p>
    </div>
  );
}

export default Profile;
