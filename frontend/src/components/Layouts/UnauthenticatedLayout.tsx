// components/layouts/UnauthenticatedLayout.tsx
import { ReactNode } from 'react';
import { Providers } from "@/app/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UnauthenticatedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
};

export default UnauthenticatedLayout;