import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

/**
 * SAAC Homepage
 * Premium construction company website
 * Design: Dark Navy + Gold accent, Playfair Display headlines, premium layout
 */
export default function Home() {
  const services = [
    {
      title: 'General Contracting',
      description: 'Comprehensive contracting solutions for projects of all scales.',
      icon: '/manus-storage/saac-service-icon-1_528ed8e6.png',
    },
    {
      title: 'Construction Works',
      description: 'Expert construction execution with quality and precision.',
      icon: '/manus-storage/saac-service-icon-2_5bbc88dc.png',
    },
    {
      title: 'Civil Works',
      description: 'Large-scale civil engineering and infrastructure projects.',
      icon: '/manus-storage/saac-service-icon-3_14ef473d.png',
    },
    {
      title: 'Finishing Works',
      description: 'Premium finishing and interior work with attention to detail.',
      icon: '/manus-storage/saac-service-icon-1_528ed8e6.png',
    },
    {
      title: 'Maintenance & Renovation',
      description: 'Professional maintenance and renovation services.',
      icon: '/manus-storage/saac-service-icon-2_5bbc88dc.png',
    },
    {
      title: 'Project Management',
      description: 'End-to-end project management and coordination.',
      icon: '/manus-storage/saac-service-icon-3_14ef473d.png',
    },
  ];

  const whySaac = [
    { title: 'High Quality', description: 'Uncompromising standards in every project.' },
    { title: 'Commitment', description: 'Dedicated to exceeding client expectations.' },
    { title: 'Practical Solutions', description: 'Innovative approaches to complex challenges.' },
    { title: 'Professional Team', description: 'Experienced experts in construction and contracting.' },
    { title: 'Safety & Quality', description: 'Rigorous safety protocols and quality assurance.' },
    { title: 'Long-Term Partnerships', description: 'Building lasting relationships with clients.' },
  ];

  const projects = [
    {
      title: 'Illustrative Project Example',
      category: 'Commercial Buildings',
      description: 'Professional construction photography used as a visual example, not an SAAC project record.',
      image: '/manus-storage/commercial-building_f1796f32.jpg',
    },
    {
      title: 'Illustrative Project Example',
      category: 'Civil & Infrastructure',
      description: 'Professional construction photography used as a visual example, not an SAAC project record.',
      image: '/manus-storage/infrastructure-site_f96d2237.jpg',
    },
    {
      title: 'Illustrative Project Example',
      category: 'Construction Works',
      description: 'Professional construction photography used as a visual example, not an SAAC project record.',
      image: '/manus-storage/construction-cranes_6fceec45.jpg',
    },
    {
      title: 'Illustrative Project Example',
      category: 'Finishing Works',
      description: 'Professional construction photography used as a visual example, not an SAAC project record.',
      image: '/manus-storage/finishing-renovation_e4c13292.jpg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/manus-storage/saac-hero-bg_05db40ae.png)',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(7, 16, 48, 0.22)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 container max-w-4xl text-center space-y-8 py-20">
          <div className="space-y-4">
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
              Building with Quality.
              <br />
              <span className="text-accent">Delivering with Confidence.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Professional contracting and construction solutions built on quality, reliability, safety, and commitment.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 transition-all duration-200 w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 transition-all duration-200 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About SAAC Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-primary mb-4">About SAAC</h2>
              <div className="h-1 w-20 bg-accent mb-8"></div>
            </div>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Saif Abdul Aziz Allouh Contracting (SAAC) is a Jordanian contracting company focused on delivering reliable, high-quality construction and contracting solutions. We are committed to providing professional services that meet our clients' requirements while maintaining high standards of quality, safety, efficiency, and timely project delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container">
          <div className="space-y-12">
            <div>
              <h2 className="text-primary mb-4">Our Services</h2>
              <div className="h-1 w-20 bg-accent mb-8"></div>
              <p className="text-foreground/70 text-lg max-w-2xl">
                Comprehensive construction and contracting solutions tailored to your project needs.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] border-t-4 border-accent"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-16 w-16 mb-6 object-contain"
                  />
                  <h3 className="text-primary text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why SAAC Section */}
      <section id="why-saac" className="py-20 bg-white">
        <div className="container">
          <div className="space-y-12">
            <div>
              <h2 className="text-primary mb-4">Why Choose SAAC</h2>
              <div className="h-1 w-20 bg-accent mb-8"></div>
              <p className="text-foreground/70 text-lg max-w-2xl">
                We deliver excellence through expertise, commitment, and professional integrity.
              </p>
            </div>

            {/* Why SAAC Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whySaac.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                        <ChevronRight className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold text-lg">{item.title}</h3>
                      <p className="text-foreground/70 text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="py-20 bg-secondary">
        <div className="container">
          <div className="space-y-12">
            <div>
              <h2 className="text-primary mb-4">Our Projects</h2>
              <div className="h-1 w-20 bg-accent mb-8"></div>
              <p className="text-foreground/70 text-lg max-w-2xl">
                Professional visual examples of construction expertise. These photographs are illustrative references only and are not presented as SAAC project documentation.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Illustrative Construction Image */}
                  <div className="h-48 relative overflow-hidden bg-secondary">
                    <img
                      src={project.image}
                      alt={`${project.category} illustrative construction example`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 bg-primary/85 text-white px-3 py-1 text-[10px] uppercase tracking-wider">
                      Illustrative visual example
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-3">
                    <span className="inline-block text-accent text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-primary text-xl font-semibold">{project.title}</h3>
                    <p className="text-foreground/70 text-sm">{project.description}</p>
                    <Link href="/projects" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm mt-4">
                      View Project <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary">
        <div className="container max-w-3xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-white">Have a Project in Mind?</h2>
            <p className="text-white/80 text-lg">
              Let's discuss your project requirements and explore how SAAC can support your next construction or contracting project.
            </p>
          </div>

          <Link href="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 transition-all duration-200"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
