import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

/**
 * SAAC Services Page
 * Detailed service offerings with descriptions and CTAs
 * Design: Consistent with homepage - Dark Navy + Gold accent
 */
export default function Services() {
  const services = [
    {
      title: 'General Contracting',
      icon: '/manus-storage/saac-service-icon-1_528ed8e6.png',
      description:
        'Comprehensive contracting solutions for projects of all scales. From initial planning to final execution, we provide end-to-end general contracting services that ensure quality, efficiency, and client satisfaction.',
      features: [
        'Project planning and coordination',
        'Resource management',
        'Quality assurance',
        'Timeline optimization',
        'Cost efficiency',
      ],
    },
    {
      title: 'Construction Works',
      icon: '/manus-storage/saac-service-icon-2_5bbc88dc.png',
      description:
        'Expert construction execution with precision and quality. Our team brings technical expertise and attention to detail to every construction project, ensuring structures are built to the highest standards.',
      features: [
        'Structural construction',
        'Building systems installation',
        'Safety compliance',
        'Quality control',
        'Professional execution',
      ],
    },
    {
      title: 'Civil Works',
      icon: '/manus-storage/saac-service-icon-3_14ef473d.png',
      description:
        'Large-scale civil engineering and infrastructure projects. We specialize in complex civil works including roads, bridges, utilities, and other infrastructure that forms the backbone of development.',
      features: [
        'Infrastructure development',
        'Road and bridge construction',
        'Utility systems',
        'Site preparation',
        'Engineering expertise',
      ],
    },
    {
      title: 'Finishing Works',
      icon: '/manus-storage/saac-service-icon-1_528ed8e6.png',
      description:
        'Premium finishing and interior work with meticulous attention to detail. We transform spaces with professional finishing that combines aesthetics with functionality.',
      features: [
        'Interior finishing',
        'Flooring and tiling',
        'Painting and coatings',
        'Carpentry and fixtures',
        'Premium finishes',
      ],
    },
    {
      title: 'Maintenance & Renovation',
      icon: '/manus-storage/saac-service-icon-2_5bbc88dc.png',
      description:
        'Professional maintenance and renovation services to extend the life and enhance the value of existing structures. We provide comprehensive solutions for upkeep and modernization.',
      features: [
        'Preventive maintenance',
        'Repair services',
        'Renovation projects',
        'Modernization',
        'Facility management',
      ],
    },
    {
      title: 'Project Management',
      icon: '/manus-storage/saac-service-icon-3_14ef473d.png',
      description:
        'End-to-end project management and coordination. We oversee all aspects of project delivery, ensuring timely completion, budget adherence, and quality standards.',
      features: [
        'Project planning',
        'Budget management',
        'Schedule coordination',
        'Stakeholder communication',
        'Risk management',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/80">
              Comprehensive construction and contracting solutions tailored to your project needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-cols-2 md:auto-cols-fr' : ''
                }`}
              >
                {/* Alternating layout */}
                {index % 2 === 0 ? (
                  <>
                    {/* Image/Icon - Left */}
                    <div className="flex justify-center">
                      <div className="bg-secondary rounded-lg p-12 w-full max-w-sm h-64 flex items-center justify-center">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="h-32 w-32 object-contain"
                        />
                      </div>
                    </div>
                    {/* Content - Right */}
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-primary text-4xl font-bold mb-4">{service.title}</h2>
                        <div className="h-1 w-16 bg-accent mb-6"></div>
                      </div>
                      <p className="text-foreground/80 text-lg leading-relaxed">{service.description}</p>
                      <div className="space-y-3">
                        <h4 className="text-primary font-semibold">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-foreground/70">
                              <span className="h-2 w-2 bg-accent rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href="/contact">
                        <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold mt-6">
                          Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content - Left */}
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-primary text-4xl font-bold mb-4">{service.title}</h2>
                        <div className="h-1 w-16 bg-accent mb-6"></div>
                      </div>
                      <p className="text-foreground/80 text-lg leading-relaxed">{service.description}</p>
                      <div className="space-y-3">
                        <h4 className="text-primary font-semibold">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-foreground/70">
                              <span className="h-2 w-2 bg-accent rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href="/contact">
                        <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold mt-6">
                          Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    {/* Image/Icon - Right */}
                    <div className="flex justify-center">
                      <div className="bg-secondary rounded-lg p-12 w-full max-w-sm h-64 flex items-center justify-center">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="h-32 w-32 object-contain"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container max-w-3xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-white">Ready to Start Your Project?</h2>
            <p className="text-white/80 text-lg">
              Contact us today to discuss your construction or contracting needs. Our team is ready to help bring your vision to life.
            </p>
          </div>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
