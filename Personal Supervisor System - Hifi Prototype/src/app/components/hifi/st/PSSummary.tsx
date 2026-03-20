/**
 * PS Interaction Summary — UC13/UC7: View PS Interaction Summary
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — For each PS, the summary shows students assigned, meetings scheduled/completed,
 *   and at-risk student count. Crucially, for each at-risk student, it shows whether
 *   a meeting was booked AFTER the low-wellbeing report (FR-19).
 *
 * HCI Heuristic #2: Match Between System and Real World (Nielsen)
 * — The "response" indicator (check mark for meeting booked, X for no meeting)
 *   uses universally understood symbols. Response time in days is a natural metric.
 *
 * HCI Heuristic #8: Aesthetic and Minimalist Design (Nielsen)
 * — Each PS gets a card with their key metrics. At-risk student sub-cards only
 *   appear when relevant, avoiding information overload for engaged supervisors.
 *
 * Tog Principle: Anticipation
 * — The system pre-computes whether each PS has responded to at-risk students,
 *   surfacing the ST's primary concern without requiring manual investigation.
 */

import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext';
import { users, avg, getWellbeingLabel, formatDateShort } from '../data';
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export function PSSummary() {
  const { reports, meetings } = useAuth();
  const navigate = useNavigate();

  const allPS = users.filter(u => u.role === 'ps');

  const psData = allPS.map(ps => {
    const psStudents = users.filter(u => u.role === 'student' && u.assignedPSId === ps.id);
    const psMeetings = meetings.filter(m => m.supervisorId === ps.id);
    const completed = psMeetings.filter(m => m.status === 'Completed').length;
    const scheduled = psMeetings.filter(m => m.status === 'Scheduled').length;

    const atRiskStudents = psStudents.map(s => {
      const sReports = reports.filter(r => r.studentId === s.id).sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
      if (sReports.length === 0) return null;
      const latest = sReports[0];
      if (latest.wellbeing > 2) return null;

      // Check if a meeting was booked after the low-wellbeing report
      const reportDate = new Date(latest.dateTime);
      const meetingAfter = psMeetings.find(m =>
        m.studentId === s.id && new Date(m.dateTime) > reportDate
      );

      let responseTime: number | null = null;
      if (meetingAfter) {
        responseTime = Math.round((new Date(meetingAfter.dateTime).getTime() - reportDate.getTime()) / (1000 * 60 * 60 * 24));
      }

      return {
        student: s,
        latestWellbeing: latest.wellbeing,
        reportDate: latest.dateTime,
        meetingBooked: !!meetingAfter,
        meetingDate: meetingAfter?.dateTime,
        responseTime,
      };
    }).filter(Boolean) as NonNullable<{
      student: typeof psStudents[0];
      latestWellbeing: number;
      reportDate: string;
      meetingBooked: boolean;
      meetingDate?: string;
      responseTime: number | null;
    }>[];

    return {
      ps,
      studentCount: psStudents.length,
      totalMeetings: psMeetings.length,
      completed,
      scheduled,
      atRiskCount: atRiskStudents.length,
      atRiskStudents,
    };
  });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <button onClick={() => navigate('/st')} className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </button>

      <h1 className="text-[22px] text-gray-900 mb-1" style={{ fontWeight: 600 }}>PS Interaction Summary</h1>
      <p className="text-[13px] text-gray-500 mb-6">Supervisor engagement with at-risk students</p>

      <div className="space-y-6">
        {psData.map(({ ps, studentCount, totalMeetings, completed, scheduled, atRiskCount, atRiskStudents }) => (
          <div key={ps.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="mb-4">
                <div className="text-[17px] text-gray-900" style={{ fontWeight: 600 }}>{ps.name}</div>
                <div className="text-[12px] text-gray-500">{ps.email}</div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                {[
                  { label: 'Students', value: studentCount },
                  { label: 'Total Meetings', value: totalMeetings },
                  { label: 'Completed', value: completed },
                  { label: 'At Risk', value: atRiskCount, isRed: atRiskCount > 0 },
                ].map(stat => (
                  <div key={stat.label} className="bg-gray-50 rounded-lg p-4">
                    <div className="text-[11px] text-gray-500" style={{ fontWeight: 500 }}>{stat.label}</div>
                    <div className={`text-[22px] mt-1 ${stat.isRed ? 'text-red-600' : 'text-gray-900'}`} style={{ fontWeight: 700 }}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-gray-500" />
                <div className="text-[12px] text-gray-500" style={{ fontWeight: 600 }}>AT-RISK STUDENT RESPONSES</div>
              </div>

              {atRiskStudents.length === 0 ? (
                <div className="text-[13px] text-gray-400 italic">No students flagged</div>
              ) : (
                <div className="space-y-3">
                  {atRiskStudents.map(item => (
                    <div key={item.student.id} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-[14px] text-gray-900" style={{ fontWeight: 600 }}>{item.student.name}</div>
                          <div className="text-[12px] text-gray-600 mt-1">
                            Latest wellbeing: <span style={{ fontWeight: 600 }}>{item.latestWellbeing} ({getWellbeingLabel(item.latestWellbeing)})</span>
                          </div>
                          <div className="text-[11px] text-gray-400">Last report: {formatDateShort(item.reportDate)}</div>
                        </div>
                        <div className="text-right">
                          {item.meetingBooked ? (
                            <div>
                              <div className="flex items-center gap-1 text-green-600 text-[12px]" style={{ fontWeight: 600 }}>
                                <CheckCircle2 className="w-4 h-4" /> Meeting booked
                              </div>
                              <div className="text-[11px] text-gray-400 mt-0.5">{formatDateShort(item.meetingDate!)}</div>
                              {item.responseTime !== null && (
                                <div className="text-[11px] text-gray-400">Response: {item.responseTime} days</div>
                              )}
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-red-600 text-[12px]" style={{ fontWeight: 600 }}>
                              <XCircle className="w-4 h-4" /> No meeting booked
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
