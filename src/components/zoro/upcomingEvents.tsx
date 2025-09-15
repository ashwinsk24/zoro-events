import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, X, Info } from "lucide-react";
import { useState } from "react";

// --- ACTION REQUIRED ---
// Added a 'fullDescription' for the modal pop-up.
const events = [
  {
    title: "BGMI TOURNAMENT",
    date: "September 14, 2025",
    location: "Virtual",
    imageUrl: "/images/zoro-event1.jpg",
    status: "closed",
    registrationLink: "https://forms.gle/zSZHKwsaa4CjGyKS9",
    fullDescription: `
🔹 General Rules
Fair Play First – No cheats, hacks, or mods. Violation = instant disqualification.
Stable Network – Players are responsible for their own internet connection.
Respect Matters – Abusive behavior toward players or admins will not be tolerated.

🎮 Game Rules
Single match (Chicken Dinner Based)
4 players per team
Using of emulators/controllers are prohibited

⏰ Timings
Players must be ready on time.
10+ minutes late = Disqualify.

🚨 Disqualification Rules
Hacking or cheating
Teaming up with other teams
Glitch or bug abuse
Toxic behaviour or voice chat abuse

There are no Refunds 🛑

For any queries, contact
Abhimanyu V M : 9074873447`,
  },
  {
    title: "eFOOTBALL TOURNAMENT",
    date: "September 14, 2025",
    location: "Virtual",
    imageUrl: "/images/zoro-event2.jpg",
    status: "closed",
    registrationLink: "https://forms.gle/KdbBSKETxNtyrvhc8",
    fullDescription: `
🔹 General Rules
Fair Play First – No cheats, hacks, or mods. Violation = instant disqualification.
Latest Version – All players must use the updated eFootball Mobile.
Stable Network – Players are responsible for their own internet connection.
Respect Matters – Abusive behavior toward players or admins will not be tolerated.

🎮 Match Setup
Format – Knockout style (1v1).
Duration – Standard eFootball Mobile match time.
Tie Breakers – Extra Time + Penalties if the match ends in a draw.

🏆 Teams & Selection
Teams will be assigned by Admin (no personal choice).

📸 Reporting Results
Winners must post screenshot proof of their match result in the WhatsApp group immediately after the game.

⏰ Timings
Players must be ready on time.
10+ minutes late = Walkover.

🚨 Disqualification Rules
Using multiple accounts.
Toxic or abusive behavior.
Delaying matches or ignoring admin instructions.
There are no Refunds 🛑

For any queries, contact :
Ajin Reji : 6282152553`,
  },
  {
    title: "VALORANT TOURNAMENT",
    date: "September 14, 2025",
    location: "Virtual",
    imageUrl: "/images/zoro-event3.jpg",
    status: "closed",
    registrationLink: "https://forms.gle/VshMSuKK3X5cu8SRA",
    fullDescription: `
🔹 General Guidelines
Fair Play First – No cheats, hacks, or mods. Violation = instant disqualification.
Stable Network – Players are responsible for their own internet connection.
Respect Matters – Abusive behavior toward players or admins will not be tolerated.

🎮 Match Setup
Format – knockout style (5v5)
Duration – Standard 30-35 min

📸 Reporting Results
Winners must post screenshot proof of their match result in the WhatsApp group immediately after the game.

⏰ Timings
Players must be ready on time.
10+ minutes late = Walkover.

🚨 Disqualification Rules
Using multiple accounts.
Toxic or abusive behavior.
Delaying matches or ignoring admin instructions.

🔹Tournament Rules
Teams: 5 starters
Conduct: Toxicity results in immediate disqualification.
Team members must join within the allowed time.
Stable internet is essential for fair play.
Use of in-game voice chat only.
Ensure devices are fully charged before matches.
No cheats, hacks, or exploits allowed.

There are no Refunds 🛑

For any queries, contact :
Harikrishnan U : 6282335105
    `,
  },
];

// Define the type for a single event
type Event = (typeof events)[0];

// Helper to determine the button style based on event status
const getStatusElement = (status: string, link: string) => {
  if (status === "live" || status === "upcoming") {
    return (
      // Add stopPropagation to prevent modal from opening when this link is clicked
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="bg-yellow-400 text-black text-xs font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors"
      >
        Register Now
      </a>
    );
  }
  return (
    <span className="bg-gray-600 text-white text-xs font-bold py-2 px-4 rounded-full cursor-not-allowed">
      Closed
    </span>
  );
};

// Updated EventModal Component with landscape orientation and custom scrollbar
const EventModal = ({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[85vh] overflow-hidden flex"
          onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}
        >
          {/* Left side - Poster */}
          <div className="w-2/5 flex-shrink-0 relative overflow-hidden flex items-center justify-center">
            {/* Blurred background image */}
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm scale-100 opacity-80"
              style={{
                backgroundImage: `url(${event.imageUrl})`,
              }}
            ></div>
            {/* Main image */}
            <img
              src={event.imageUrl}
              alt={event.title}
              className="relative z-10 w-full h-full object-contain drop-shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-3/5 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {event.title}
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" /> {event.date}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" /> {event.location}
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div
              className="flex-1 p-6 overflow-y-auto custom-scrollbar"
              style={{
                maxHeight: "calc(85vh - 200px)",
              }}
            >
              <div className="prose prose-sm max-w-none">
                <pre className="text-base text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                  {event.fullDescription}
                </pre>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-xl bg-yellow-400 px-6 py-3 text-base font-bold text-black shadow-sm hover:bg-yellow-300 transition-all duration-200 hover:shadow-md transform hover:scale-[1.02]"
              >
                Register for this Event
              </a>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors backdrop-blur-sm"
          >
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      </motion.div>

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:active {
          background: #64748b;
        }
      `}</style>
    </>
  );
};

export default function UpcomingEvents() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section
      id="upcoming"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="upcoming-events-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2
            id="upcoming-events-title"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Join Us at Our Next Event
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            We're always busy bringing new stories to the stage. Check out
            what's happening and register to be a part of the experience.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              onClick={() => setSelectedEvent(event)}
              className="group cursor-pointer relative flex flex-col justify-end h-96 overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={event.imageUrl}
                alt={`Promotional image for ${event.title}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative p-6 text-white">
                <h3 className="text-2xl font-bold">{event.title}</h3>
                <div className="mt-2 flex items-center text-sm opacity-90">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="mt-1 flex items-center text-sm opacity-90">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="mt-4 flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    {event.status === "live" && (
                      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-yellow-400">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                        </span>
                        Live
                      </span>
                    )}
                    {event.status === "upcoming" && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-white">
                        Upcoming
                      </span>
                    )}
                    {event.status === "closed" && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Finished
                      </span>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEvent(event);
                      }}
                      className="flex items-center gap-1 text-xs font-bold text-white bg-white/20 hover:bg-white/30 rounded-full py-1 px-3 transition-colors"
                    >
                      <Info className="h-3 w-3" />
                      Info
                    </button>
                  </div>
                  {getStatusElement(event.status, event.registrationLink)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
