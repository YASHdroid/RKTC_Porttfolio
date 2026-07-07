import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import ProductCard from "./ProductCard";
import AddProductModal from "./AddProductModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data.data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const editProduct = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="uppercase tracking-[4px] text-[#E8C96D] text-xs">
            Product Management
          </p>

          <h1 className="text-6xl font-black mt-2">
            PRODUCTS
          </h1>
        </div>

        <button
          onClick={() => {
            setEditingProduct(null);
            setShowModal(true);
          }}
          className="px-7 py-4 rounded-xl bg-[#E8C96D] text-black font-bold hover:scale-105 duration-300"
        >
          + Add Product
        </button>
      </div>

      {products.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          No Products Found
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onDelete={deleteProduct}
              onEdit={editProduct}
            />
          ))}
        </div>
      )}

      <AddProductModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingProduct(null);
        }}
        refreshProducts={fetchProducts}
        product={editingProduct}
      />
    </AdminLayout>
  );
};

export default Products;