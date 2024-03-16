import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const AuthPage = ({ setIsAuth }) => {
  // giriş butonuna tıklanırsa
  const handleClick = () => {
    signInWithPopup(auth, provider)
      // başarıyla giriş yaparsa
      .then((data) => {
        console.log(data.user);

        // kullanıcının yetkisini true ya çek
        setIsAuth(true);

        // kullanıcı bilgisini local'de sakla
        localStorage.setItem("token", data.user.refreshToken);
      });
  };
  return (
    <div className="container">
      <div className="auth">
        <h1>ChatRoom</h1>
        <p>Devam etmek için oturum açın</p>
        <button onClick={handleClick}>
          <img src="/google.png" alt="Google" />
          <span>Google ile kaydolun</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
