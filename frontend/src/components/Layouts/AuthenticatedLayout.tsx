// components/layouts/UnauthenticatedLayout.tsx
import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';

const AuthenticatedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Navigation>
        {children}
    </Navigation>
  );
};

export default AuthenticatedLayout;