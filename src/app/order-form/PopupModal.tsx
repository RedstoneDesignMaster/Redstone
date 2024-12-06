import { FC, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when the modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-md max-w-md w-full"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing the modal
      >
        <h2 className="font-bold mb-4 text-center text-orange-500 text-base">
          Order Now
        </h2>
        <form>
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your contact number"
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-orange-400 text-black rounded-md hover:bg-indigo-700 text-base font-bold"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
