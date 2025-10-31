const Admin = () => {
  return (
    <div className="
      min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-sky-50 to-blue-100 
      dark:from-gray-900 dark:to-gray-800 
      transition-colors duration-500 p-4
    ">
      <div className="
        bg-white dark:bg-gray-900 
        shadow-xl dark:shadow-[0_0_25px_rgba(0,0,0,0.4)] 
        rounded-2xl p-8 w-full max-w-md 
        border border-gray-100 dark:border-gray-700
        transition-colors duration-500
      ">
        <h1 className="
          text-2xl font-bold text-center 
          text-blue-600 dark:text-blue-400 mb-6
        ">
          User qo'shish
        </h1>

        <form className="flex flex-col space-y-4">
          <input
            name="ism"
            type="text"
            placeholder="Ism kiriting"
            className="
              border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-100 
              rounded-lg p-3 
              focus:outline-none focus:ring-2 focus:ring-blue-400 
              transition duration-300
              placeholder:text-gray-400 dark:placeholder:text-gray-500
            "
          />
          <input
            name="familia"
            type="text"
            placeholder="Familia kiriting"
            className="
              border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-100 
              rounded-lg p-3 
              focus:outline-none focus:ring-2 focus:ring-blue-400 
              transition duration-300
              placeholder:text-gray-400 dark:placeholder:text-gray-500
            "
          />
          <input
            name="yosh"
            type="number"
            placeholder="Yosh kiriting"
            className="
              border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-100 
              rounded-lg p-3 
              focus:outline-none focus:ring-2 focus:ring-blue-400 
              transition duration-300
              placeholder:text-gray-400 dark:placeholder:text-gray-500
            "
          />
          <input
            name="gmail"
            type="email"
            placeholder="Gmail kiriting"
            className="
              border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-100 
              rounded-lg p-3 
              focus:outline-none focus:ring-2 focus:ring-blue-400 
              transition duration-300
              placeholder:text-gray-400 dark:placeholder:text-gray-500
            "
          />

          <button
            type="submit"
            className="
              mt-4 bg-blue-600 hover:bg-blue-700 
              dark:bg-blue-500 dark:hover:bg-blue-600 
              text-white font-semibold py-3 
              rounded-lg shadow-md 
              transition duration-300
            "
          >
            Saqlash
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
