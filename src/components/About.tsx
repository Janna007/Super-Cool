import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Experienced & Certified Technicians",
  "Prompt & Reliable Service",
  "Competitive Pricing",
  "Customer Satisfaction Guaranteed",
  "All Major Brands Serviced",
  "Emergency Support Available",
];

const About = () => {
  return (
    <section id="about" className="bg-gradient-cool section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Your Trusted AC Partner
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Super Cool Air Conditioning is committed to delivering quality air conditioning services with a focus on customer satisfaction, timely support, and professional workmanship.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With years of experience serving residential and commercial customers, we understand the importance of a reliable cooling system. Our team of certified technicians brings expertise and dedication to every job.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "5000+", label: "Happy Customers" },
              { value: "24/7", label: "Support Available" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-card rounded-xl border border-border text-center shadow-card"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
