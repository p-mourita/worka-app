import Header from "@/components/header";

const mockMessages = [
  {
    id: "1",
    title: "Your access for tomorrow is ready",
    body: "Day Office – Golden Cross House, London. Tap to view your digital key and pre-arrival details.",
    time: "Today • 08:15"
  },
  {
    id: "2",
    title: "Booking confirmed",
    body: "Meeting Room – Collaboration space, Amsterdam. 15 Dec, 13:00–17:00.",
    time: "Yesterday • 10:22"
  }
];

export default function InboxPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Header title="Inbox" subtitle="Confirmation and reminders" />
      <section className="px-4">
        {mockMessages.map((m) => (
          <div
            key={m.id}
            className="bg-white rounded-2xl shadow-card p-4 mb-3 border border-gray-100"
          >
            <p className="text-xs text-gray-400 mb-1">{m.time}</p>
            <h3 className="text-sm font-semibold mb-1">{m.title}</h3>
            <p className="text-xs text-gray-600">{m.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
