import { Wrench, Settings, FileCheck, Building2 } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Air Conditioner Installation",
    description:
      "Professional installation for all major AC brands. We ensure optimal placement and configuration for maximum efficiency and comfort.",
  },
  {
    icon: Wrench,
    title: "AC Repair & Troubleshooting",
    description:
      "Quick diagnosis and reliable repair services. Our experienced technicians fix all types of AC issues with guaranteed workmanship.",
  },
  {
    icon: FileCheck,
    title: "Annual Maintenance Contract (AMC)",
    description:
      "Hassle-free yearly maintenance plans that keep your AC running smoothly. Regular servicing extends equipment life and prevents breakdowns.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial Solutions",
    description:
      "Customized AC solutions for homes and businesses of all sizes. From single units to complete HVAC systems, we handle it all.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-card section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Complete AC Solutions
          </h2>
          <p className="text-muted-foreground">
            From installation to maintenance, we provide comprehensive air conditioning services to keep you cool all year round.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
