const About = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl font-bold text-center text-green-300 my-10">
        This is our About Section.
      </h1>
      <div className=" text-md leading-7 mx-10">
        <div>
          <h3 className="text-3xl font-medium my-3">About Us</h3>
          <p>
            Welcome to our Awesome website <q>Introduction to React Router</q>, your
            go-to destination for [describe your main focus, e.g., learning new
            skills, sharing creative ideas, networking with professionals]. We
            are passionate about [mention key values like innovation, education,
            collaboration, or entertainment] and strive to create a space where
            everyone can [benefit from your platform, such as learning, growing,
            or connecting].
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-medium my-3">Our Mission</h3>
          <p>
            At [Your Website Name], our mission is simple: [clearly state what
            you aim to achieve, e.g., <q>to provide valuable knowledge and tools
            to empower individuals worldwide</q> or <q>to connect people with similar
            interests and help them grow together</q>].
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-medium my-3">What We Offer</h3>
          <ul className="list-disc ml-5">
            <li>[Feature 1] – Explain how this feature benefits users.</li>
            <li>[Feature 2] – Describe another key offering.</li>
            <li>[Feature 3] – Highlight what makes your platform unique.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-medium my-3">Why Choose Us?</h3>
          <p>
            We believe in [core values like quality, accessibility, innovation]
            and are committed to [ensuring the best experience, offering expert
            insights, or providing a supportive community]. Whether you<sup>,</sup>re here
            to [what users can do—learn, connect, explore, etc.], we’re here to
            support you every step of the way. Join us today and be part of
            something amazing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
