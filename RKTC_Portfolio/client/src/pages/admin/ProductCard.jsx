import { SquarePen, Trash2 } from "lucide-react";

const ProductCard = ({ product, onDelete, onEdit }) => {

  console.log("Product:", product);

  if (!product) {
    return <div className="text-red-500">Product is undefined</div>;
  }
  return (
    <div
      className="
        bg-[#0d121c]
        border
        border-[#22283a]
        rounded-3xl
        overflow-hidden
        hover:border-[#E8C96D]
        hover:-translate-y-2
        duration-300
        group
      "
    >
      <div className="h-64 overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            duration-500
          "
        />

      </div>

      <div className="p-7">

        <h2 className="text-2xl font-bold text-white">
          {product.name}
        </h2>

        <p className="text-[#8d93a6] mt-3 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-6">

          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-[#1a2233]
              text-[#E8C96D]
              text-sm
            "
          >
            {product.category}
          </span>

        </div>

        <div className="flex gap-3 mt-8">

          <button
            onClick={() => onEdit(product)}
            className="
              flex-1
              py-3
              rounded-xl
              bg-[#1d4ed8]
              hover:bg-blue-500
              duration-300
            "
          >
            <div className="flex justify-center items-center gap-2">
              <SquarePen size={18} />
              Edit
            </div>
          </button>

          <button
            onClick={() => onDelete(product._id)}
            className="
              flex-1
              py-3
              rounded-xl
              bg-red-600
              hover:bg-red-500
              duration-300
            "
          >
            <div className="flex justify-center items-center gap-2">
              <Trash2 size={18} />
              Delete
            </div>
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;