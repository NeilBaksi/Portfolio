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
              at Kellogg School of Management, Northwestern University.
              Completing the program in 2 years part-time alongside continuous
              full-time work at Optus. Focused on product strategy, AI-Native
              Marketing, pricing, and launching new products.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Product Engineer</h4>
                <h5>Optus (Singtel Group) · Australia's #2 telecom</h5>
              </div>
              <h3>2023-NOW</h3>
            </div>
            <p>
              Drove the highest single-day revenue day in Optus e-commerce
              history by leading the Apple iPhone launch. Own Optus's Salesforce
              platform footprint (SFCC + SFMC) plus Adobe Experience Manager and
              Optimizely. Act as the early-stage feasibility gate for marketing,
              sales ops, growth, and analytics partners across 6 e-commerce
              squads.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Engineer</h4>
                <h5>Limepay</h5>
              </div>
              <h3>2020-22</h3>
            </div>
            <p>
              Grew MarketNow to 40% of Limepay's annual revenue by leading
              end-to-end build of a B2B joint venture with Domain (Australia's
              largest property listings). Built core features of STACK,
              Limepay's embeddable BNPL product live at 150+ merchants in AU/NZ
              across card-present and card-not-present flows.
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
              Pioneered Australia's first South Asian beauty and fashion
              e-commerce marketplace on Shopify. Owned product, pricing, vendor
              onboarding, marketing analytics, and full P&L.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Product Engineer</h4>
                <h5>Goodscast (EnterOffer)</h5>
              </div>
              <h3>2019-20</h3>
            </div>
            <p>
              Led front-end architecture and end-to-end customer journey design
              at EnterOffer. Built merchant analytics dashboards that drove
              product-quality and revenue insights for the e-commerce operations
              team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
