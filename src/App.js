import React, { useEffect } from 'react';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';

function App() {
  const tg = useWebApp();

  useEffect(() => {
    try {
      tg.ready();
    } catch (e) {
      console.warn("⚠️ Telegram API не доступен:", e);
    }
  }, [tg]);

  const userName = tg?.initDataUnsafe?.user?.first_name || "гость";

  return (
    <div style={{ padding: 20 }}>
      <h1>🧠 Тренажёр памяти</h1>
      <p>Привет, {userName}!</p>
    </div>
  );
}

export default App;
