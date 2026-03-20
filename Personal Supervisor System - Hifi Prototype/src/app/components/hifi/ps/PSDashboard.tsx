/**
 * Personal Supervisor Dashboard — UC6: PS Menu
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — Dashboard immediately surfaces the most critical information: number of
 *   students, at-risk count, and upcoming meetings. The at-risk alert badge
 *   in the "My Students" card uses red to draw attention.
 *
 * HCI Heuristic #6: Recognition Rather Than Recall (Nielsen)
 * — Each function is represented by a descriptive card with icon, title, and
 *   description. No need to remember menu numbers (unlike the console app).
 *
 * Tog Principle: Anticipation
 * — If any students are flagged at-risk, the dashboard proactively shows an
 *   alert count, anticipating the supervisor's primary concern.
 */

import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { users, avg } from '../data';
import { Users, UserCheck, Calendar, ClipboardList, ArrowRight, AlertTriangle } from 'lucide-react';

export function PSDashboard() {
  const { currentUser, reports, meetings } = useAuth();
  const navigate = useNavigate();
  if (!currentUser) return null;

  const myStudents = users.filter(u => u.role === 'student' && u.assignedPSId === currentUser.id);
  const myMeetings = meetings.filter(m => m.supervisorId === currentUser.id);
  const upcoming = myMeetings.filter(m => m.status === 'Scheduled');

  const atRiskCount = myStudents.filter(s => {
    const studentReports = reports.filter(r => r.studentId === s.id).sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
    return studentReports.length > 0 && studentReports[0].wellbeing <= 2;
  }).length;

  const actions = [
    { path: '/ps/my-students', label: 'My Students', desc: 'View dashboard with wellbeing alerts', icon: Users, color: 'bg-blue-500', badge: atRiskCount > 0 ? `${atRiskCount} at risk` : undefined },
    { path: '/ps/student-details', label: 'Student Details', desc: 'View individual reports and history', icon: UserCheck, color: 'bg-indigo-500' },
    { path: '/ps/book-meeting', label: 'Book Meeting', desc: 'Schedule meeting with a student', icon: Calendar, color: 'bg-teal-500' },
    { path: '/ps/meetings', label: 'Manage Meetings', desc: 'View and update meeting statuses', icon: ClipboardList, color: 'bg-purple-500' },
  ];

  return (
    <div className="p-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h1 className="text-[22px] text-gray-900" style={{ fontWeight: 600 }}>
          Welcome back, {currentUser.name.split(' ').slice(1).join(' ').split(' ')[0]}
        </h1>
        <p className="text-[14px] text-gray-600 mt-1">Monitor your students and manage meetings</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Students</div>
          <div className="text-[28px] text-gray-900 mt-1" style={{ fontWeight: 700 }}>{myStudents.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>At Risk</div>
          <div className={`text-[28px] mt-1 ${atRiskCount > 0 ? 'text-red-600' : 'text-gray-900'}`} style={{ fontWeight: 700 }}>{atRiskCount}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Upcoming Meetings</div>
          <div className="text-[28px] text-gray-900 mt-1" style={{ fontWeight: 700 }}>{upcoming.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Total Meetings</div>
          <div className="text-[28px] text-gray-900 mt-1" style={{ fontWeight: 700 }}>{myMeetings.length}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {actions.map(action => {
          const Icon = action.icon;
          return (
            <button
              key={action.path}
              onClick={() => navigate(action.path)}
              className="bg-white rounded-xl border border-gray-200 p-6 text-left hover:border-blue-300 hover:shadow-md transition-all group shadow-sm relative"
            >
              <div className="flex items-start justify-between">
                <div className={`w-11 h-11 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                {action.badge && (
                  <span className="flex items-center gap-1 px-2.5 py-1 bg-red-50 text-red-600 border border-red-200 rounded-full text-[11px]" style={{ fontWeight: 600 }}>
                    <AlertTriangle className="w-3 h-3" />
                    {action.badge}
                  </span>
                )}
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
