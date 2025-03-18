import React, { useRef } from 'react';

function ContactUs() {
  // Refs for form fields
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const commentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Accessing form values using refs
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const comment = commentRef.current.value;

    // Handle form submission logic here (e.g., send data to server or API)
    console.log({ name, email, phone, comment });
  };

  return (
    <div className="my-16 px-6 lg:px-24 w-full overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-xl">
            <div>
              <label htmlFor="name" className="block text font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                ref={phoneRef}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="comment" className="block text font-medium text-gray-700">Comment</label>
              <textarea
                id="comment"
                ref={commentRef}
                rows="4"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right side map */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg rounded-lg shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=your-google-map-embed-link" 
              width="100%"
              height="400"
              className="rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
