const UserDashboardLayout = ({ children }) => {
    return (
      <div className="min-h-screen flex">
        <div className="w-64 bg-gray-800 text-white">Sidebar</div>
        <main className="flex-1 p-6">{children}</main>
      </div>
    );
  };
  
  export default UserDashboardLayout;
  