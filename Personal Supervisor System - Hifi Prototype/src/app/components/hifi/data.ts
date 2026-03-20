/**
 * Mock data layer for the Personal Supervisor System prototype.
 * 
 * HCI Principle: Defaults (Tog) — The system initialises with realistic seed data
 * so that every screen has meaningful content to display, allowing evaluators to
 * assess the interface without needing to manually populate data first.
 */

export type UserRole = 'student' | 'ps' | 'st';
export type MeetingStatus = 'Scheduled' | 'Completed' | 'Cancelled';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  assignedPSId?: string;
}

export interface Report {
  id: string;
  studentId: string;
  dateTime: string;
  wellbeing: number;
  progress: number;
  comments: string;
}

export interface Meeting {
  id: string;
  studentId: string;
  supervisorId: string;
  dateTime: string;
  agenda: string;
  status: MeetingStatus;
  bookedBy: string;
}

// --- Seed Users ---
export const users: User[] = [
  { id: 'S001', name: 'George Spurrier', email: 'george.spurrier@uni.ac.uk', password: 'pass123', role: 'student', assignedPSId: 'PS001' },
  { id: 'S002', name: 'Tom Brown', email: 'tom.brown@uni.ac.uk', password: 'pass123', role: 'student', assignedPSId: 'PS001' },
  { id: 'S003', name: 'Emma Wilson', email: 'emma.wilson@uni.ac.uk', password: 'pass123', role: 'student', assignedPSId: 'PS001' },
  { id: 'S004', name: 'Priya Sharma', email: 'priya.sharma@uni.ac.uk', password: 'pass123', role: 'student', assignedPSId: 'PS002' },
  { id: 'S005', name: 'Liam O\'Brien', email: 'liam.obrien@uni.ac.uk', password: 'pass123', role: 'student', assignedPSId: 'PS002' },
  { id: 'PS001', name: 'Dr. Xinhui Ma', email: 'xinhui.ma@uni.ac.uk', password: 'pass123', role: 'ps' },
  { id: 'PS002', name: 'Dr. Emily Smith', email: 'emily.smith@uni.ac.uk', password: 'pass123', role: 'ps' },
  { id: 'ST001', name: 'Dr. John Whelan', email: 'john.whelan@uni.ac.uk', password: 'pass123', role: 'st' },
];

// --- Seed Reports ---
export const initialReports: Report[] = [
  { id: 'R001', studentId: 'S001', dateTime: '2024-03-18T14:30', wellbeing: 2, progress: 3, comments: 'Struggling to keep up with coursework this week. Feeling anxious about the upcoming deadline.' },
  { id: 'R002', studentId: 'S001', dateTime: '2024-03-11T10:15', wellbeing: 3, progress: 3, comments: 'Managing workload but finding it challenging.' },
  { id: 'R003', studentId: 'S001', dateTime: '2024-03-04T09:00', wellbeing: 3, progress: 4, comments: 'Good week overall.' },
  { id: 'R004', studentId: 'S001', dateTime: '2024-02-26T11:45', wellbeing: 4, progress: 4, comments: '' },
  { id: 'R005', studentId: 'S001', dateTime: '2024-02-19T16:00', wellbeing: 2, progress: 2, comments: 'Really behind on assignment. Need help.' },
  { id: 'R006', studentId: 'S002', dateTime: '2024-03-17T13:00', wellbeing: 4, progress: 5, comments: 'Great week. Finished project early.' },
  { id: 'R007', studentId: 'S002', dateTime: '2024-03-10T10:00', wellbeing: 4, progress: 4, comments: '' },
  { id: 'R008', studentId: 'S002', dateTime: '2024-03-03T11:30', wellbeing: 5, progress: 4, comments: 'Enjoying the module.' },
  { id: 'R009', studentId: 'S002', dateTime: '2024-02-25T14:00', wellbeing: 4, progress: 5, comments: '' },
  { id: 'R010', studentId: 'S002', dateTime: '2024-02-18T09:30', wellbeing: 3, progress: 4, comments: 'Bit stressed about exams.' },
  { id: 'R011', studentId: 'S002', dateTime: '2024-02-11T10:00', wellbeing: 4, progress: 4, comments: '' },
  { id: 'R012', studentId: 'S002', dateTime: '2024-02-04T15:00', wellbeing: 5, progress: 5, comments: 'Best week yet.' },
  { id: 'R013', studentId: 'S002', dateTime: '2024-01-28T11:00', wellbeing: 4, progress: 4, comments: '' },
  { id: 'R014', studentId: 'S004', dateTime: '2024-03-16T10:00', wellbeing: 3, progress: 3, comments: 'Average week.' },
  { id: 'R015', studentId: 'S004', dateTime: '2024-03-09T14:30', wellbeing: 4, progress: 4, comments: '' },
  { id: 'R016', studentId: 'S005', dateTime: '2024-03-15T16:00', wellbeing: 1, progress: 2, comments: 'Really struggling with everything. Need to talk to someone.' },
  { id: 'R017', studentId: 'S005', dateTime: '2024-03-08T10:00', wellbeing: 2, progress: 2, comments: 'Things are getting worse.' },
];

