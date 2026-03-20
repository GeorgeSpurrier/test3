/**
 * Root Layout — wraps the entire app with AuthProvider and Toaster.
 * 
 * This component exists because react-router v7's RouterProvider creates
 * its own React tree, so context providers must be placed inside a root
 * route's Component to be accessible by child routes.
 */

import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import { AuthProvider } from './AuthContext';

export function RootLayout() {
  return (
    <AuthProvider>
      <Outlet />
      <Toaster position="top-right" richColors closeButton />
    </AuthProvider>
  );
}
