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
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [productRes, inquiryRes] = await Promise.all([
        api.get("/products"),
        api.get("/inquiries"),
      ]);

      setProducts(productRes.data?.data || []);
      setInquiries(inquiryRes.data?.data || []);
    } catch (err) {
      console.log(
        "Dashboard Error:",
        err.response?.data || err.message
      );
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
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          {stats.map((item) => (
            <div
              key={item.title}
              className="
                bg-[#111722]
                border
                border-[#232a3b]
                rounded-2xl
                p-8
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
              className="px-8 py-4 rounded-xl bg-[#E8C96D] text-black font-bold"
            >
              + Add Product
            </button>

            <button
              onClick={() => navigate("/admin/inquiries")}
              className="px-8 py-4 rounded-xl border border-[#E8C96D]"
            >
              View Inquiries
            </button>
          </div>
        </section>

        <section className="mt-16 bg-[#111722] border border-[#232a3b] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[#E8C96D]" />

            <p className="uppercase tracking-[3px] text-[#E8C96D] text-xs">
              Recent Activity
            </p>
          </div>

          <div className="space-y-4 text-[#8b93a7]">
            <p>• Admin logged in</p>
            <p>• {products.length} products available</p>
            <p>• {inquiries.length} inquiries received</p>
          </div>
        </section>

        {showModal && (
          <AddProductModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            refreshProducts={fetchDashboardData}
            product={null}
          />
        )}
      </AdminLayout>
 
  );
};

export default Dashboard;