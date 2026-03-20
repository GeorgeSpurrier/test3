/**
 * Shared Layout Component — Header, Sidebar Navigation, and Content Area.
 *
 * HCI Heuristic #4: Consistency and Standards (Nielsen)
 * — All screens share the same header, sidebar, and content layout. Navigation
 *   items are in the same position on every page. The blue-600 header matches
 *   the university portal convention established in the wireframes.
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — The header always shows the logged-in user's name and role. The sidebar
 *   highlights the currently active page so the user always knows where they are.
 *
 * HCI Heuristic #7: Flexibility and Efficiency of Use (Nielsen)
 * — Sidebar navigation provides single-click access to all role-relevant screens,
 *   avoiding deep menu hierarchies.
 *
 * Tog Principle: Discoverability
 * — All available actions for the user's role are visible in the sidebar at all times.
 *   Nothing is hidden behind hamburger menus or requires prior knowledge.
 *
 * Tog Principle: Fitts' Law
 * — Navigation targets are large, full-width sidebar items with generous padding,
 *   making them easy to click. The logout button is separated to avoid accidental clicks.
 */

import { Outlet, useNavigate, useLocation, Navigate } from 'react-router';
import { useAuth } from './AuthContext';
import { users } from './data';
import {
  LayoutDashboard, FileText, Calendar, Users, ClipboardList,
  UserCheck, BarChart3, LogOut, ChevronRight, Shield, BookOpen
} from 'lucide-react';

const studentNav = [
  { path: '/student', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/student/submit-report', label: 'Submit Self-Report', icon: FileText },
  { path: '/student/my-reports', label: 'View My Reports', icon: ClipboardList },
  { path: '/student/book-meeting', label: 'Book Meeting', icon: Calendar },
  { path: '/student/my-meetings', label: 'My Meetings', icon: BookOpen },
];

const psNav = [
  { path: '/ps', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/ps/my-students', label: 'My Students', icon: Users },
  { path: '/ps/student-details', label: 'Student Details', icon: UserCheck },
  { path: '/ps/book-meeting', label: 'Book Meeting', icon: Calendar },
  { path: '/ps/meetings', label: 'Manage Meetings', icon: ClipboardList },
];

const stNav = [
  { path: '/st', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/st/all-students', label: 'All Students', icon: Users },
  { path: '/st/ps-summary', label: 'PS Interaction Summary', icon: BarChart3 },
];

function getRoleLabel(role: string) {
  switch (role) {
    case 'student': return 'Student';
    case 'ps': return 'Personal Supervisor';
    case 'st': return 'Senior Tutor';
    default: return '';
  }
}

export function Layout() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  const nav = currentUser.role === 'student' ? studentNav
    : currentUser.role === 'ps' ? psNav : stNav;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 
        Header Bar
        HCI Heuristic #1: Visibility of System Status — user always sees their name + role.
        HCI Heuristic #4: Consistency — identical header across all role dashboards.
      */}
      <header className="bg-blue-600 text-white shadow-md" style={{ zIndex: 50 }}>
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-white/90" />
            <div>
              <div className="text-[15px] tracking-wide" style={{ fontWeight: 600 }}>Personal Supervisor System</div>
              <div className="text-[11px] text-blue-100">Department of Computer Science & Technology</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {/* 
              HCI Heuristic #1: Visibility — user identity is always shown.
              Tog Principle: Track State — system remembers who is logged in.
            */}
            <div className="text-right">
              <div className="text-[13px]" style={{ fontWeight: 500 }}>{currentUser.name}</div>
              <div className="text-[11px] text-blue-200">{getRoleLabel(currentUser.role)}</div>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-[13px]" style={{ fontWeight: 600 }}>
              {currentUser.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* 
          Sidebar Navigation
          Tog Principle: Discoverability — all available functions visible at all times.
          Tog Principle: Fitts' Law — large click targets with generous padding.
          HCI Heuristic #6: Recognition Rather Than Recall — icons + labels, no memorisation needed.
        */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
          <nav className="flex-1 py-4">
            <div className="px-4 mb-3">
              <div className="text-[11px] tracking-wider text-gray-400" style={{ fontWeight: 600 }}>NAVIGATION</div>
            </div>
            {nav.map(item => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-[13px] transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-3 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  style={{ fontWeight: isActive ? 600 : 400 }}
                >
                  <Icon className="w-[18px] h-[18px]" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {isActive && <ChevronRight className="w-4 h-4 text-blue-400" />}
                </button>
              );
            })}
          </nav>

          {/* 
            Logout button — separated from navigation to prevent accidental clicks.
            HCI Heuristic #3: User Control and Freedom — clear exit path.
            HCI Heuristic #5: Error Prevention — visual separation reduces mis-clicks.
          */}
          <div className="border-t border-gray-200 p-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 text-[13px] text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
              <LogOut className="w-[18px] h-[18px]" />
              <span>Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}