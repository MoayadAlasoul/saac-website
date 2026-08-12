import { CheckCircle2, Award, Users, Shield, Zap, Handshake } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

/**
 * SAAC Why SAAC Page
 * Detailed value propositions and reasons to choose SAAC
 * Design: Consistent with homepage - Dark Navy + Gold accent
 */
export default function WhySaac() {
  const valueProps = [
    {
      icon: Award,
      title: 'Quality',
      description:
        'Uncompromising standards in every aspect of our work. We maintain rigorous quality control processes throughout project execution, ensuring that every deliverable meets or exceeds industry standards and client expectations.',
      details: [
        'Rigorous quality assurance protocols',
        'Industry-standard materials and practices',
        'Continuous quality monitoring',
        'Professional inspection and testing',
      ],
    },
    {
      icon: Handshake,
      title: 'Commitment',
      description:
        'Dedicated to exceeding client expectations and delivering on our promises. We view every project as an opportunity to build long-term relationships based on trust, reliability, and exceptional service.',
      details: [
        'Client-centric approach',
        'Transparent communication',
        'Proactive problem-solving',
        'Dedicated project teams',
      ],
    },
    {
      icon: Zap,
      title: 'Reliability',
      description:
        'Consistent delivery of projects on time and within specifications. Our proven track record demonstrates our ability to manage complex projects efficiently while maintaining quality standards.',
      details: [
        'On-time project delivery',
        'Budget adherence',
        'Consistent performance',
        'Dependable partnerships',
      ],
    },
    {
      icon: Users,
      title: 'Professionalism',
      description:
        'Expert team with extensive experience and professional integrity. Our professionals bring deep technical expertise, industry knowledge, and a commitment to ethical business practices.',
      details: [
        'Experienced team members',
        'Continuous professional development',
        'Industry certifications',
        'Ethical business practices',
      ],
    },
    {
      icon: Shield,
      title: 'Safety',
      description:
        'Rigorous safety protocols and commitment to protecting our team and clients. We prioritize safety in every aspect of our operations, from planning to execution, ensuring a secure work environment.',
      details: [
        'Comprehensive safety programs',
        'Regular safety training',
        'Hazard identification and mitigation',
        'Compliance with regulations',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Long-Term Partnerships',
      description:
        'Building lasting relationships with clients based on trust, reliability, and mutual success. We view our clients as partners and invest in understanding their long-term goals and objectives.',
      details: [
        'Ongoing support and maintenance',
        'Future project opportunities',
        'Collaborative approach',
        'Mutual growth and success',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Why Choose SAAC</h1>
            <p className="text-xl text-white/80">
              Discover what sets SAAC apart and why we're the trusted partner for construction and contracting solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
            <p>
              Choosing the right contracting partner is crucial for the success of your project. SAAC stands out in the industry by combining technical expertise, professional integrity, and a genuine commitment to client success.
            </p>
            <p>
              Our approach is built on six core pillars that guide every decision we make and every project we undertake. These values are not just words—they're the foundation of how we operate and the promises we make to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Value Propositions Grid */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="space-y-16">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:grid-cols-2 md:auto-cols-fr' : ''
                  }`}
                >
                  {/* Alternating layout */}
                  {index % 2 === 0 ? (
                    <>
                      {/* Icon/Visual - Left */}
                      <div className="flex justify-center">
                        <div className="bg-white rounded-lg p-12 w-full max-w-sm h-64 flex items-center justify-center shadow-md">
                          <Icon className="h-32 w-32 text-accent" />
                        </div>
                      </div>
                      {/* Content - Right */}
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-primary text-4xl font-bold mb-4">{prop.title}</h2>
                          <div className="h-1 w-16 bg-accent mb-6"></div>
                        </div>
                        <p className="text-foreground/80 text-lg leading-relaxed">{prop.description}</p>
                        <div className="space-y-3">
                          <h4 className="text-primary font-semibold">What This Means:</h4>
                          <ul className="space-y-2">
                            {prop.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-foreground/70">
                                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content - Left */}
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-primary text-4xl font-bold mb-4">{prop.title}</h2>
                          <div className="h-1 w-16 bg-accent mb-6"></div>
                        </div>
                        <p className="text-foreground/80 text-lg leading-relaxed">{prop.description}</p>
                        <div className="space-y-3">
                          <h4 className="text-primary font-semibold">What This Means:</h4>
                          <ul className="space-y-2">
                            {prop.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-foreground/70">
                                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {/* Icon/Visual - Right */}
                      <div className="flex justify-center">
                        <div className="bg-white rounded-lg p-12 w-full max-w-sm h-64 flex items-center justify-center shadow-md">
                          <Icon className="h-32 w-32 text-accent" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-primary mb-4">Our Commitment to You</h2>
              <div className="h-1 w-20 bg-accent mb-8"></div>
            </div>
            <div className="bg-secondary rounded-lg p-8 space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                When you partner with SAAC, you're not just hiring a contractor—you're gaining a dedicated team committed to your project's success. We invest time in understanding your goals, challenges, and expectations, and we work tirelessly to exceed them.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Our six core values—Quality, Commitment, Reliability, Professionalism, Safety, and Long-Term Partnerships—are the foundation of everything we do. They guide our decision-making, shape our culture, and define our relationships with clients.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                We believe that great construction is built on trust. That's why we're transparent, responsive, and accountable at every stage of your project. Your success is our success, and we're committed to delivering results that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container max-w-3xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-white">Ready to Experience the SAAC Difference?</h2>
            <p className="text-white/80 text-lg">
              Contact us today to discuss your project and discover how SAAC can deliver exceptional results.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
