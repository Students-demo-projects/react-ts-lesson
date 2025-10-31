import { useState } from "react";
export default function Savat() {
    const [savat, setSavat] = useState<string[]>([]);

    function qoshish(nomi: string) {
        setSavat([...savat, nomi]);
        alert(`${nomi} qo‘shildi`);
    }

    function ochirish(index: number) {
        const yangi = [...savat];
        yangi.splice(index, 1);
        setSavat(yangi);
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-3">Mahsulotlar</h2>

            <div className="space-y-2 mb-5">
                <button
                    onClick={() => qoshish("Kitob")}
                    className="bg-blue-500 text-white px-3 py-1 rounded w-full"
                >
                    Kitob qo‘shish
                </button>

                <button
                    onClick={() => qoshish("Ruchka")}
                    className="bg-blue-500 text-white px-3 py-1 rounded w-full"
                >
                    Ruchka qo‘shish
                </button>

                <button
                    onClick={() => qoshish("Daftar")}
                    className="bg-blue-500 text-white px-3 py-1 rounded w-full"
                >
                    Daftar qo‘shish
                </button>

                <button
                    onClick={() => qoshish("Qalam")}
                    className="bg-blue-500 text-white px-3 py-1 rounded w-full"
                >
                    Qalam qo‘shish
                </button>

                <button
                    onClick={() => qoshish("Sumka")}
                    className="bg-blue-500 text-white px-3 py-1 rounded w-full"
                >
                    Sumka qo‘shish
                </button>
            </div>

            <h3 className="text-lg font-semibold mb-2">Savat</h3>

            {savat.length === 0 ? (
                <p className="text-gray-500">Savat bo‘sh</p>
            ) : (
                <ul className="space-y-2">
                    {savat.map((item, i) => (
                        <li
                            key={i}
                            className="flex justify-between items-center border p-2 rounded"
                        >
                            <span>{item}</span>
                            <button
                                onClick={() => ochirish(i)}
                                className="text-red-600 hover:underline"
                            >
                                O‘chirish
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}