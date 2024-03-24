import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto bg-red-300">
      <Outlet />
    </div>
  );
};

export default MainLayout;
