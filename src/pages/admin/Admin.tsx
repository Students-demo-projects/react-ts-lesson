const Admin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center from-sky-50 to-blue-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          User qo'shish
        </h1>

        <form className="flex flex-col space-y-4">
          <input
            name="ism"
            type="text"
            placeholder="Ism kiriting"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            name="familia"
            type="text"
            placeholder="Familia kiriting"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            name="yosh"
            type="number"
            placeholder="Yosh kiriting"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            name="gmail"
            type="email"
            placeholder="Gmail kiriting"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Saqlash
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;

