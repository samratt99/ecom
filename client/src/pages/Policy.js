import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - Plexora"}>
      <div className="row justify-content-center align-items-center my-5 py-5" style={{ margin: "0" }}>
        {/* Left Image Section */}
        <div className="col-md-6 p-4">
          <img
            src="/images/contactus.jpeg"
            alt="Privacy Policy"
            className="img-fluid rounded shadow"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right Text Section */}
        <div className="col-md-5 p-4">
          <h2 className="text-primary mb-4 fw-bold">Privacy Policy</h2>
          <p className="text-muted">
            At <strong>Plexora</strong>, your privacy is our top priority. Here’s what you need to know:
          </p>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item"> Your personal data is protected and encrypted.</li>
            <li className="list-group-item"> We only collect data necessary for order fulfillment.</li>
            <li className="list-group-item"> We do not share or sell your information.</li>
            <li className="list-group-item"> You have full access to request or delete your data.</li>
            <li className="list-group-item"> Our systems are regularly reviewed for security.</li>
          </ul>
          <p className="text-secondary small">
            This privacy policy is updated periodically to reflect changes in regulations and customer needs.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
