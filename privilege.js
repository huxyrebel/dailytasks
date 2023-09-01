import React from 'react';
import "../components/privilege.css";

function Privilege() {
  return (
    <section className="py-5 py-md-5 text-center">
      <div className="privilege-container py-0 py-md-5">
        <div className="row">
          <div className="col-md-12">
            <h6 className="border-bottom g-book d-inline-block px-3 pb-2 mx-auto mb-4 text-white">PRIVILEGE CLUB</h6>
            <h2 className="heading-fonts ft-34 mb-5 text-white">Enjoy VIP Status</h2>
            <p className="px-0 px-md-5 col-md-12 col-xl-6 col-12 mx-auto text-white mb-5 g-light">Welcome to the
              Privilege Club. We at Pearl-Continental Hotels know that as a Privilege Club Member you deserve
              the best and that is why we have created special offers for you to enjoy. It is our way of thanking
              you. Being a Privilege Club member we give you the complete hotel experience with a range of offers.
            </p>
            <div className="button-hov">
              <a className="text-uppercase font-weight-bold border-top border-bottom py-3 border-color text-center mx-auto d-block btn-1"
                href="https://www.pchotels.com/en/privilege-club.html" style={{ color: "#f3c87e", borderColor: "#f3c87e" }}>
                <div>join</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Privilege;
