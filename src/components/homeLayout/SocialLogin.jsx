import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn w-full btn-outline btn-secondary"><FcGoogle></FcGoogle> Login With Google</button>
        <button className="btn w-full btn-outline"><FaGithub></FaGithub> Login With Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
