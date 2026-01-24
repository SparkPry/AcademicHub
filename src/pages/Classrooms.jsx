const Classrooms = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Your Classrooms
      </h2>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h3 className="font-semibold text-gray-800">
          Introduction to AI with Teachable Machine
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Progress: 61.5%
        </p>

        <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg">
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default Classrooms;
