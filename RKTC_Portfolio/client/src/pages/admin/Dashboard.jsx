import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Products",
      value: "08",
    },

    {
      title: "Inquiries",
      value: "24",
    },

    {
      title: "Unread",
      value: "05",
    },

    {
      title: "Projects",
      value: "500+",
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/admin/login");
  };

  return (
    <div
      className="
      min-h-screen
      flex
      bg-[#121829]
      text-white
      "
    >

      {/* SIDEBAR */}

      <div
        className="
        w-[280px]
        border-r
        border-[#2e3139]
        px-8
        py-7
      "
      >

        <h1
          className="
          text-4xl
          font-black
          text-[#e8c96d]
        "
        >
          RKTC
        </h1>

        <p
          className="
          text-xs
          mt-2
          text-gray-500
        "
        >
          Admin Panel
        </p>

        <div
          className="
          mt-18
          flex
          flex-col
          gap-4
        "
        >

          <button className="text-left hover:text-[#e8c96d]">
            Dashboard
          </button>

          <button className="text-left hover:text-[#e8c96d]">
            Products
          </button>

          <button className="text-left hover:text-[#e8c96d]">
            Inquiries
          </button>

          <button className="text-left hover:text-[#e8c96d]">
            Settings
          </button>

        </div>

        <button
          onClick={logout}
          className="
          mt-21
          w-full
          py-3
          rounded-2xl
          bg-[#e8c96d]
          text-black
          font-bold
        "
        >
          Logout
        </button>

      </div>

      {/* CONTENT */}

      <div
        className="
        flex-1
        p-10
      "
      >

        {/* TOP */}

        <div>

          <h1
            className="
            text-5xl
            font-black
            "
          >
           Welcome Back, Admin
          </h1>

          <p
            className="
            mt-3
            text-gray-500
          "
          >
            Manage products and monitor inquiries.
          </p>

        </div>

        {/* CARDS */}

        <div
          className="
          grid
          grid-cols-4
          gap-6
          mt-12
        "
        >

          {stats.map((item, index) => (

            <div
              key={index}

              className="
              p-6
              rounded-xl
              bg-[#10121a]
              border
              border-[#1f2435]
              hover:border-[#e8c96d]
              transition
              "
            >

              <p
                className="
                text-sm
                text-gray-500
                "
              >
                {item.title}
              </p>

              <h1
                className="
                mt-3
                text-5xl
                font-black
                text-[#e8c96d]
                "
              >
                {item.value}
              </h1>

            </div>

          ))}

        </div>

        {/* QUICK ACTION */}

        <div
          className="
          mt-14
        "
        >

          <h2
            className="
            text-2xl
            font-bold
            mb-6
          "
          >
            Quick Actions
          </h2>

          <div
            className="
            flex
            gap-5
          "
          >

            <button
              className="
              px-8
              py-4
              bg-[#e8c96d]
              text-black
              rounded-xl
              font-bold
              hover:scale-105
              transition
            "
            >
              Add Product
            </button>

            <button
              className="
              px-8
              py-4
              border
              border-[#e8c96d]
              rounded-xl
              hover:bg-[#e8c96d]
              hover:text-black
              transition
            "
            >
              View Inquiries
            </button>

          </div>

        </div>

        {/* RECENT */}

        <div
          className="
          mt-16
          p-8
          rounded-2xl
          bg-[#10121a]
          border
          border-[#1f2435]
        "
        >

          <h2
            className="
            text-xl
            font-bold
            mb-6
          "
          >
            Recent Activity
          </h2>

          <div className="space-y-5">

            <p className="text-gray-400">
              New inquiry received
            </p>

            <p className="text-gray-400">
              Product updated
            </p>

            <p className="text-gray-400">
              Admin logged in
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;