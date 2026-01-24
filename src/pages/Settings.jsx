const Settings = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Settings
      </h2>

      <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Display Name
          </label>
          <input
            className="w-full border rounded-lg px-3 py-2"
            defaultValue="Sopheak"
          />
        </div>

        <button className="px-5 py-2 bg-teal-500 text-white rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
