import rozanaImg from "../assets/store-hero.png";
import subhanganImg from "../assets/2.jpg";
import moltenImg from "../assets/molten.jpg";
const projects = [
  {
    id: 1,
    title: "Rozana Store",
    location: "Gharaunda, Haryana",
    image: rozanaImg,
    description:
      "Commercial exterior facade and cladding work completed for Rozana Store.",
  },
  {
    id: 2,
    title: "Subhangan Flats",
    location: "Panipat, Haryana",
    image: subhanganImg,
    description:
      "Modern residential exterior and facade development for Subhangan Flats.",
  },
  {
    id: 3,
    title: "Molten Cave",
    location: "Gharaunda, Haryana",
    image: moltenImg,
    description:
      "Premium commercial facade work with a modern dark exterior finish.",
  },
];

const PastWork = () => {
  return (
    <div className="min-h-screen bg-[#0d0f14] text-white px-6 md:px-12 py-24">
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-[2px] bg-[#c9a84c]" />

          <p className="text-[#c9a84c] uppercase tracking-[4px] text-xs">
            Our Portfolio
          </p>
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-none">
          PAST
          <span className="text-[#c9a84c]"> WORK</span>
        </h1>

        <p className="text-gray-500 mt-5 max-w-xl">
          A selection of commercial and residential projects completed by RK
          Trading Co.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#141720] border border-[#252a35] rounded-xl overflow-hidden hover:border-[#c9a84c] transition duration-300"
          >
            <div className="h-[300px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <p className="text-[#c9a84c] text-xs uppercase tracking-[3px]">
                {project.location}
              </p>

              <h2 className="text-2xl font-bold mt-3">
                {project.title}
              </h2>

              <p className="text-gray-500 text-sm mt-3 leading-6">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 border border-[#252a35] rounded-xl p-10 md:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-4xl font-black">
            START YOUR{" "}
            <span className="text-[#c9a84c]">
              NEXT PROJECT
            </span>
          </h2>

          <p className="text-gray-500 mt-3">
            Get in touch with RK Trading Co. for your next project.
          </p>
        </div>

        <a
          href="/contact"
          className="bg-[#c9a84c] text-black px-8 py-4 rounded-lg font-bold hover:scale-105 transition"
        >
          Get a Quote →
        </a>
      </div>
    </div>
  );
};

export default PastWork;