// src/app/dashboard/page.tsx
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        {/* Dashboard content goes here */}
      </div>
    </ProtectedRoute>
  );
}