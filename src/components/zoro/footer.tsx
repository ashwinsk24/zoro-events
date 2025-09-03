import { Instagram, Dribbble, Phone } from "lucide-react";

const whatsappUrl =
  "https://wa.me/918606693695?text=Hello!%20I'm%20interested%20in%20ZORO%20Events.";

// A custom WhatsApp icon component to be used in the social links
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    <path d="M16.36 9.64a5.22 5.22 0 0 0-7.42 0"></path>
    <path d="M19.19 6.81a9.19 9.19 0 0 0-13.04 0"></path>
  </svg>
);

const navigation = {
  social: [
    { name: "WhatsApp", href: whatsappUrl, icon: WhatsAppIcon },
    {
      name: "Instagram",
      href: "https://www.instagram.com/official_teamzoro",
      icon: Instagram,
    },
    { name: "Dribbble", href: "#", icon: Dribbble },
  ],
  links: [
    { name: "Corporate Events", href: "#gallery" },
    { name: "Weddings & Personal", href: "#gallery" },
    { name: "College Fests", href: "#gallery" },
    { name: "Our Process", href: "#process" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <img
                className="h-9 w-auto"
                src="/images/zoro-logo-white.png"
                alt="ZORO Events"
              />
              <span className="text-xl font-semibold tracking-wide">
                ZORO EVENTS
                <br />
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-6">
              <b>Your Story, Our Stage. </b> <br />
              From spectacular corporate events and unforgettable weddings to
              high-energy college fests, we bring your vision to life with
              precision and passion.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-sm font-semibold leading-6">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-400 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold leading-6">Get in Touch</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>
                Angamaly, Ernakulam <br /> Kerala, India
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span>Chat with us on WhatsApp</span>
              </a>
              <a
                href="tel:+918606693695"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-5 w-5" />
                <span>+91 86066 93695</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 sm:mt-0">
            &copy; {new Date().getFullYear()} ZORO EVENTS AND ENTERTAINMENTS.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
