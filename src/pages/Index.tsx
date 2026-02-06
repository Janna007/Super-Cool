import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />

        {/* Terms & Conditions Section */}
        <section id="terms" className="bg-card section-padding">
          <div className="container-narrow">
            <div className="mb-10">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Legal Info
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Terms & Conditions
              </h2>
              <p className="text-sm text-muted-foreground italic">Last Updated: February 2, 2026</p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by these Terms and Conditions.
                  If you do not agree to these terms, please do not use our website or services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Acceptable Use</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">You agree to use this website only for lawful purposes. You must not:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground">Use the website in any way that violates applicable laws or regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground">Attempt to gain unauthorized access to our systems or networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground">Transmit any harmful code, viruses, or malicious software</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground">Engage in any activity that disrupts or interferes with our services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground">Use automated systems to access the website without our permission</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property Rights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, videos, and software,
                  is the property of Super Cool and is protected by Indian and international copyright,
                  trademark, and intellectual property laws. You may not reproduce, distribute, modify, or create
                  derivative works without our express written permission.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by Indian law, Super Cool shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages arising from your use of this
                  website. We provide this website on an "as is" basis without warranties of any kind, either
                  express or implied.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Modifications to Terms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                  immediately upon posting on this website. Your continued use of the website after any changes
                  constitutes acceptance of the new terms. We encourage you to review these terms periodically.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions are governed by the laws of India. Any disputes arising from these
                  terms shall be subject to the exclusive jurisdiction of the courts in India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section id="privacy" className="bg-gradient-cool section-padding">
          <div className="container-narrow">
            <div className="mb-10">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Data Protection
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Privacy Policy
              </h2>
              <p className="text-sm text-muted-foreground italic">Last Updated: February 2, 2026</p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Introduction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Super Cool, we are committed to protecting your privacy and ensuring the security
                  of your personal information. This Privacy Policy explains how we collect, use, and safeguard
                  your data in compliance with Indian data protection laws and Meta platform requirements.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">We collect the following personal information when you interact with our website:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Name:</strong> To personalize your experience and communicate with you effectively</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Email Address:</strong> For sending updates, notifications, and responding to inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Phone Number:</strong> For WhatsApp communication and customer support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">Your personal information is used to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground">Provide and improve our services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground">Communicate with you about our products and services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground">Send important updates and notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground">Respond to your inquiries and provide customer support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground">Analyze website usage to enhance user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground">Comply with legal obligations and protect our rights</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">WhatsApp Communication Consent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By providing your phone number, you expressly consent to receive communications from
                  Super Cool via WhatsApp Business. This includes service updates, promotional messages,
                  customer support responses, and transactional notifications. You may opt-out of promotional
                  messages at any time by replying "STOP" or contacting us directly.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Cookie Usage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze
                  website traffic, and deliver personalized content. Cookies help us understand how you interact
                  with our website and improve our services. You can control cookie settings through your browser,
                  but disabling cookies may affect website functionality.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Data Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your personal information from
                  unauthorized access, disclosure, alteration, or destruction. This includes encryption, secure
                  servers, access controls, and regular security audits. However, no method of transmission over
                  the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Data Sharing and Protection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, rent, or trade your personal information to third parties. We may share your
                  data only with trusted service providers who assist us in operating our website and delivering
                  services, such as Meta platforms for communication and analytics. All third parties are
                  contractually obligated to protect your data and use it only for specified purposes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Your Data Rights</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">Under Indian data protection laws, you have the right to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Access:</strong> Request a copy of the personal information we hold about you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Restriction:</strong> Request limitation on how we process your data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Objection:</strong> Object to our processing of your data for marketing purposes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">✓</span>
                    <span className="text-muted-foreground"><strong className="text-foreground">Portability:</strong> Request your data in a structured, machine-readable format</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  To exercise any of these rights, please contact us using the information provided on this website.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may integrate with third-party services including Meta platforms (Facebook, WhatsApp),
                  analytics tools, and payment processors. These services have their own privacy policies, and we
                  encourage you to review them. We are not responsible for the privacy practices of third-party services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect
                  personal information from children. If we become aware that we have collected data from a child
                  without parental consent, we will take steps to delete that information promptly.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Changes to Privacy Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                  requirements. The updated policy will be posted on this page with a new "Last Updated" date.
                  We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy or our data practices,
                  please contact us through the contact information provided on this website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
