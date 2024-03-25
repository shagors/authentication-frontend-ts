import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <h1 className="bg-blue-700 text-white text-center py-8 text-3xl">
        Dashboard
      </h1>
      <div className="pt-12 flex justify-between items-center">
        <div className="pl-4">
          <h4 className="text-xl font-medium">Name: LWG</h4>
          <h4 className="text-xl font-medium"> Email: LWG@outlook.com</h4>
          <h4 className="text-xl font-medium">Rights: Admin</h4>
        </div>
        <div className="pr-12">
          <Button className="bg-red-600">Logout</Button>
        </div>
      </div>
      <div className="mt-24 flex items-center justify-center">Form</div>
    </div>
  );
};

export default Dashboard;
