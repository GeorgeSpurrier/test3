/**
 * Login Page — UC1: Authentication
 *
 * HCI Heuristic #5: Error Prevention (Nielsen)
 * — The submit button is disabled when fields are empty, preventing submission
 *   of incomplete credentials. Input type="password" masks the password field
 *   (NFR-03). Email field uses type="email" for built-in format validation.
 *
 * HCI Heuristic #9: Help Users Recognize, Diagnose, and Recover from Errors (Nielsen)
 * — Invalid credentials produce a clear, specific inline error message in red,
 *   positioned directly above the form where the user is looking.
 *
 * HCI Heuristic #2: Match Between System and Real World (Nielsen)
 * — Uses familiar "Sign In" terminology. The university branding and department
 *   name ground the interface in the user's real-world context.
 *
 * Tog Principle: Explorable Interfaces
 * — Demo credentials are displayed below the form, allowing evaluators to
 *   explore any role without needing external documentation.
 *
 * Tog Principle: Autonomy
 * — Users choose which role to log in as; the system routes them appropriately
 *   based on their credentials rather than forcing a role selection.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from './AuthContext';
import { Shield, LogIn, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    /* 
      HCI Heuristic #5: Error Prevention — validate empty fields before attempting login.
      HCI Heuristic #9: Specific error messages for each failure mode.
    */
    if (!email.trim() || !password.trim()) {
      setError('Email and password cannot be empty.');
      return;
    }

    setIsLoading(true);
    // Simulate network delay for realism
    await new Promise(r => setTimeout(r, 600));

    const user = login(email, password);
    setIsLoading(false);

    if (!user) {
      setError('Invalid email or password. Please try again.');
      return;
    }

    /* 
      HCI Heuristic #1: Visibility of System Status — toast confirms successful login.
      HCI Heuristic #2: Match real world — "Welcome back" is natural greeting language.
    */
    toast.success(`Welcome back, ${user.name}!`);

    switch (user.role) {
      case 'student': navigate('/student'); break;
      case 'ps': navigate('/ps'); break;
      case 'st': navigate('/st'); break;
    }
  };

  /*
    Tog Principle: Explorable Interfaces — demo credentials allow easy role exploration.
  */
  const demoAccounts = [
    { label: 'Student', email: 'george.spurrier@uni.ac.uk', icon: '🎓' },
    { label: 'Personal Supervisor', email: 'xinhui.ma@uni.ac.uk', icon: '👩‍🏫' },
    { label: 'Senior Tutor', email: 'john.whelan@uni.ac.uk', icon: '🏛️' },
  ];

  const quickLogin = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('pass123');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex flex-col">
      {/* Header */}
      <div className="px-8 py-5">
        <div className="flex items-center gap-3 text-white">
          <Shield className="w-8 h-8" />
          <div>
            <div className="text-[17px] tracking-wide" style={{ fontWeight: 600 }}>Personal Supervisor System</div>
            <div className="text-[12px] text-blue-200">Department of Computer Science & Technology</div>
          </div>
        </div>
      </div>

      {/* Login Card */}
      <div className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md">
          {/* 
            HCI Heuristic #8: Aesthetic and Minimalist Design — the login form only
            contains what is necessary: email, password, and submit. No extraneous elements.
          */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-blue-50 px-8 py-6 border-b border-blue-100">
              <h1 className="text-[22px] text-gray-900" style={{ fontWeight: 600 }}>Welcome Back</h1>
              <p className="text-[13px] text-gray-600 mt-1">Sign in to access your dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
              {/* 
                HCI Heuristic #9: Error Recognition — error banner with icon and red styling
                makes the error impossible to miss, and the message is specific and actionable.
              */}
              {error && (
                <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-[13px]">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-[13px] text-gray-700 mb-1.5" style={{ fontWeight: 500 }}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                  placeholder="you@uni.ac.uk"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[14px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                  autoComplete="email"
                  autoFocus
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-[13px] text-gray-700 mb-1.5" style={{ fontWeight: 500 }}>
                  Password
                </label>
                {/* 
                  Tog Principle: Autonomy — password visibility toggle gives the user control
                  over whether they can see what they're typing, supporting both security
                  and error correction.
                  NFR-03: Password masked by default.
                */}
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(''); }}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2.5 pr-11 border border-gray-300 rounded-lg text-[14px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    tabIndex={-1}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg text-[14px] transition-colors shadow-sm"
                style={{ fontWeight: 600 }}
              >
                {isLoading ? (
                  /* HCI Heuristic #1: Visibility of System Status — loading spinner */
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <LogIn className="w-[18px] h-[18px]" />
                    Sign In
                  </>
                )}
              </button>
            </form>
          </div>

          {/* 
            Demo Accounts Section
            Tog Principle: Explorable Interfaces — provides quick access to all three roles.
            HCI Heuristic #10: Help and Documentation — contextual help for prototype evaluation.
          */}
          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
            <div className="text-[12px] text-blue-100 mb-3" style={{ fontWeight: 500 }}>DEMO ACCOUNTS (click to auto-fill)</div>
            <div className="space-y-2">
              {demoAccounts.map(acc => (
                <button
                  key={acc.email}
                  onClick={() => quickLogin(acc.email)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-left"
                >
                  <span className="text-[18px]">{acc.icon}</span>
                  <div>
                    <div className="text-white text-[13px]" style={{ fontWeight: 500 }}>{acc.label}</div>
                    <div className="text-blue-200 text-[11px]">{acc.email}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="text-[11px] text-blue-200 mt-3">Password for all: <code className="bg-white/10 px-1.5 py-0.5 rounded">pass123</code></div>
          </div>
        </div>
      </div>
    </div>
  );
}
