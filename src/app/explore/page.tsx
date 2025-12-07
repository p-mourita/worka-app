import Header from "@/components/header";
import { SpaceCard } from "@/components/cards";

const mockSpaces = [
  {
    id: "1",
    name: "Golden Cross House",
    city: "London, United Kingdom",
    type: "Day Office" as const,
    fromPrice: "$56/day",
    distance: "5 min walk"
  },
  {
    id: "2",
    name: "Damrak Offices",
    city: "Amsterdam, Netherlands",
    type: "Coworking" as const,
    fromPrice: "€35/day",
    distance: "10 min walk"
  },
  {
    id: "3",
    name: "La Défense Suites",
    city: "Paris, France",
    type: "Meeting Room" as const,
    fromPrice: "€49/hour",
    distance: "12 min drive"
  }
];

export default function ExplorePage() {
  return (
    <main className="flex-1 flex flex-col">
      <Header
        title="Explore spaces"
        subtitle="Day offices, meeting rooms, coworking"
      />
      <section className="px-4">
        <div className="relative mb-4">
          <input
            placeholder="Search by city or building"
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm pr-10"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xl">
            🔍
          </span>
        </div>
        {mockSpaces.map((s) => (
          <SpaceCard key={s.id} {...s} />
        ))}
      </section>
    </main>
  );
}
