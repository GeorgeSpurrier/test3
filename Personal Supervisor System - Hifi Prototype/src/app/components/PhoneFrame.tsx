interface PhoneFrameProps {
  children: React.ReactNode;
  highlighted?: boolean;
}

export function PhoneFrame({ children, highlighted = false }: PhoneFrameProps) {
  return (
    <div 
      className={`relative w-[90px] h-[180px] bg-white rounded-[12px] border-2 ${
        highlighted ? 'border-blue-400' : 'border-gray-300'
      } overflow-hidden`}
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
    >
      {children}
    </div>
  );
}
