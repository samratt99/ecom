import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Plexora"}>
      <div className="row justify-content-center align-items-center my-5 py-5" style={{ margin: 0 }}>
        {/* Left Side Image */}
        <div className="col-md-6 p-4">
          <img
            src="/images/about.jpeg"
            alt="About Plexora"
            className="img-fluid rounded shadow"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right Side Text */}
        <div className="col-md-5 p-4">
          <h2 className="text-primary mb-4 fw-bold">About Plexora</h2>
          <p className="text-muted" style={{ lineHeight: "1.8rem" }}>
            Welcome to <strong>Plexora</strong> – your trusted destination for seamless and secure online shopping.
            We are committed to offering the highest quality products, outstanding customer support, and a personalized
            eCommerce experience tailored for modern consumers. 
          </p>
          <p className="text-muted" style={{ lineHeight: "1.8rem" }}>
            Our platform is built with care, ensuring fast delivery, transparent policies, and a user-friendly interface.
            Whether you're here for fashion, gadgets, or essentials, <strong>Plexora</strong> brings convenience right to your doorstep.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
