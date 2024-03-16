import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  // kullanıcının seçtiği oda
  const [room, setRoom] = useState(null);
  // kullanıcının yetkisi var mı?
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  // yetkisi yoksa giriş sayfasını göster
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  // yetkisi varsa
  return (
    <div className="container">
      {!room ? (
        // oda seçilmediyse oda seçme sayfası
        <RoomPage setRoom={setRoom} setIsAuth={setIsAuth} />
      ) : (
        // oda seçildiyse chat sayfası
        <ChatPage room={room} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
