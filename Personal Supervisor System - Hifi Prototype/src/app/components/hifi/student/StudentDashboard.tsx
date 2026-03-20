/**
 * Student Dashboard — UC2: Student Menu
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — Shows a personalised welcome banner with the student's name. Displays
 *   summary statistics (total reports, average wellbeing, upcoming meetings)
 *   so the student immediately sees their current status.
 *
 * HCI Heuristic #6: Recognition Rather Than Recall (Nielsen)
 * — Quick action cards with icons and descriptions make available actions
 *   immediately visible and understandable without memorisation.
 *
 * HCI Heuristic #8: Aesthetic and Minimalist Design (Nielsen)
 * — Information is organised into clear visual sections (welcome, stats, actions)
 *   with appropriate whitespace and hierarchy.
 *
 * Tog Principle: Anticipation
 * — The dashboard anticipates what the student needs: their PS details are shown
 *   upfront, and quick stats surface important information immediately.
 *
 * Tog Principle: Efficiency of the User
 * — One-click navigation cards go directly to each function, minimising steps.
 */

import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { users, avg } from '../data';
import { FileText, ClipboardList, Calendar, BookOpen, ArrowRight, User } from 'lucide-react';

export function StudentDashboard() {
  const { currentUser, reports, meetings } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) return null;

  const myReports = reports.filter(r => r.studentId === currentUser.id);
  const myMeetings = meetings.filter(m => m.studentId === currentUser.id);
  const upcomingMeetings = myMeetings.filter(m => m.status === 'Scheduled');
  const ps = users.find(u => u.id === currentUser.assignedPSId);

  const avgWellbeing = avg(myReports.map(r => r.wellbeing));
  const avgProgress = avg(myReports.map(r => r.progress));

  const actions = [
    { path: '/student/submit-report', label: 'Submit Self-Report', desc: 'Rate your wellbeing and academic progress', icon: FileText, color: 'bg-blue-500' },
    { path: '/student/my-reports', label: 'View My Reports', desc: 'See your submission history and averages', icon: ClipboardList, color: 'bg-indigo-500' },
    { path: '/student/book-meeting', label: 'Book Meeting', desc: 'Schedule time with your Personal Supervisor', icon: Calendar, color: 'bg-teal-500' },
    { path: '/student/my-meetings', label: 'My Meetings', desc: 'View upcoming and past meetings', icon: BookOpen, color: 'bg-purple-500' },
  ];

  return (
    <div className="p-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h1 className="text-[22px] text-gray-900" style={{ fontWeight: 600 }}>
          Welcome back, {currentUser.name.split(' ')[0]}
        </h1>
        <p className="text-[14px] text-gray-600 mt-1">
          Submit self-reports, book meetings, and track your progress
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Total Reports</div>
          <div className="text-[28px] text-gray-900 mt-1" style={{ fontWeight: 700 }}>{myReports.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Avg Wellbeing</div>
          <div className="text-[28px] text-gray-900 mt-1" style={{ fontWeight: 700 }}>{avgWellbeing || 'N/A'}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Avg Progress</div>
          <div className="text-[28px] text-gray-900 mt-1" style={{ fontWeight: 700 }}>{avgProgress || 'N/A'}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Upcoming Meetings</div>
          <div className="text-[28px] text-gray-900 mt-1" style={{ fontWeight: 700 }}>{upcomingMeetings.length}</div>
        </div>
      </div>

      {/* PS Info Card */}
      {ps && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-8 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-[11px] text-gray-400" style={{ fontWeight: 600 }}>YOUR PERSONAL SUPERVISOR</div>
            <div className="text-[15px] text-gray-900" style={{ fontWeight: 600 }}>{ps.name}</div>
            <div className="text-[12px] text-gray-500">{ps.email}</div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        {actions.map(action => {
          const Icon = action.icon;
          return (
            <button
              key={action.path}
              onClick={() => navigate(action.path)}
              className="bg-white rounded-xl border border-gray-200 p-6 text-left hover:border-blue-300 hover:shadow-md transition-all group shadow-sm"
            >
              <div className={`w-11 h-11 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-[15px] text-gray-900" style={{ fontWeight: 600 }}>{action.label}</div>
              <div className="text-[12px] text-gray-500 mt-1">{action.desc}</div>
              <div className="flex items-center gap-1 text-blue-600 text-[12px] mt-3 group-hover:gap-2 transition-all" style={{ fontWeight: 500 }}>
                Go <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
