/**
 * Personal Supervisor System — High-Fidelity Interactive Prototype
 *
 * Root entry point. All context providers (AuthProvider, Toaster) are inside
 * the router tree via RootLayout to ensure they're accessible to all routes.
 */

import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}
