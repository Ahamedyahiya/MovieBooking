import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GoogleLoginBtn = () => {
  const navigate = useNavigate();

  return (
    <GoogleLogin
      onSuccess={(res) => {
        const user = jwtDecode(res.credential);

        localStorage.setItem("isLogin", "true");
        localStorage.setItem("Email", user.email);
        localStorage.setItem("Name", user.name);
        localStorage.setItem("ProfilePic", user.picture);

        navigate("/");
      }}
      onError={() => {
        alert("Google Login Failed");
      }}
    />
  );
};

export default GoogleLoginBtn;