// --- Seed Meetings ---
export const initialMeetings: Meeting[] = [
  { id: 'M001', studentId: 'S001', supervisorId: 'PS001', dateTime: '2024-03-22T14:00', agenda: 'Wellbeing check-in and coursework support', status: 'Scheduled', bookedBy: 'PS001' },
  { id: 'M002', studentId: 'S001', supervisorId: 'PS001', dateTime: '2024-03-15T10:00', agenda: 'Wellbeing check-in', status: 'Completed', bookedBy: 'PS001' },
  { id: 'M003', studentId: 'S001', supervisorId: 'PS001', dateTime: '2024-02-20T11:00', agenda: 'Discuss assignment concerns', status: 'Completed', bookedBy: 'S001' },
  { id: 'M004', studentId: 'S002', supervisorId: 'PS001', dateTime: '2024-03-20T15:00', agenda: 'Mid-term progress review', status: 'Scheduled', bookedBy: 'S002' },
  { id: 'M005', studentId: 'S002', supervisorId: 'PS001', dateTime: '2024-02-28T10:00', agenda: 'General check-in', status: 'Completed', bookedBy: 'PS001' },
  { id: 'M006', studentId: 'S003', supervisorId: 'PS001', dateTime: '2024-03-25T11:00', agenda: 'Initial welcome meeting', status: 'Scheduled', bookedBy: 'PS001' },
  { id: 'M007', studentId: 'S004', supervisorId: 'PS002', dateTime: '2024-03-18T10:00', agenda: 'Progress review', status: 'Completed', bookedBy: 'PS002' },
  { id: 'M008', studentId: 'S004', supervisorId: 'PS002', dateTime: '2024-03-25T14:00', agenda: 'Follow-up', status: 'Scheduled', bookedBy: 'S004' },
  { id: 'M009', studentId: 'S005', supervisorId: 'PS002', dateTime: '2024-03-20T09:00', agenda: 'Urgent wellbeing check-in', status: 'Scheduled', bookedBy: 'PS002' },
  { id: 'M010', studentId: 'S005', supervisorId: 'PS002', dateTime: '2024-03-12T11:00', agenda: 'Discuss support options', status: 'Completed', bookedBy: 'PS002' },
];

// --- Helper functions ---

export function getWellbeingLabel(rating: number): string {
  const labels: Record<number, string> = { 1: 'Very Poor', 2: 'Poor', 3: 'Average', 4: 'Good', 5: 'Excellent' };
  return labels[rating] || 'Unknown';
}

export function getProgressLabel(rating: number): string {
  const labels: Record<number, string> = { 1: 'Very Behind', 2: 'Behind', 3: 'On Track', 4: 'Ahead', 5: 'Far Ahead' };
  return labels[rating] || 'Unknown';
}

export function getWellbeingColor(rating: number): string {
  if (rating <= 2) return 'text-red-600 bg-red-50 border-red-200';
  if (rating <= 3) return 'text-amber-600 bg-amber-50 border-amber-200';
  return 'text-green-600 bg-green-50 border-green-200';
}

export function getProgressColor(rating: number): string {
  if (rating <= 2) return 'text-red-600 bg-red-50 border-red-200';
  if (rating <= 3) return 'text-amber-600 bg-amber-50 border-amber-200';
  return 'text-green-600 bg-green-50 border-green-200';
}

export function getStatusColor(status: MeetingStatus): string {
  switch (status) {
    case 'Scheduled': return 'text-blue-700 bg-blue-50 border-blue-200';
    case 'Completed': return 'text-green-700 bg-green-50 border-green-200';
    case 'Cancelled': return 'text-gray-500 bg-gray-50 border-gray-200';
  }
}

export function formatDateTime(dt: string): string {
  const d = new Date(dt);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) +
    ' at ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

export function formatDateShort(dt: string): string {
  const d = new Date(dt);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function avg(nums: number[]): number {
  if (nums.length === 0) return 0;
  return Math.round((nums.reduce((a, b) => a + b, 0) / nums.length) * 10) / 10;
}
