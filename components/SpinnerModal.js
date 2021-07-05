import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Spinner() {
  return (
    <svg
      className="animate-spin h-10 w-10 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export default function SpinnerModal({ shouldOpen }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(shouldOpen)
  }, [shouldOpen])

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={isOpen}
        onClose={() => {}}
      >
        <div className="container min-h-screen block text-center md:text-left p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into vertically centering the modal contents. */}
          <span
            className="inline-block align-middle h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block bg-transparent text-left overflow-hidden transform transition-all my-8 align-middle max-w-sm w-full p-6">
              <div className="mx-auto flex items-center justify-center h-12 w-12">
                <Spinner />
              </div>
              {/* hack to prevent "focus trap" error */}
              <button type="button" className="opacity-0 absolute bottom-0" />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
