import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

/**
 * SAAC About Us Page
 * Company overview, vision, mission, and core values
 * Design: Consistent with homepage - Dark Navy + Gold accent
 */
export default function AboutUs() {
  const values = [
    {
      title: 'Quality',
      description: 'Uncompromising standards in every aspect of our work, from planning to execution.',
    },
    {
      title: 'Commitment',
      description: 'Dedicated to exceeding client expectations and delivering on our promises.',
    },
    {
      title: 'Safety',
      description: 'Rigorous safety protocols and commitment to protecting our team and clients.',
    },
    {
      title: 'Reliability',
      description: 'Consistent delivery of projects on time and within specifications.',
    },
    {
      title: 'Professionalism',
      description: 'Expert team with extensive experience and professional integrity.',
    },
    {
      title: 'Continuous Improvement',
      description: 'Constant evolution of our processes and practices to deliver better results.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About SAAC</h1>
            <p className="text-xl text-white/80">
              Discover the story, vision, and values that drive SAAC to deliver excellence in construction and contracting.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-primary mb-4">Company Overview</h2>
              <div className="h-1 w-20 bg-accent mb-8"></div>
            </div>
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                Saif Abdul Aziz Allouh Contracting (SAAC) is a Jordanian contracting company with a strong commitment to delivering reliable, high-quality construction and contracting solutions. Since our establishment, we have built a reputation as a trusted partner for clients seeking professional services that meet the highest standards.
              </p>
              <p>
                Our team brings together experienced professionals with deep expertise in construction, civil works, project management, and finishing works. We combine technical excellence with a client-centric approach, ensuring that every project is executed with precision, efficiency, and a commitment to quality.
              </p>
              <p>
                Whether it's general contracting, civil infrastructure, or specialized finishing works, SAAC is dedicated to delivering solutions that exceed expectations and contribute to the development of Jordan's construction landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-primary mb-4">Our Vision</h2>
              <div className="h-1 w-20 bg-accent mb-8"></div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-accent">
              <p className="text-foreground/80 text-lg leading-relaxed">
                To become a trusted and recognized contracting company in Jordan, delivering high-quality construction solutions and contributing to projects that create lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-primary mb-4">Our Mission</h2>
              <div className="h-1 w-20 bg-accent mb-8"></div>
            </div>
            <div className="bg-secondary rounded-lg p-8 shadow-md border-l-4 border-accent">
              <p className="text-foreground/80 text-lg leading-relaxed">
                To deliver professional contracting and construction services based on quality, efficiency, and commitment, while ensuring client satisfaction and professional project execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="space-y-12">
            <div>
              <h2 className="text-primary mb-4">Our Core Values</h2>
              <div className="h-1 w-20 bg-accent mb-8"></div>
              <p className="text-foreground/70 text-lg max-w-2xl">
                These values guide every decision we make and every project we undertake.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-primary font-semibold text-lg mb-3">{value.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With SAAC Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-primary mb-4">Why Partner With SAAC</h2>
              <div className="h-1 w-20 bg-accent mb-8"></div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                    <span className="text-accent font-bold text-lg">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-primary font-semibold text-lg mb-2">Proven Track Record</h3>
                  <p className="text-foreground/70">
                    Years of successful project delivery across multiple sectors and project types.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                    <span className="text-accent font-bold text-lg">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-primary font-semibold text-lg mb-2">Expert Team</h3>
                  <p className="text-foreground/70">
                    Experienced professionals with deep technical expertise and industry knowledge.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                    <span className="text-accent font-bold text-lg">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-primary font-semibold text-lg mb-2">Quality Assurance</h3>
                  <p className="text-foreground/70">
                    Rigorous quality control processes and commitment to exceeding standards.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                    <span className="text-accent font-bold text-lg">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-primary font-semibold text-lg mb-2">Client-Centric Approach</h3>
                  <p className="text-foreground/70">
                    Personalized attention and commitment to understanding and meeting your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
