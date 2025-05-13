import React from "react";
import Layout from "./../components/Layout/Layout";


const Contact = () => {
  return (
    <Layout title={"Contact Us - Plexora"}>
      <div className="row justify-content-center align-items-center my-5 py-5" style={{ margin: 0 }}>
        {/* Left Side Imag* */}
        <div className="col-md-6 p-4">
          <img
            src="/images/contact.jpeg"
            alt="Contact Plexora"
            className="img-fluid rounded shadow"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right Side Contnt */}
        <div className="col-md-5 p-4">
          <h2 className="text-primary fw-bold mb-4 text-center">Contact Plexora</h2>
          <p className="text-muted" style={{ lineHeight: "1.8rem" }}>
            Have a question or need help with your order? Our team is here 24x7 to assist you. 
            Feel free to reach out via phone or email — we're happy to help!
          </p>

          <div className="mt-4 d-flex align-items-center">
           
            <span><strong>Email:</strong> support@plexora.com</span>
          </div>

          <div className="mt-3 d-flex align-items-center">
            <span><strong>Phone:</strong> +91-1234567890</span>
          </div>

          <div className="mt-3 d-flex align-items-center">
           
            <span><strong>Toll-Free:</strong> 1800-000-000</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
