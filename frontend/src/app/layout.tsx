"use client";

import { ReactNode } from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

import AuthenticatedLayout from "@/components/Layouts/AuthenticatedLayout";
import UnauthenticatedLayout from "@/components/Layouts/UnauthenticatedLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        {/* Wrap the entire application in AuthProvider */}
        <AuthProvider>
          <AuthWrapper>{children}</AuthWrapper>
          <ScrollToTop />
        </AuthProvider>
      </body>
    </html>
  );
}

// This component handles the conditional rendering based on authentication state
function AuthWrapper({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <AuthenticatedLayout>{children}</AuthenticatedLayout>
  ) : (
    <UnauthenticatedLayout>{children}</UnauthenticatedLayout>
  );
}