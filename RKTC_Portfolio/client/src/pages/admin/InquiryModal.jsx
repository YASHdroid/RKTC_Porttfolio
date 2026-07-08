const InquiryModal = ({ isOpen, onClose, inquiry }) => {
  if (!isOpen || !inquiry) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="w-[700px] bg-[#111722] border border-[#E8C96D] rounded-3xl p-10">

        {/* Heading */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <p className="uppercase tracking-[3px] text-[#E8C96D] text-xs">
              Client Inquiry
            </p>

            <h2 className="text-4xl font-black mt-2">
              Inquiry Details
            </h2>

          </div>

          <button
            onClick={onClose}
            className="text-3xl text-gray-400 hover:text-white"
          >
            ×
          </button>

        </div>

        {/* Information */}

        <div className="grid grid-cols-2 gap-8">

          <div>

            <p className="text-[#8b93a7] uppercase text-xs tracking-[2px]">
              Name
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {inquiry.name}
            </h3>

          </div>

          <div>

            <p className="text-[#8b93a7] uppercase text-xs tracking-[2px]">
              Phone
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {inquiry.phone}
            </h3>

          </div>

          <div>

            <p className="text-[#8b93a7] uppercase text-xs tracking-[2px]">
              Email
            </p>

            <h3 className="mt-2 text-lg break-all">
              {inquiry.email || "Not Provided"}
            </h3>

          </div>

          <div>

            <p className="text-[#8b93a7] uppercase text-xs tracking-[2px]">
              Date
            </p>

            <h3 className="mt-2 text-lg">
              {new Date(inquiry.createdAt).toLocaleString()}
            </h3>

          </div>

        </div>

        {/* Products */}

        <div className="mt-10">

          <p className="text-[#8b93a7] uppercase text-xs tracking-[2px] mb-4">
            Products
          </p>

          <div className="flex flex-wrap gap-3">

            {inquiry.products?.map((item, index) => (
              <span
                key={index}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-[#1b2333]
                  text-[#E8C96D]
                  text-sm
                "
              >
                {item}
              </span>
            ))}

          </div>

        </div>

        {/* Message */}

        <div className="mt-10">

          <p className="text-[#8b93a7] uppercase text-xs tracking-[2px] mb-4">
            Message
          </p>

          <div
            className="
              bg-[#0d111b]
              border
              border-[#232a3b]
              rounded-2xl
              p-6
              leading-8
              text-gray-300
            "
          >
            {inquiry.message}
          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end mt-10">

          <button
            onClick={onClose}
            className="
              px-8
              py-3
              rounded-xl
              bg-[#E8C96D]
              text-black
              font-bold
              hover:scale-105
              duration-300
            "
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default InquiryModal;