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
    date: "Tue, 02 Jan",
    time: "09:00–17:00",
    title: "Coworking – Lounge Daypass",
    location: "Berlin, Germany",
    status: "upcoming" as const
  },
  {
    id: "3",
    date: "Last week",
    time: "13:00–17:00",
    title: "Meeting Room – Boardroom",
    location: "Madrid, Spain",
    status: "past" as const
  }
];

export default function MyBookingsPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Header
        title="My bookings"
        subtitle="Manage your upcoming and past visits"
      />
      <section className="px-4">
        {mockBookings.map((b) => (
          <BookingCard key={b.id} {...b} />
        ))}
      </section>
    </main>
  );
}
