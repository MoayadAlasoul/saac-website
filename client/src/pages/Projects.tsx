import { Button } from '@/components/ui/button';
import { MapPin, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

/**
 * SAAC Projects / Construction Expertise Page
 * Real royalty-free construction photography is used as illustrative visual context only.
 * Design: Consistent with homepage - Dark Navy + Gold accent, Playfair Display + Inter.
 */
export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Commercial Building — Visual Example',
      type: 'Commercial Buildings',
      location: '[Location to be added]',
      description: 'Professional construction photography illustrating commercial-building expertise. Replace with verified SAAC project information when available.',
      year: '[Year to be added]',
      image: '/manus-storage/commercial-building_f1796f32.jpg',
      alt: 'Modern commercial buildings used as an illustrative construction example',
    },
    {
      id: 2,
      name: 'Residential Construction — Visual Example',
      type: 'Residential Construction',
      location: '[Location to be added]',
      description: 'Professional construction photography illustrating residential construction work. Replace with verified SAAC project information when available.',
      year: '[Year to be added]',
      image: '/manus-storage/residential-construction_32ff47ab.jpg',
      alt: 'Residential construction framing used as an illustrative example',
    },
    {
      id: 3,
      name: 'Civil Works — Visual Example',
      type: 'Civil Works',
      location: '[Location to be added]',
      description: 'Professional construction photography illustrating civil works and site coordination. Replace with verified SAAC project information when available.',
      year: '[Year to be added]',
      image: '/manus-storage/civil-works_1f82c914.jpg',
      alt: 'Construction workers on a civil works site used as an illustrative example',
    },
    {
      id: 4,
      name: 'Construction Site — Visual Example',
      type: 'Construction Works',
      location: '[Location to be added]',
      description: 'Professional construction photography illustrating active construction-site work. Replace with verified SAAC project information when available.',
      year: '[Year to be added]',
      image: '/manus-storage/construction-workers_fb2e7674.jpg',
      alt: 'Construction professionals working on a site used as an illustrative example',
    },
    {
      id: 5,
      name: 'Infrastructure Site — Visual Example',
      type: 'Infrastructure',
      location: '[Location to be added]',
      description: 'Professional construction photography illustrating infrastructure and structural coordination. Replace with verified SAAC project information when available.',
      year: '[Year to be added]',
      image: '/manus-storage/infrastructure-site_f96d2237.jpg',
      alt: 'Infrastructure construction site with cranes used as an illustrative example',
    },
    {
      id: 6,
      name: 'Crane Operations — Visual Example',
      type: 'Project Management',
      location: '[Location to be added]',
      description: 'Professional construction photography illustrating coordinated site operations. Replace with verified SAAC project information when available.',
      year: '[Year to be added]',
      image: '/manus-storage/construction-cranes_6fceec45.jpg',
      alt: 'Tower cranes above a construction site used as an illustrative example',
    },
    {
      id: 7,
      name: 'Finishing Works — Visual Example',
      type: 'Finishing Works',
      location: '[Location to be added]',
      description: 'Professional renovation photography illustrating interior finishing expertise. Replace with verified SAAC project information when available.',
      year: '[Year to be added]',
      image: '/manus-storage/finishing-renovation_e4c13292.jpg',
      alt: 'Interior renovation and finishing work used as an illustrative example',
    },
    {
      id: 8,
      name: 'Construction Team — Visual Example',
      type: 'General Contracting',
      location: '[Location to be added]',
      description: 'Professional construction photography illustrating team coordination and site execution. Replace with verified SAAC project information when available.',
      year: '[Year to be added]',
      image: '/manus-storage/hero-construction_1cf8457d.jpg',
      alt: 'Construction team working on a building used as an illustrative example',
    },
  ];

  const projectTypes = ['All Projects', 'Commercial Buildings', 'Residential Construction', 'Civil Works', 'Infrastructure', 'Finishing Works'];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects & Construction Expertise</h1>
            <p className="text-xl text-white/80">
              Professional visual examples that reflect the construction disciplines and expertise represented by SAAC.
            </p>
          </div>
        </div>
      </section>

      {/* Context / Disclosure Section */}
      <section className="py-10 bg-white border-b border-border">
        <div className="container">
          <p className="max-w-4xl text-foreground/70 text-sm leading-relaxed border-l-2 border-accent pl-4">
            The photographs below are authentic, royalty-free construction images sourced from Unsplash and are presented as visual examples only. They are not actual SAAC projects, client work, or project documentation. Replace the editable fields with verified project information before publishing a project case study.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-white border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {projectTypes.map((type, index) => (
              <Button
                key={type}
                variant={index === 0 ? 'default' : 'outline'}
                className={`${index === 0 ? 'bg-accent hover:bg-accent/90 text-primary' : 'border-border text-foreground hover:bg-secondary'}`}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Expertise Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                {/* Real Image / Explicit Visual Example Label */}
                <div className="h-56 relative overflow-hidden bg-secondary">
                  <img src={project.image} alt={project.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  <span className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 text-[10px] uppercase tracking-wider">
                    Visual example
                  </span>
                </div>

                {/* Editable Project Fields */}
                <div className="p-6 space-y-4">
                  <span className="inline-block text-accent text-xs font-semibold uppercase tracking-wider border border-accent/30 px-3 py-1 rounded">
                    {project.type}
                  </span>
                  <h3 className="text-primary text-xl font-semibold leading-snug">{project.name}</h3>
                  <div className="flex items-center gap-2 text-foreground/70 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    {project.location}
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <span className="text-foreground/50 text-xs">{project.year}</span>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm transition-colors">
                      Discuss a Project <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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
