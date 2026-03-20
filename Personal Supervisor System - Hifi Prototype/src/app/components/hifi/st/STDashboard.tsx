/**
 * Senior Tutor Dashboard — UC11: ST Menu
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — Department-wide stats are surfaced immediately: total students, at-risk count,
 *   students with no reports, and total PS count. This gives the ST an instant
 *   pulse on departmental wellbeing.
 *
 * HCI Heuristic #6: Recognition Rather Than Recall (Nielsen)
 * — Function cards with descriptive icons and labels. No menu numbers to remember.
 *
 * Tog Principle: Anticipation
 * — The at-risk count is shown with red styling, immediately drawing the ST's
 *   attention to the most critical metric.
 */

import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { users } from '../data';
import { Users, BarChart3, ArrowRight, AlertTriangle } from 'lucide-react';

export function STDashboard() {
  const { currentUser, reports } = useAuth();
  const navigate = useNavigate();
  if (!currentUser) return null;

  const allStudents = users.filter(u => u.role === 'student');
  const allPS = users.filter(u => u.role === 'ps');

  const atRiskCount = allStudents.filter(s => {
    const sReports = reports.filter(r => r.studentId === s.id).sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
    return sReports.length > 0 && sReports[0].wellbeing <= 2;
  }).length;

  const noReportsCount = allStudents.filter(s => reports.filter(r => r.studentId === s.id).length === 0).length;

  return (
    <div className="p-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h1 className="text-[22px] text-gray-900" style={{ fontWeight: 600 }}>
          Welcome back, {currentUser.name.split(' ').slice(1).join(' ').split(' ')[0]}
        </h1>
        <p className="text-[14px] text-gray-600 mt-1">Department-wide oversight and PS engagement monitoring</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Total Students</div>
          <div className="text-[28px] text-gray-900 mt-1" style={{ fontWeight: 700 }}>{allStudents.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>At Risk</div>
          <div className={`text-[28px] mt-1 ${atRiskCount > 0 ? 'text-red-600' : 'text-gray-900'}`} style={{ fontWeight: 700 }}>{atRiskCount}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>No Reports</div>
          <div className={`text-[28px] mt-1 ${noReportsCount > 0 ? 'text-amber-600' : 'text-gray-900'}`} style={{ fontWeight: 700 }}>{noReportsCount}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-[12px] text-gray-500" style={{ fontWeight: 500 }}>Personal Supervisors</div>
          <div className="text-[28px] text-gray-900 mt-1" style={{ fontWeight: 700 }}>{allPS.length}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => navigate('/st/all-students')} className="bg-white rounded-xl border border-gray-200 p-6 text-left hover:border-blue-300 hover:shadow-md transition-all group shadow-sm relative">
          <div className="flex items-start justify-between">
            <div className="w-11 h-11 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-white" />
            </div>
            {atRiskCount > 0 && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-red-50 text-red-600 border border-red-200 rounded-full text-[11px]" style={{ fontWeight: 600 }}>
                <AlertTriangle className="w-3 h-3" /> {atRiskCount} at risk
              </span>
            )}
          </div>
          <div className="text-[15px] text-gray-900" style={{ fontWeight: 600 }}>All Students Overview</div>
          <div className="text-[12px] text-gray-500 mt-1">Department-wide student status and wellbeing</div>
          <div className="flex items-center gap-1 text-blue-600 text-[12px] mt-3 group-hover:gap-2 transition-all" style={{ fontWeight: 500 }}>Go <ArrowRight className="w-3.5 h-3.5" /></div>
        </button>

        <button onClick={() => navigate('/st/ps-summary')} className="bg-white rounded-xl border border-gray-200 p-6 text-left hover:border-blue-300 hover:shadow-md transition-all group shadow-sm">
          <div className="w-11 h-11 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div className="text-[15px] text-gray-900" style={{ fontWeight: 600 }}>PS Interaction Summary</div>
          <div className="text-[12px] text-gray-500 mt-1">Supervisor engagement with at-risk students</div>
          <div className="flex items-center gap-1 text-blue-600 text-[12px] mt-3 group-hover:gap-2 transition-all" style={{ fontWeight: 500 }}>Go <ArrowRight className="w-3.5 h-3.5" /></div>
        </button>
      </div>
    </div>
  );
}
