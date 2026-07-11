import { useEffect, useState } from "react";
import api from "../../services/api";

const AddProductModal = ({
  isOpen,
  onClose,
  refreshProducts,
  product,
}) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name || "",
        description: product.description || "",
        category: product.category || "",
        image: product.image || "",
      });
    } else {
      setForm({
        name: "",
        description: "",
        category: "",
        image: "",
      });
    }
  }, [product, isOpen]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (product) {
        await api.put(`/products/${product._id}`, form);
        alert("Product Updated Successfully");
      } else {
        await api.post("/products", form);
        alert("Product Added Successfully");
      }

      await refreshProducts();
      onClose();
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Something went wrong");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="w-[520px] bg-[#111722] border border-[#E8C96D] rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-[#E8C96D] mb-8">
          {product ? "Edit Product" : "Add Product"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-transparent border border-[#2b3145] outline-none focus:border-[#E8C96D]"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded bg-transparent border border-[#2b3145] outline-none focus:border-[#E8C96D]"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 rounded bg-transparent border border-[#2b3145] outline-none focus:border-[#E8C96D]"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full p-3 rounded bg-transparent border border-[#2b3145] outline-none focus:border-[#E8C96D]"
            required
          />

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-gray-500 hover:border-white transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#E8C96D] text-black font-bold hover:scale-105 transition"
            >
              {product ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;