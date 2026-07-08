import { useEffect, useState } from "react";
import { Eye, Trash2 } from "lucide-react";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import InquiryModal from "./InquiryModal";

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const res = await api.get("/inquiries");
      setInquiries(res.data.data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const deleteInquiry = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/inquiries/${id}`);
      fetchInquiries();
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const viewInquiry = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowModal(true);
  };

  return (
    <AdminLayout>
      {/* Heading */}

      <div className="flex justify-between items-center mb-12">
        <div>
          <p className="uppercase tracking-[4px] text-[#E8C96D] text-xs">
            Client Communication
          </p>

          <h1 className="text-6xl font-black mt-2">
            INQUIRIES
          </h1>
        </div>

        <div className="bg-[#111722] border border-[#232a3b] rounded-2xl px-8 py-5">
          <p className="text-[#8b93a7] uppercase tracking-[3px] text-xs">
            Total Inquiries
          </p>

          <h2 className="text-4xl font-black text-[#E8C96D] mt-2">
            {inquiries.length}
          </h2>
        </div>
      </div>

      {/* Table */}

      <div className="bg-[#111722] border border-[#232a3b] rounded-3xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#0f1420]">

            <tr className="text-left text-[#8b93a7] uppercase tracking-[2px] text-sm">

              <th className="px-8 py-5">Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Products</th>

              <th>Date</th>

              <th className="text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {inquiries.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-16 text-gray-500"
                >
                  No Inquiries Found
                </td>
              </tr>
            ) : (
              inquiries.map((item) => (
                <tr
                  key={item._id}
                  className="border-t border-[#232a3b] hover:bg-[#151b29] transition"
                >
                  <td className="px-8 py-6 font-semibold">
                    {item.name}
                  </td>

                  <td>{item.email || "-"}</td>

                  <td>{item.phone}</td>

                  <td>
                    {item.products?.join(", ")}
                  </td>

                  <td>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => viewInquiry(item)}
                        className="bg-blue-600 hover:bg-blue-500 rounded-xl p-3 transition"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() => deleteInquiry(item._id)}
                        className="bg-red-600 hover:bg-red-500 rounded-xl p-3 transition"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

      <InquiryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        inquiry={selectedInquiry}
      />
    </AdminLayout>
  );
};

export default Inquiries;