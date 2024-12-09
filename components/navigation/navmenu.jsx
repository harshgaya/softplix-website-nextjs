"use client";
import TextButton from "../buttons/text-button";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import Modal from "../modal/modal";
import { useActionState } from "react";
import { addData } from "@/lib/action";
export default function NavMenu() {
  const [message, formAction, pending] = useActionState(addData, null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevState) => {
      return !prevState;
    });
  }
  function handleModalOpen() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  useEffect(() => {
    if (!pending && !message) {
      setIsModalOpen(false);
    }
  }, [pending, message]);
  return (
    <>
      {isModalOpen && (
        <Modal title={"Get a Free Quote"} onClose={closeModal}>
          <form action={formAction}>
            <p>
              <label
                className="block text-sm text-slate-900 mb-1"
                htmlFor="title"
              >
                Name
              </label>
              <input
                className="w-full p-2 border rounded-md border-slate-300 mb-4"
                type="text"
                name="title"
                id="title"
                required
              />
            </p>

            <p>
              <label
                className="block text-sm text-slate-900 mb-1"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded-md border-slate-300 mb-4"
                name="description"
                id="description"
                required
              />
            </p>
            <p>
              <label
                className="block text-sm text-slate-900 mb-1"
                htmlFor="mobile"
              >
                Mobile Number
              </label>
              <input
                className="w-full p-2 border rounded-md border-slate-300 mb-4"
                type="number"
                name="mobile"
                id="mobile"
                maxLength="10"
                inputMode="numeric"
                required
              />
            </p>
            <p className="flex space-x-4 justify-end">
              <button onClick={closeModal}>Cancel</button>
              <button
                disabled={pending}
                className="bg-red-600 rounded-md pt-3 pl-5 pr-5 pb-3 text-white"
              >
                {pending ? "Submitting" : "Submit"}
              </button>
            </p>
            {message && <p>{message}</p>}
          </form>
        </Modal>
      )}
      <nav className="px-5 py-5 bg-slate-900 text-white flex justify-between items-center">
        <ul>
          <li className="text-3xl font-bold">SoftPlix</li>
        </ul>
        <div className="hidden md:flex space-x-8 list-none">
          <TextButton>What We Do</TextButton>
          <TextButton>Portfolio</TextButton>
          <TextButton>Why Us</TextButton>
        </div>
        <ul className="hidden md:block">
          <li>
            <button
              onClick={handleModalOpen}
              className="px-10 py-3 rounded-md bg-red-600 hover:bg-white hover:text-black transition-all"
            >
              Get Quote
            </button>
          </li>
        </ul>
        <button className="md:hidden px-4" onClick={handleClick}>
          <CiMenuFries />
        </button>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={handleClick}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <ul className="flex flex-col space-y-6 p-6">
          <TextButton>What We Do</TextButton>
          <TextButton>Portfolio</TextButton>
          <TextButton>Why Us</TextButton>

          <button
            onClick={handleModalOpen}
            className="px-10 py-3 rounded-md bg-red-600 hover:bg-white hover:text-black transition-all"
          >
            Get Quote
          </button>
        </ul>
      </div>
    </>
  );
}
