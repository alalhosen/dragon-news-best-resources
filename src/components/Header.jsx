import { format } from "date-fns";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-5">
      <img src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p>{format(new Date(),"EEEE, MMMM MM, yyyy")}</p>
    </div>
  );
};

export default Header;
