import {
  MainMenuScreen,
  LoginScreen,
  StudentMenuScreen,
  SubmitReportScreen,
  ViewReportsScreen,
  BookMeetingStudentScreen,
  ViewMeetingsStudentScreen,
  PSMenuScreen,
  ViewAllStudentsScreen,
  ViewStudentDetailsScreen,
  BookMeetingPSScreen,
  UpdateMeetingStatusScreen,
  STMenuScreen,
  AllStudentsOverviewScreen,
  PSInteractionSummaryScreen,
} from './screens';

export const wireframeScreens = [
  {
    id: 'UC1-01',
    title: 'Main Menu',
    description: 'Initial screen with login option',
    content: <MainMenuScreen />
  },
  {
    id: 'UC1-02',
    title: 'Login',
    description: 'User authentication flow',
    content: <LoginScreen />
  },
  {
    id: 'UC2-01',
    title: 'Student Menu',
    description: 'Student role menu options',
    content: <StudentMenuScreen />
  },
  {
    id: 'UC2-02',
    title: 'Submit Self-Report',
    description: 'Wellbeing & progress input form',
    content: <SubmitReportScreen />
  },
  {
    id: 'UC3-01',
    title: 'View My Reports',
    description: 'Student report history with averages',
    content: <ViewReportsScreen />
  },
  {
    id: 'UC4-01',
    title: 'Book Meeting (Student)',
    description: 'Student initiates meeting with PS',
    content: <BookMeetingStudentScreen />
  },
  {
    id: 'UC5-01',
    title: 'View My Meetings',
    description: 'List of student meetings',
    content: <ViewMeetingsStudentScreen />
  },
  {
    id: 'UC6-01',
    title: 'Personal Supervisor Menu',
    description: 'PS role menu options',
    content: <PSMenuScreen />
  },
  {
    id: 'UC6-02',
    title: 'View All My Students',
    description: 'PS dashboard with low-wellbeing alerts',
    content: <ViewAllStudentsScreen />
  },
  {
    id: 'UC7-01',
    title: 'View Student Details',
    description: 'Individual student report history',
    content: <ViewStudentDetailsScreen />
  },
  {
    id: 'UC8-01',
    title: 'Book Meeting (PS)',
    description: 'PS initiates meeting with student',
    content: <BookMeetingPSScreen />
  },
  {
    id: 'UC10-01',
    title: 'Update Meeting Status',
    description: 'Change meeting to Completed/Cancelled',
    content: <UpdateMeetingStatusScreen />
  },
  {
    id: 'UC11-01',
    title: 'Senior Tutor Menu',
    description: 'ST role menu options',
    content: <STMenuScreen />
  },
  {
    id: 'UC11-02',
    title: 'All Students Overview',
    description: 'Department-wide student status',
    content: <AllStudentsOverviewScreen />
  },
  {
    id: 'UC13-01',
    title: 'PS Interaction Summary',
    description: 'PS engagement with at-risk students',
    content: <PSInteractionSummaryScreen />
  },
];
