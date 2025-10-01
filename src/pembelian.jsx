import React, { useState, useEffect } from "react";

function PembelianPopup() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});

  const fakeUsers = [
    { name: "Fajar Maulana", city: "Medan" },
    { name: "Ghozi", city: "Siantar" },
 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomUser =
        fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
      setUser(randomUser);
      setShow(true);
      setTimeout(() => setShow(false), 4000);
    }, 11000); // setiap 15 detik muncul notif

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 bg-white border shadow-lg px-4 py-3 rounded-lg transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <p className="text-sm font-semibold">
        📢 {user.name} dari {user.city}
      </p>
      <p className="text-xs text-gray-500">baru saja membeli kursus ini 🎉</p>
    </div>
  );
}

export default PembelianPopup;
