import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import AddProductModal from "./AddProductModal";

const Dashboard = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchDashboardData();
  }, [navigate]);

  const fetchDashboardData = async () => {
    try {
      const productRes = await api.get("/products");
      setProducts(productRes.data.data);

      const inquiryRes = await api.get("/inquiries");
      setInquiries(inquiryRes.data.data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const stats = [
    {
      title: "Products",
      value: products.length,
    },
    {
      title: "Inquiries",
      value: inquiries.length,
    },
    {
      title: "Unread",
      value: inquiries.length,
    },
    {
      title: "Projects",
      value: "500+",
    },
  ];

  return (
    <AdminLayout>

      {/* Stats */}

      <section className="grid grid-cols-4 gap-6 mt-10">

        {stats.map((item, index) => (

          <div
            key={index}
            className="
              bg-[#111722]
              border
              border-[#232a3b]
              rounded-2xl
              p-8
              hover:border-[#E8C96D]
              hover:-translate-y-1
              duration-300
            "
          >

            <p className="uppercase tracking-[3px] text-xs text-[#8b93a7]">
              {item.title}
            </p>

            <h1 className="text-5xl font-black text-[#E8C96D] mt-5">
              {item.value}
            </h1>

          </div>

        ))}

      </section>

      {/* Quick Actions */}

      <section className="mt-16">

        <div className="flex items-center gap-3 mb-7">

          <div className="w-10 h-[2px] bg-[#E8C96D]" />

          <p className="uppercase tracking-[3px] text-[#E8C96D] text-xs">
            Quick Actions
          </p>

        </div>

        <div className="flex gap-5">

          <button
            onClick={() => setShowModal(true)}
            className="
              px-8
              py-4
              rounded-xl
              bg-[#E8C96D]
              text-black
              font-bold
              hover:scale-105
              duration-300
            "
          >
            + Add Product
          </button>

          <button
            className="
              px-8
              py-4
              rounded-xl
              border
              border-[#E8C96D]
              hover:bg-[#E8C96D]
              hover:text-black
              duration-300
            "
          >
            View Inquiries
          </button>

        </div>

      </section>

      {/* Recent Activity */}

      <section
        className="
          mt-16
          bg-[#111722]
          border
          border-[#232a3b]
          rounded-2xl
          p-8
        "
      >

        <div className="flex items-center gap-3 mb-6">

          <div className="w-10 h-[2px] bg-[#E8C96D]" />

          <p className="uppercase tracking-[3px] text-[#E8C96D] text-xs">
            Recent Activity
          </p>

        </div>

        <div className="space-y-4 text-[#8b93a7]">

          <p>• Admin logged in</p>
          <p>• Product added successfully</p>
          <p>• Dashboard loaded</p>

        </div>

      </section>

      <AddProductModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        refreshProducts={fetchDashboardData}
      />

    </AdminLayout>
  );
};

export default Dashboard;