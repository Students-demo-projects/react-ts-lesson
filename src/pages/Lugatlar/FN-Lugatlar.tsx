export default function Lugatlar() {
  const words = [
    { uz: "Kitob", en: "Book" },
    { uz: "Stol", en: "Table" },
    { uz: "Telefon", en: "Phone" },
    { uz: "Dost", en: "Friend" },
    { uz: "Uy", en: "Home" },
    { uz: "Maktab", en: "School" },
    { uz: "Daraxt", en: "Tree" },
    { uz: "Oshxona", en: "Kitchen" },
    { uz: "Suv", en: "Water" },
    { uz: "Yurak", en: "Heart" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
         Lugatlar
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {words.map((word, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition duration-200"
          >
            <p className="text-lg font-semibold text-gray-800">{word.uz}</p>
            <p className="text-gray-500">→ {word.en}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
