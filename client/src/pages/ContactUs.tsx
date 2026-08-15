import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, MessageSquare, Globe, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * SAAC Contact Us Page
 * Professional contact form and editable company contact placeholders
 * Design: Consistent with homepage - Dark Navy + Gold accent
 */
export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    toast.success('Your message has been sent successfully. We will contact you soon.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/80">
              Let's discuss your project requirements and explore how SAAC can support your next construction or contracting project.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8 bg-secondary p-8 rounded-lg">
              <div>
                <h3 className="text-primary text-2xl font-bold mb-4">Get in Touch</h3>
                <div className="h-1 w-16 bg-accent mb-6"></div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Reach out to our professional team for inquiries, project consultations, or quotation requests.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Phone</h4>
                    <a href="tel:+962795864110" className="text-foreground/70 hover:text-accent text-sm">
                      00962795864110
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <a href="mailto:info@saac.site" className="text-foreground/70 hover:text-accent text-sm">
                      info@saac.site
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">WhatsApp</h4>
                    <a href="https://wa.me/962795864110" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent text-sm">
                      00962795864110
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Website</h4>
                    <a href="https://saac.site" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent text-sm">
                      saac.site
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Address</h4>
                    <p className="text-foreground/70 text-sm">
                      Amman, Jordan<br />
                      [Street Address Placeholder]
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-6 border-t border-border">
                <h4 className="font-semibold text-primary mb-2">Working Hours</h4>
                <p className="text-foreground/70 text-sm">
                  Sunday – Thursday: 8:00 AM – 5:00 PM<br />
                  Friday – Saturday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-lg shadow-md border border-border">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full text-accent mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Thank You for Reaching Out</h3>
                  <p className="text-foreground/70 max-w-md mx-auto">
                    We have received your message. A member of our team will review your inquiry and get back to you shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', company: '', email: '', phone: '', projectType: 'general', message: '' });
                    }}
                    className="bg-accent hover:bg-accent/90 text-primary font-semibold mt-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-primary text-2xl font-bold mb-2">Send Us a Message</h3>
                    <p className="text-foreground/70 text-sm mb-6">
                      Please complete the form below with your project details and requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Full Name *</label>
                      <Input
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-secondary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Company Name</label>
                      <Input
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-secondary/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Email Address *</label>
                      <Input
                        required
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-secondary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-secondary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Project Type</label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                    >
                      <SelectTrigger className="bg-secondary/50">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Contracting</SelectItem>
                        <SelectItem value="construction">Construction Works</SelectItem>
                        <SelectItem value="civil">Civil Works</SelectItem>
                        <SelectItem value="finishing">Finishing Works</SelectItem>
                        <SelectItem value="maintenance">Maintenance & Renovation</SelectItem>
                        <SelectItem value="management">Project Management</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Project Details & Message *</label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Describe your project requirements, scope, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-6 text-base"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder Section */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="bg-white rounded-lg p-8 shadow-md text-center space-y-4">
            <h3 className="text-primary text-xl font-semibold">Our Location in Amman, Jordan</h3>
            <p className="text-foreground/70 text-sm max-w-xl mx-auto">
              [Google Maps Placeholder - Interactive map integration for SAAC office headquarters in Amman]
            </p>
            <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border border-border">
              <MapPin className="h-12 w-12 text-accent animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
