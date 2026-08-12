import { Button } from '@/components/ui/button';
import { MapPin, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

/**
 * SAAC Projects/Portfolio Page
 * Professional project showcase with editable placeholder projects
 * Design: Consistent with homepage - Dark Navy + Gold accent
 */
export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Project Name',
      type: 'General Contracting',
      location: 'Location, Jordan',
      description: '[Placeholder - Project details to be added]',
      year: '[Year]',
    },
    {
      id: 2,
      name: 'Project Name',
      type: 'Construction Works',
      location: 'Location, Jordan',
      description: '[Placeholder - Project details to be added]',
      year: '[Year]',
    },
    {
      id: 3,
      name: 'Project Name',
      type: 'Civil Works',
      location: 'Location, Jordan',
      description: '[Placeholder - Project details to be added]',
      year: '[Year]',
    },
    {
      id: 4,
      name: 'Project Name',
      type: 'Finishing Works',
      location: 'Location, Jordan',
      description: '[Placeholder - Project details to be added]',
      year: '[Year]',
    },
    {
      id: 5,
      name: 'Project Name',
      type: 'Maintenance & Renovation',
      location: 'Location, Jordan',
      description: '[Placeholder - Project details to be added]',
      year: '[Year]',
    },
    {
      id: 6,
      name: 'Project Name',
      type: 'Project Management',
      location: 'Location, Jordan',
      description: '[Placeholder - Project details to be added]',
      year: '[Year]',
    },
    {
      id: 7,
      name: 'Project Name',
      type: 'General Contracting',
      location: 'Location, Jordan',
      description: '[Placeholder - Project details to be added]',
      year: '[Year]',
    },
    {
      id: 8,
      name: 'Project Name',
      type: 'Construction Works',
      location: 'Location, Jordan',
      description: '[Placeholder - Project details to be added]',
      year: '[Year]',
    },
  ];

  const projectTypes = [
    'All Projects',
    'General Contracting',
    'Construction Works',
    'Civil Works',
    'Finishing Works',
    'Maintenance & Renovation',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-white/80">
              A selection of our completed projects showcasing our expertise, quality, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {projectTypes.map((type, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                className={`${
                  index === 0
                    ? 'bg-accent hover:bg-accent/90 text-primary'
                    : 'border-border text-foreground hover:bg-secondary'
                }`}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <span className="text-foreground/40 text-sm">[Project Image]</span>
                  <div className="absolute top-4 right-4 bg-accent/90 text-primary px-3 py-1 rounded text-xs font-semibold">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  {/* Project Type Badge */}
                  <span className="inline-block text-accent text-xs font-semibold uppercase tracking-wider border border-accent/30 px-3 py-1 rounded">
                    {project.type}
                  </span>

                  {/* Project Name */}
                  <h3 className="text-primary text-xl font-semibold">{project.name}</h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-foreground/70 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    {project.location}
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>

                  {/* View Project Link */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm mt-4 transition-colors"
                  >
                    Inquire About Project <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-5xl font-bold text-accent">[Number]</div>
              <p className="text-foreground/70 text-lg">Completed Projects</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl font-bold text-accent">[Number]</div>
              <p className="text-foreground/70 text-lg">Satisfied Clients</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl font-bold text-accent">[Number]</div>
              <p className="text-foreground/70 text-lg">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container max-w-3xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-white">Have a Project in Mind?</h2>
            <p className="text-white/80 text-lg">
              Let's discuss your project requirements and explore how SAAC can support your next construction or contracting project.
            </p>
          </div>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
