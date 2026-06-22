import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div
      className="
      min-h-screen
      text-white
      flex
      bg-[radial-gradient(circle_at_45%_20%,#141a2d_0%,#090d18_45%,#05070d_100%)]
    "
    >

      {/* LEFT */}

      <div
        className="
        flex-1
        px-16
        py-20
        flex
        flex-col
        justify-center
      "
      >

        <p
          className="
          text-[#e8c96d]
          tracking-[4px]
          uppercase
          text-sm
        "
        >
          Contact RKTC
        </p>

        <h1
          className="
          mt-6
          text-7xl
          font-black
          leading-[0.95]
        "
        >
          LET'S
          <br />

          BUILD
          <br />

          TOGETHER
        </h1>

        <p
          className="
          mt-8
          max-w-[420px]
          text-gray-400
          leading-8
        "
        >
          Reach out for premium
          building materials,
          project discussion
          and business inquiries.
        </p>

        <div className="mt-14 space-y-5">

          <p className="text-gray-300">
            📍 Panipat, Haryana
          </p>

          <p className="text-gray-300">
            📞 +91 XXXXX XXXXX
          </p>

          <p className="text-gray-300">
            ✉ contact@rktc.com
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div
        className="
        flex-1
        flex
        justify-center
        items-center
      "
      >

        <form
          onSubmit={handleSubmit}

          className="
          w-[550px]
          p-10
          rounded-3xl
          bg-[#10121a]
          border
          border-[#20263a]
        "
        >

          <h2
            className="
            text-3xl
            font-black
            mb-8
            text-[#e8c96d]
          "
          >
            Send Inquiry
          </h2>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Name"

              value={formData.name}

              onChange={(e)=>
                setFormData({
                  ...formData,
                  name:e.target.value
                })
              }

              className="
              w-full
              p-4
              rounded-xl
              bg-[#161b28]
            "
            />

            <input
              type="email"
              placeholder="Email"

              value={formData.email}

              onChange={(e)=>
                setFormData({
                  ...formData,
                  email:e.target.value
                })
              }

              className="
              w-full
              p-4
              rounded-xl
              bg-[#161b28]
            "
            />

            <input
              type="text"
              placeholder="Phone"

              value={formData.phone}

              onChange={(e)=>
                setFormData({
                  ...formData,
                  phone:e.target.value
                })
              }

              className="
              w-full
              p-4
              rounded-xl
              bg-[#161b28]
            "
            />

            <textarea
              rows="5"

              placeholder="Message"

              value={formData.message}

              onChange={(e)=>
                setFormData({
                  ...formData,
                  message:e.target.value
                })
              }

              className="
              w-full
              p-4
              rounded-xl
              bg-[#161b28]
            "
            />

            <button
              className="
              w-full
              py-4
              rounded-xl
              bg-[#e8c96d]
              text-black
              font-black
              hover:scale-[1.02]
              transition
            "
            >
              SEND INQUIRY
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Contact;