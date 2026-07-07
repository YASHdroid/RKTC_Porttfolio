import { LayoutDashboard, Package, Mail, Settings, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <aside className="w-72 min-h-screen bg-[#0b0f17] border-r border-[#22283a] flex flex-col">

      {/* Logo */}

      <div className="px-10 py-10">

        <h1 className="text-4xl font-black tracking-wider text-[#E8C96D]">
          RKTC
        </h1>

        <div className="flex items-center gap-3 mt-6">

          <div className="w-10 h-[2px] bg-[#E8C96D]" />

          <p className="text-[10px] tracking-[3px] uppercase text-[#E8C96D]">
            Premium Admin
          </p>

        </div>

      </div>

      <nav className="flex-1 px-6">

        <NavLink
          to="/admin/dashboard"
          className="flex items-center gap-4 px-4 py-4 rounded-xl mb-3 hover:bg-[#151b29] transition"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className="flex items-center gap-4 px-4 py-4 rounded-xl mb-3 hover:bg-[#151b29] transition"
        >
          <Package size={20} />
          Products
        </NavLink>

        <NavLink
          to="/admin/inquiries"
          className="flex items-center gap-4 px-4 py-4 rounded-xl mb-3 hover:bg-[#151b29] transition"
        >
          <Mail size={20} />
          Inquiries
        </NavLink>

        <NavLink
          to="/admin/settings"
          className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-[#151b29] transition"
        >
          <Settings size={20} />
          Settings
        </NavLink>

      </nav>

      <div className="p-8">

        <button
          onClick={logout}
          className="w-full bg-[#E8C96D] text-black py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          <div className="flex items-center justify-center gap-2">
            <LogOut size={18} />
            Logout
          </div>
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;