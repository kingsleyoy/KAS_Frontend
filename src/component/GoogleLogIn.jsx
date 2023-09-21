import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import React from "react";
import axios from "axios";
import { setAuth } from "../redux/Reducers";
import { FcGoogle } from "react-icons/fc";

const GoogleLogIn = ({ title }) => {
  const dispatch = useDispatch();
  // console.log(username);
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then(async (result) => {
        const body = {
          firstName: result.user.displayName,
          email: result.user.email,
          eVerify: result.user.emailVerified,
        };
        // const apiUrl = "http://localhost:5000/google/signin";
        const apiUrl = "https://kas-servers.onrender.com/google/signin";

        try {
          const response = await axios.post(apiUrl, body);
          if (response.status) {
            dispatch(setAuth(true));
          }

          // console.log(response.data);
        } catch (error) {
          console.log(error);
        }

        console.log(result);
      });
    } catch (err) {
      // console.log(err);
    }
  };
  return (
    <div className="  flex justify-center bg-projWhite w-full rounded-lg mb-2 shadow-lg">
      <button
        onClick={signInWithGoogle}
        className=" group flex items-center  justify-center gap-3 w-full py-1 rounded-lg hover:bg-projOrange"
      >
        <span>
          <FcGoogle />
        </span>
        <span className=" text-textBlack group-hover:text-textWhite font-semibold">
          {title}
        </span>
      </button>
    </div>
  );
};

export default GoogleLogIn;
