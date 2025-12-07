import Header from "@/components/header";
import { BookingCard } from "@/components/cards";

const mockBookings = [
  {
    id: "1",
    date: "Today",
    time: "09:00–17:00",
    title: "Day Office – Golden Cross House",
    location: "London, United Kingdom",
    status: "upcoming" as const
  },
  {
    id: "2",
    date: "Mon, 15 Dec",
    time: "13:00–17:00",
    title: "Meeting Room – Collaboration space",
    location: "Amsterdam, Netherlands",
    status: "upcoming" as const
  }
];

const productChips = ["Day Offices", "Meeting Rooms", "Coworking"];

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      <Header
        title="Good morning, Pedro"
        subtitle="Where would you like to work today?"
      />
      <section className="px-4">
        <div className="mb-4">
          <div className="flex gap-2 mb-3">
            {productChips.map((label, i) => (
              <button
                key={label}
                className={`px-3 py-2 rounded-full text-xs font-medium border ${
                  i === 0
                    ? "bg-worka-purple text-white border-worka-purple"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              placeholder="Where to? City, area, or address"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm pr-10"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>
          </div>
        </div>

        <h2 className="text-sm font-medium mb-2">Your upcoming bookings</h2>
        {mockBookings.map((b) => (
          <BookingCard key={b.id} {...b} />
        ))}
      </section>
    </main>
  );
}
