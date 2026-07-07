import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#0d111b] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-16 py-10 overflow-y-auto">

        <Topbar />

        {children}

      </main>

    </div>
  );
};

export default AdminLayout;