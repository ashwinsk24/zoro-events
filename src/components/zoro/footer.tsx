import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const navigation = {
  main: [
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => <Twitter {...props} />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => <Instagram {...props} />,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => <Linkedin {...props} />,
    },
    {
      name: "Email",
      href: "mailto:hello@zoroevents.in",
      icon: (props: React.SVGProps<SVGSVGElement>) => <Mail {...props} />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <img
              className="h-8 w-auto"
              src="/images/zoro-logo.png"
              alt="ZORO Events"
            />
            <span className="font-semibold tracking-wide">ZORO EVENTS</span>
          </div>
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-800"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 text-center">
          <p className="text-xs leading-5 text-gray-600">
            &copy; {new Date().getFullYear()} ZORO EVENTS AND ENTERTAINMENTS.
            All rights reserved.
          </p>
          <p className="text-xs leading-5 text-gray-600 mt-1">
            Angamaly, Ernakulam, Kerala, IN
          </p>
        </div>
      </div>
    </footer>
  );
}
