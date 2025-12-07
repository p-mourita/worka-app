import Link from "next/link";

export type SpaceCardProps = {
  id: string;
  name: string;
  city: string;
  type: "Day Office" | "Meeting Room" | "Coworking";
  fromPrice: string;
  distance?: string;
};

export function SpaceCard({
  id,
  name,
  city,
  type,
  fromPrice,
  distance
}: SpaceCardProps) {
  return (
    <Link
      href="#"
      className="block bg-white rounded-2xl shadow-card p-4 mb-4 border border-gray-100"
    >
      <div className="flex justify-between items-start gap-3">
        <div>
          <p className="text-xs text-gray-500 mb-1">{type}</p>
          <h3 className="text-base font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{city}</p>
          {distance && (
            <p className="text-xs text-gray-400 mt-1">{distance} away</p>
          )}
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">From</p>
          <p className="text-sm font-semibold">{fromPrice}</p>
          <span className="inline-flex mt-2 items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-worka-purple/10 text-worka-purple">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}

export type BookingCardProps = {
  id: string;
  date: string;
  time: string;
  title: string;
  location: string;
  status: "upcoming" | "past" | "cancelled";
};

export function BookingCard({
  date,
  time,
  title,
  location,
  status
}: BookingCardProps) {
  const statusColors: Record<typeof status, string> = {
    upcoming: "bg-emerald-50 text-emerald-700",
    past: "bg-gray-100 text-gray-600",
    cancelled: "bg-red-50 text-red-600"
  };

  return (
    <div className="bg-white rounded-2xl shadow-card p-4 mb-4 border border-gray-100">
      <div className="flex justify-between items-start gap-3">
        <div>
          <p className="text-xs text-gray-500">
            {date} • {time}
          </p>
          <h3 className="text-base font-semibold mt-1">{title}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <span
          className={`inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full ${statusColors[status]}`}
        >
          {status === "upcoming"
            ? "Upcoming"
            : status === "past"
            ? "Completed"
            : "Cancelled"}
        </span>
      </div>
      {status === "upcoming" && (
        <div className="flex gap-2 mt-3">
          <button className="flex-1 text-xs font-medium px-3 py-2 rounded-xl border border-gray-200">
            View details
          </button>
          <button className="flex-1 text-xs font-medium px-3 py-2 rounded-xl bg-worka-purple text-white">
            Get access
          </button>
        </div>
      )}
    </div>
  );
}
