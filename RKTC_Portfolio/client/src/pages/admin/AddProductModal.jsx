import { useState } from "react";
import api from "../../services/api";

const AddProductModal = ({ isOpen, onClose, refreshProducts }) => {

    const [form, setForm] = useState({
        name: "",
        description: "",
        category: "",
        image: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await api.post("/products", form);

            alert("Product Added Successfully");

            setForm({
                name: "",
                description: "",
                category: "",
                image: "",
            });

            refreshProducts();

            onClose();

        } catch (err) {

            console.log(err.response?.data || err.message);

            alert("Unable to add product");

        }
    };

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <div className="bg-[#10121a] w-[500px] rounded-xl p-8 border border-[#e8c96d]">

                <h2 className="text-3xl font-bold text-[#e8c96d] mb-6">
                    Add Product
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-gray-600 p-3 rounded"
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-gray-600 p-3 rounded"
                        rows="4"
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-gray-600 p-3 rounded"
                        required
                    />

                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={form.image}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-gray-600 p-3 rounded"
                        required
                    />

                    <div className="flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 border border-gray-500 rounded"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-[#e8c96d] text-black px-6 py-2 rounded font-bold"
                        >
                            Add Product
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );
};

export default AddProductModal;