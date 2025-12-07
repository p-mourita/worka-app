import Header from "@/components/header";

export default function AccountPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Header title="Account" subtitle="Profile, payments and preferences" />
      <section className="px-4 space-y-4">
        <div className="bg-white rounded-2xl shadow-card p-4 border border-gray-100">
          <h2 className="text-sm font-semibold mb-2">Profile</h2>
          <p className="text-sm text-gray-700">Pedro Mourita</p>
          <p className="text-xs text-gray-500 mt-1">
            pedro@example.com (placeholder)
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-4 border border-gray-100">
          <h2 className="text-sm font-semibold mb-2">Payment methods</h2>
          <p className="text-xs text-gray-500 mb-2">
            Saved cards (Stripe tokenization – placeholder for now).
          </p>
          <button className="text-xs font-medium px-3 py-2 rounded-xl border border-gray-200">
            Add payment method
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-4 border border-gray-100">
          <h2 className="text-sm font-semibold mb-2">App settings</h2>
          <div className="flex justify-between items-center text-sm mb-2">
            <span>Language</span>
            <span className="text-gray-500">English</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Theme</span>
            <span className="text-gray-500">Light</span>
          </div>
        </div>
      </section>
    </main>
  );
}
