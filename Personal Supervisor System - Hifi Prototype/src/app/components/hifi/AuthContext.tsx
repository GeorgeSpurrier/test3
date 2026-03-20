/**
 * Authentication Context for the Personal Supervisor System.
 *
 * HCI Heuristic #1: Visibility of System Status (Nielsen)
 * — The auth context ensures the currently logged-in user's identity and role
 *   are always available throughout the app, enabling every screen to display
 *   who is logged in (satisfying NFR-05 from the spec).
 *
 * HCI Heuristic #3: User Control and Freedom (Nielsen)
 * — Users can log out from any screen, providing a clear "emergency exit".
 *
 * Tog Principle: Track State
 * — The system remembers the user's authentication state across navigation,
 *   so they don't need to re-authenticate when moving between screens.
 */

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { type User, type Report, type Meeting, users, initialReports, initialMeetings } from './data';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => User | null;
  logout: () => void;
  reports: Report[];
  meetings: Meeting[];
  addReport: (report: Report) => void;
  addMeeting: (meeting: Meeting) => void;
  updateMeetingStatus: (meetingId: string, status: Meeting['status']) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [reports, setReports] = useState<Report[]>(initialReports);
  const [meetings, setMeetings] = useState<Meeting[]>(initialMeetings);

  const login = useCallback((email: string, password: string): User | null => {
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (found) {
      setCurrentUser(found);
      return found;
    }
    return null;
  }, []);

  const logout = useCallback(() => setCurrentUser(null), []);

  const addReport = useCallback((report: Report) => {
    setReports(prev => [report, ...prev]);
  }, []);

  const addMeeting = useCallback((meeting: Meeting) => {
    setMeetings(prev => [meeting, ...prev]);
  }, []);

  const updateMeetingStatus = useCallback((meetingId: string, status: Meeting['status']) => {
    setMeetings(prev => prev.map(m => m.id === meetingId ? { ...m, status } : m));
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, reports, meetings, addReport, addMeeting, updateMeetingStatus }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
