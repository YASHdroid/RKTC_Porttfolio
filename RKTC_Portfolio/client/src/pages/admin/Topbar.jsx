import { UserCircle2, CalendarDays } from "lucide-react";

const Topbar = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex items-center justify-between mb-12">

      <div>

        <div className="flex items-center gap-3 mb-4">

          <div className="w-10 h-[2px] bg-[#E8C96D]" />

          <span className="text-[11px] tracking-[3px] uppercase text-[#E8C96D]">
            Premium Product Management
          </span>

        </div>

        <h1 className="text-6xl font-black text-white leading-none">
          PRODUCT
        </h1>

        <h1 className="text-6xl font-black text-[#E8C96D] leading-none">
          MANAGEMENT
        </h1>

      </div>

      <div className="text-right">

        <div className="flex items-center justify-end gap-2 text-[#8d93a6]">

          <CalendarDays size={18} />

          <span>{today}</span>

        </div>

        <div className="mt-5 flex items-center justify-end gap-3">

          <UserCircle2 size={34} className="text-[#E8C96D]" />

          <div>

            <p className="text-white font-semibold">
              Admin
            </p>

            <p className="text-sm text-[#8d93a6]">
              RK Trading Co.
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;