import React from "react";

const Leadform = () => {
  return (
    <form
      className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
      action={"https://formspree.io/f/xbjnygng"}
      method="POST"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="John Doe"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-600"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="name"
          name="Phone"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="1-322-873-9838"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="john.doe@example.com"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-600"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300  "
      >
        Submit
      </button>
    </form>
  );
};

export default Leadform;
