"use client";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactRef = useScrollReveal({
    threshold: 0.2,
    delay: 400,
    direction: "scale",
    duration: 1000,
    easing: "spring",
  });

  const contactInfo = [
    { icon: Mail, text: "booking@ariane-dj.com" },
    { icon: Phone, text: "+54 9 362 XXX-XXXX" },
    { icon: Instagram, text: "@ariane.dj" },
    { icon: MapPin, text: "Resistencia, Chaco, Argentina" },
  ];

  return (
    <section ref={contactRef} className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="minimal-section">
          <h2 className="text-5xl font-bold text-gray-800 mb-20 text-center gradient-text-subtle">
            Contacto
          </h2>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Info */}
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-8">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, text }) => (
                  <div key={text} className="minimal-contact-item">
                    <Icon className="w-6 h-6 text-purple-600" />
                    <span className="text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="space-y-8">
              <div>
                <Label
                  htmlFor="name"
                  className="text-gray-800 text-lg font-medium"
                >
                  Nombre
                </Label>
                <Input
                  id="name"
                  name="name"
                  className="minimal-input mt-2 h-12"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-gray-800 text-lg font-medium"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="minimal-input mt-2 h-12"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-gray-800 text-lg font-medium"
                >
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="minimal-input mt-2"
                  placeholder="Tu mensaje..."
                />
              </div>

              <Button
                type="submit"
                className="w-full enhanced-button bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 h-12 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" /> Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
