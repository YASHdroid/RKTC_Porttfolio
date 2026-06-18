
import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const res =
      await axios.post(

        "http://localhost:1122/api/admin/login",

        {
          email:
            formData.email,

          password:
            formData.password,
        }

      );
   console.log(
      res.data
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

 navigate(
"/admin/dashboard"
);

    console.log(
      "Token Saved"
    );

  }  

  catch(err){

    console.log(
      err.response
    );

  }

};
  return (
    <div
      className="
      min-h-screen
      flex
      text-white
      font-sans
      bg-[radial-gradient(circle_at_45%_20%,#141a2d_0%,#090d18_45%,#05070d_100%)]
    "
    >
      {/* LEFT */}

      <div
        className="
        flex-[1.2]
        px-10
        py-12
        flex
        flex-col
        justify-between
        border-r
        border-[#1e2130]
      "
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-[2px] bg-[#e8c96d]" />

          <span
            className="
            text-[10px]
            tracking-[2.5px]
            uppercase
            text-[#e8c96d]
          "
          >
            Premium Admin Access
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="
            text-[clamp(48px,8vw,80px)]
            font-black
            leading-[0.92]
            uppercase
          "
          >
            ENTER
            <br />

            <span className="text-[#e8c96d]">
              THE
            </span>

            <br />

            PORTAL
          </h1>

          <p
            className="
            mt-6
            max-w-[340px]
            text-[13px]
            text-[#4a4f66]
            leading-7
          "
          >
            Secure access to the RKTC
            management system for handling
            products, inquiries and
            business operations.
          </p>
        </div>

        <div
          className="
          text-[10px]
          text-[#2a2d3a]
        "
        >
          © 2025 RK Trading Co.
        </div>
      </div>

      {/* RIGHT */}

      <div
        className="
        flex-1
        px-10
        py-12
        flex
        flex-col
        justify-center
        bg-[#10121a]
      "
      >
        <h1
          className="
          text-[36px]
          font-black
          tracking-[2px]
          text-[#e8c96d]
        "
        >
          RKTC
        </h1>

        <p
          className="
          mb-10
          text-[11px]
          tracking-[3px]
          uppercase
          text-[#4a4f66]
        "
        >
          Admin Portal
        </p>

        <form onSubmit={handleSubmit}>
          {/* EMAIL */}

          <div className="mb-5">
            <label
              className="
              block
              mb-2
              text-[11px]
              text-[#4a4f66]
            "
            >
              Email
            </label>

            <input
              type="email"
              placeholder="admin@rktradingco.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="
              w-full
              
              border-b
              border-[#3d3f4a]
              py-2
              "
            />
          </div>

          {/* PASSWORD */}

          <div className="mb-5">
            <label
              className="
              block
              mb-2
              text-[11px]
              text-[#4a4f66]
            "
            >
              Password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password:
                      e.target.value,
                  })
                }
                className="
                w-full
                bg-transparent
                border-b
                border-[#2a2d3a]
                py-2
                outline-none
                focus:border-[#e8c96d]
              "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="
                absolute
                right-1
                top-1/2
                -translate-y-1/2
              "
              >
                👁
              </button>
            </div>
          </div>

          {/* REMEMBER */}

          <div
            className="
            flex
            justify-between
            mb-7
          "
          >
            <label
              className="
              flex
              gap-2
              text-[11px]
              text-[#4a4f66]
            "
            >
              <input
                type="checkbox"
                checked={
                  formData.remember
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    remember:
                      e.target.checked,
                  })
                }
              />

              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="
            w-full
            py-3
            rounded
            bg-[#e8c96d]
            text-black
            font-black
            tracking-[2px]
            hover:bg-[#d4b455]
            transition
          "
          >
            ENTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

