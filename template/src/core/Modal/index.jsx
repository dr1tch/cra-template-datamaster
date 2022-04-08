import { X } from "lucide-react";
import React from "react";

const Modal = ({
  isOpen = false,
  children,
  closeModal,
  removeFooter = true,
  title,
  className,
  ...rest
}) => {
  const show = isOpen ? "block" : "hidden";
  return (
    <div
      className={`${show} text-sm fixed top-0 left-0 right-0 min-h-screen w-full inset-0 flex justify-center items-center px-8 py-6 align-middle transition min-w-full bg-gray-800 bg-opacity-50 duration-150 ease-out`}
      role="dialog"
      onClick={() => {
        // close modal when outside of modal is clicked
        closeModal();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeModal();
        }
      }}
      style={{
        zIndex: "999",
      }}
    >
      <div
        // className='bg-white rounded-sm min-w-screen-md  max-w-screen-lg max-h-full overflow-y-auto center-item shadow-3xl px-4 py-3 flex flex-col gap-3'
        className={`flex align-bottom bg-white rounded-md text-left max-h-full overflow-hidden  shadow-3xl transform transition-all sm:my-8 sm:align-middle lg:max-w-screen-md sm:w-auto px-4 py-3 flex-col gap-3 ${className}`}
        {...rest}
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-left font-poppins font-semibold text-lg">
              {title}
            </h1>
          </div>
          <button onClick={closeModal}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <hr className="w-full text-gray-400" />
        <div className="overflow-y-auto">{children}</div>
        {!removeFooter && (
          <>
            <hr className="w-full text-gray-400" />
            <div className="w-full flex justify-end items-center">
              <button
                className=" hover:bg-red-100 text-red-700 font-medium rounded px-3 py-2 w-min text-sm"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export function ModalTitle({ children }) {
  return (
    <>
      <h1 className="text-left font-poppins font-semibold text-lg">
        {children}
      </h1>
      <hr className="w-full text-gray-400" />
    </>
  );
}
export function ModalBody({ children }) {
  return <div className="w-full">{children}</div>;
}

export default Modal;
