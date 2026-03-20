interface ConsoleFrameProps {
  children: React.ReactNode;
}

export function ConsoleFrame({ children }: ConsoleFrameProps) {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg shadow-sm overflow-hidden h-full">
      {/* Browser-style header */}
      <div className="bg-gray-100 px-3 py-2 flex items-center gap-1.5 border-b border-gray-300">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <div className="ml-2 flex-1 bg-white border border-gray-300 rounded px-2 py-0.5">
          <span className="text-[9px] text-gray-500">localhost:3000</span>
        </div>
      </div>
      {/* Web content */}
      <div className="bg-white p-4 min-h-[400px]">
        {children}
      </div>
    </div>
  );
}