import React from "react";

export const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg relative">
        {children}
        <button onClick={onClose} className="absolute  top-2 right-2 text-gray-500 hover:text-gray-700">
          X
        </button>
      </div>
    </div>
  );
};
