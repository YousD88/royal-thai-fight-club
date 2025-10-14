import { Facebook, Instagram, Phone, MessageCircle } from "lucide-react";

const SocialBar = () => {
  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Phone, href: "tel:+33000000000", label: "Téléphone" },
    { icon: MessageCircle, href: "sms:+33000000000", label: "SMS" },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            className="bg-card hover:bg-primary border border-border hover:border-primary text-foreground hover:text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            aria-label={social.label}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialBar;
