import Layout from '../components/layout'
import Slider from '../components/slider'
import Company from '../components/company'

export default function Home() {
  return (
    <>
      <Slider />
      <section id="content">
          <div class="content-wrap pt-0">
            <div class="section border-top-0 mt-0">
              <Company />
            </div>

            <div class="heading-block center">
              <span>Why Choose Us?</span>
              <h2>Landlord Benefits</h2>
            </div>

            <div class="container clearfix">
              <div class="row col-mb-50">
                <div class="col-sm-12 col-lg-4">
                  <div class="feature-box fbox-border fbox-effect">
                    <div class="fbox-icon">
                      <a href="#"><i class="icon-money i-alt"></i></a>
                    </div>
                    <div class="fbox-content">
                      <h3>Bills</h3>
                      <p>We pay rent early as well as pay for all utilities, including landscaping & pest control services; If you currently have vendors for your property, we would require their contact info, so we can have direct communication with them to ensure a swift turnaround</p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-lg-4">
                  <div class="feature-box fbox-border fbox-effect">
                    <div class="fbox-icon">
                      <a href="#"><i class="icon-toolbox i-alt"></i></a>
                    </div>
                    <div class="fbox-content">
                      <h3>Maintenance</h3>
                      <p>Because of the high-standards of our clientele, our company will take care of all minor maintenance & repairs throughout the entire lease term</p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-lg-4">
                  <div class="feature-box fbox-border fbox-effect">
                    <div class="fbox-icon">
                      <a href="#"><i class="icon-hands-wash i-alt"></i></a>
                    </div>
                    <div class="fbox-content">
                      <h3>Cleaning</h3>
                      <p>Property will always be in pristine condition as it gets deep cleaned for every guest, which reduces wear and tear compared to renting to a long-term tenant
</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="vacation-section promo topmargin-lg promo-border bottommargin-lg promo-full py-5 px-2">
              <div class="container clearfix">
                <div class="row align-items-center">
                  <div class="col-12 col-lg">
                    <h3 style={{ color: "#FFFFFF" }}
                    >Own a <span>Vacation</span> property?<br/>
                    Find out the full potential of your investment!
                    </h3>
                    <span style={{ color: "#FFFFFF" }}>We offer full service vacation rental management to help you maximize your revenue while creating a wonderful space to create lifelong memories to all your guests and a hands-off experience to you. </span>
                  </div>
                  <div class="col-12 col-lg-auto mt-4 mt-lg-0">
                    <a href="contact" class="button button-large button-circle m-0">Submit Inquiry</a>
                  </div>
                </div>
              </div>
            </div>
          
            <div class="container clearfix">  
              <div class="row col-mb-50">   
                <div class="col-md-5 d-flex align-items-center" ><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    <img src="images/landing/why_us.jpg" class="chartjs-render-monitor" style={{borderRadius: 10 }} />
                </div>

                <div class="col-md-7">
                  <div class="fancy-title title-bottom-border">
                    <h3>What are your benefits as a Host?</h3>
                  </div>            

                  <ul class="iconlist iconlist-color mb-0">
                      <li><i class="icon-ok"></i> Passive income property with a complete hands off experience.</li>
                      <li><i class="icon-ok"></i> Increase the profitability of your property while giving you flexibility and security.</li>
                      <li><i class="icon-ok"></i> We offer $1 million in host protection insurance from Airbnb.</li>
                      <li><i class="icon-ok"></i> As Airbnb & Vacation Rental experts we optimize your listing and pricing, generating between 10% – 40% more in revenue and occupancy.</li>
                  </ul>
                </div>

                <div class="col-md-12">
                  <div class="fancy-title title-bottom-border">
                    <h3>Our Services</h3>
                  </div>            

                  <ul class="iconlist iconlist-color mb-0">
                      <li><i class="icon-ok"></i> 24/7 Communications</li>
                      <li><i class="icon-ok"></i> On call cleaning after every check-out</li>
                      <li><i class="icon-ok"></i> On call maintenance when needed</li>
                      <li><i class="icon-ok"></i> Direct communications with vendors such as landscaping, pool maintenance etc</li>
                  </ul>
                </div>
              </div>  

              <div class="line"></div>

              <h4 class="center mt-5">These are the websites we list our properties</h4>
              <ul class="clients-grid grid-2 grid-sm-3 grid-md-6 mb-0">
                <li class="grid-item"><a href="https://ahrn.com/" target="_blank"><img src="images/clients/ahrn-logo.jpeg" alt="Clients" /></a></li>
                <li class="grid-item"><a href="http://airbnb.com/" target="_blank"><img src="images/clients/airbnb-logo.jpeg" alt="Clients" /></a></li>
                <li class="grid-item"><a href="http://realtor.com/" target="_blank"><img src="images/clients/realtor-logo.jpeg" alt="Clients" /></a></li>
                <li class="grid-item"><a href="http://trulia.com/" target="_blank"><img src="images/clients/trulia-logo.jpeg" alt="Clients" /></a></li>
                <li class="grid-item"><a href="http://vrbo.com/" target="_blank"><img src="images/clients/vrbo-logo.png" alt="Clients" /></a></li>
                <li class="grid-item"><a href="http://zumper.com/" target="_blank"><img src="images/clients/zumper-logo.png" alt="Clients" /></a></li>
              </ul>

            </div>  
          </div>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}