const RoomPage = ({ setRoom, setIsAuth }) => {
  // form gönderilince tetiklenecek bir fonksiyon yaz
  const handleSubmit = (e) => {
    e.preventDefault();
    // inputtaki değeri al
    const room = e.target[0].value;

    // kullanıcının seçtiği odayı state e aktar
    setRoom(room.toLowerCase());
  };
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Sohbet Odası</h1>
      <p>Oda İsmini Yazınız</p>
      <input type="text" placeholder="Örn:Okii" required />
      <button type="submit">Odaya Gir</button>
      <button
        onClick={() => {
          // yetki state ini false çekerek oda logine yönlendir
          setIsAuth(false);
          // local deki kaydı kaldır
          localStorage.removeItem("token");
        }}
        type="button"
      >
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
