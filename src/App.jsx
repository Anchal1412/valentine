import { useState, useRef } from "react";
import "./App.css";
import song from "./assets/song.mp3";

function App() {
  const [message, setMessage] = useState("");
  const [love, setLove] = useState(false);
  const [noStyle, setNoStyle] = useState({});
  const audioRef = useRef(null);

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoStyle({
      transform: `translate(${x}px, ${y}px)`
    });
  };

  const yesClicked = () => {
    setLove(true);
    setMessage(
      "Tum mere aaj ho 💕\n" +
      "aur meri har kal ho 💫\n" +
      "I love you forever ❤️"
    );

    // 🔊 Play music on Yes click
    if (audioRef.current) {
      audioRef.current.play();
    }

    heartBlast();
  };

  const heartBlast = () => {
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement("div");
      heart.className = "blast-heart";
      heart.innerHTML = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 2000);
    }
  };

  return (
    <div className={`app ${love ? "love-bg" : ""}`}>
      
      {/* 🎵 Audio */}
      <audio ref={audioRef} src={song} loop />

      <div className="hearts"></div>

      <div className="card">
        <h1>Hey Betku 💕</h1>
        <p>Wanna be my Valentine? 💌</p>

        <div className="buttons">
          <button className="yes" onClick={yesClicked}>
            Yes 💖
          </button>

          <button
            className="no"
            style={noStyle}
            onMouseEnter={moveNoButton}
          >
            No 😜
          </button>
        </div>

        {message && (
          <p className="message">
            {message.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
