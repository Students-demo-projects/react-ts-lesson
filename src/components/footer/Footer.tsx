function Footer() {
    return (
        <footer className="bg-gray-900 text-white text-center p-8 mt-auto">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-2 text-yellow-400">GoTaxi</h2>
                <p className="text-gray-400 mb-6">
                    Tez, qulay va ishonchli yo‘l — sizga eng yaqin taksilar endi onlayn!
                    GoTaxi bilan manzilingizga xavfsiz va tez yeting.
                </p>

                <div className="flex justify-center gap-8 mb-6 flex-wrap">
                    <a href="/" className="hover:text-yellow-400 transition">Bosh sahifa</a>
                    <a href="/" className="hover:text-yellow-400 transition">Xizmatlar</a>
                    <a href="/" className="hover:text-yellow-400 transition">F.A.Q</a>
                </div>

                <div className="text-gray-400 mb-4">
                    <p>📞 +998 90 123 45 67</p>
                    <p>📍 Toshkent shahri, Amir Temur ko‘chasi 15</p>
                    <p>✉️ info@gotaxi.uz</p>
                </div>

                <hr className="my-4 border-gray-700" />

                <p className="text-gray-500 text-sm">
                    © 2025 GoTaxi. Barcha huquqlar himoyalangan.
                </p>
            </div>
        </footer>
    );
}

export default Footer;



