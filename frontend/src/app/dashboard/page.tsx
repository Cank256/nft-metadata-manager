import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | MetaPin",
  description: "This is the Dashboard Page for MetaPin",
  // other metadata
};

const DashboardPage = () => {
  return (
    <Dashboard />
  );
};

export default DashboardPage;
