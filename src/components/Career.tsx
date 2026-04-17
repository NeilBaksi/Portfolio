import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MBA Candidate</h4>
                <h5>Melbourne Business School · Kellogg Exchange</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              MBA candidate at Melbourne Business School, currently on exchange
              at Kellogg School of Management. Focused on product strategy,
              technology management, and business leadership.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Application Engineer</h4>
                <h5>Optus (Singtel Group)</h5>
              </div>
              <h3>2023-NOW</h3>
            </div>
            <p>
              Building and optimising customer-facing digital products for
              Australia's second-largest telecom. Working across React,
              TypeScript, and REST APIs to improve web performance and user
              experience at scale.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Limepay</h5>
              </div>
              <h3>2020-22</h3>
            </div>
            <p>
              Full-stack development on fintech payment products including
              embeddable checkout and real estate payment platforms. React,
              TypeScript, Redux, and payment API integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>Shimmer Bazaar</h5>
              </div>
              <h3>2020-22</h3>
            </div>
            <p>
              Co-founded an e-commerce marketplace. Managed Shopify platform,
              SEO, digital advertising (Google/Facebook Ads), and analytics
              to drive customer acquisition and growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Software Developer</h4>
                <h5>Goodscast (EnterOffer)</h5>
              </div>
              <h3>2019-20</h3>
            </div>
            <p>
              Led development of web applications for an e-commerce startup,
              driving technical architecture and full-stack implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
