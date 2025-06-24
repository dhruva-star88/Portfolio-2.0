// src/components/Contact.jsx
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const formRef = useRef(null);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!", { position: "top-right" });
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.", { position: "top-right" });
      }
    } catch {
      toast.error("Something went wrong. Please try again.", { position: "top-right" });
    }
  };

  return (
    <section id="contact" className="py-16 px-4">
      <ToastContainer />
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
          Get in Touch
        </h1>
        <div className="flex flex-col md:flex-row items-stretch gap-10 bg-transparent rounded-3xl">
          {/* Left: Contact Details */}
          <div className="flex-1 flex flex-col justify-center md:items-start items-center mb-10 md:mb-0 md:pr-12 md:justify-start">
            <div className="w-full md:mt-[72px]"> {/* Adjust this value to match the vertical position of "Your Name" in the form */}
              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text mb-6 text-left w-full">
                Let's talk
              </h2>
              <p className="text-gray-200 text-lg mb-8 text-left w-full">
                I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
              </p>
              <div className="space-y-6 text-lg w-full">
                <div className="flex items-center gap-4">
                  <MdEmail size={28} className="text-white" />
                  <span className="text-white">workdhruvateja@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MdPhone size={28} className="text-white" />
                  <span className="text-white">91+ 8867291499</span>
                </div>
                <div className="flex items-center gap-4">
                  <MdLocationOn size={28} className="text-white" />
                  <span className="text-white">Bangalore</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 rounded-xl p-8 flex flex-col justify-center"
          >
            <input
              type="hidden"
              name="access_key"
              value={web3FormsKey}
            />
            <label
              className="text-white mb-2 text-lg font-medium text-left w-full"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="mb-4 px-6 py-4 rounded-lg bg-[#232346] text-white outline-none border-none placeholder-gray-400 w-full text-base md:text-lg"
            />

            <label
              className="text-white mb-2 text-lg font-medium text-left w-full"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="mb-4 px-6 py-4 rounded-lg bg-[#232346] text-white outline-none border-none placeholder-gray-400 w-full text-base md:text-lg"
            />

            <label
              className="text-white mb-2 text-lg font-medium text-left w-full"
              htmlFor="message"
            >
              Write your message here
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message"
              rows={6}
              className="mb-6 px-6 py-4 rounded-lg bg-[#232346] text-white outline-none border-none placeholder-gray-400 resize-none w-full text-base md:text-lg"
            ></textarea>

            <button
              type="submit"
              className="mt-2 px-8 py-3 rounded-full font-bold text-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:opacity-90 transition"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
