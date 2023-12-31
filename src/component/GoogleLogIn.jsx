import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import React from "react";
import axios from "axios";
import { setAuth, setUserId } from "../redux/Reducers";
import { FcGoogle } from "react-icons/fc";

const GoogleLogIn = ({ title }) => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then(async (result) => {
        const body = {
          firstName: result.user.displayName,
          email: result.user.email,
          eVerify: result.user.emailVerified,
        };

        const apiUrl = `${process.env.REACT_APP_SERVER}/google/signin`;

        try {
          axios
            .post(apiUrl, body)
            .then((response) => {
              const responseData = response.data;
              dispatch(setUserId(responseData.id));
              dispatch(setAuth(true));
              console.log(responseData);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }

        console.log(result);
      });
    } catch (err) {}
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
