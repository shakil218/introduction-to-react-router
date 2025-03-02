const Contact = () => {
  return (
    <div>
      <h1 className=" text-5xl font-semibold text-center text-green-300 my-12">
        Get in Touch with Us 🚀
      </h1>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <div className="text-center lg:text-left text-sm leading-7">
            <h1 className="text-5xl font-medium mb-5">Contact Us</h1>
            <div>
              <p>
                Have questions or need assistance? We’d love to hear from you!
                Whether you’re looking for support, collaboration, or just want
                to say hello, feel free to reach out.
              </p>
              <ul>
                <li>📧 Email: [your@email.com]</li>
                <li>📞 Phone: [Your Phone Number]</li>
                <li> 🌐 Website: [your Website.com]</li>
                <li>📍 Address: [Your Office Location]</li>
              </ul>
              <p>
                Or simply fill out our contact form, and we’ll get back to you
                as soon as possible! 🚀
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset w-xs text-gray-500 bg-base-200 border border-base-300 p-4 rounded-box my-5">
                <legend className="fieldset-legend text-left">
                  Contact Us
                </legend>

                <label className="fieldset-label">Title</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Write your comments..."
                  required
                />

                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <label className="fieldset-label">Phone</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Phone"
                  required
                />

                <label className="fieldset-label">Author</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                />

                <button className="btn btn-neutral mt-4">Send</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
