import { useEffect, useState } from "react";
import "./App.css";
import Error from "./components/Error";
import Input from "./components/Input";
import Meaning from "./components/Meaning";
import Source from "./components/Source";
import testValue from "./test/test";

const URL0 = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App() {
  const [wordState, setWordState] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [errorState, setErrorState] = useState(null);
  const [themeState, setThemeState] = useState(true);

  const { word, phonetic, phonetics, meanings, license, sourceUrls } =
    !!wordState ? wordState[0] : {};
  // console.log(word, phonetic, phonetics, meanings, license, sourceUrls);
  console.log(phonetics);

  ////////////////////////////////

  useEffect(() => {
    async function getWordFn() {
      if (!selectedWord) return;
      const URL = URL0 + selectedWord;
      const response = await fetch(URL);
      console.log(URL);
      const data = await response.json();
      if (Array.isArray(data)) {
        setWordState(data);
        setErrorState(null);
      } else {
        setWordState(null);
        setErrorState(data);
      }
    }
    ////////Uncomment This
    getWordFn();
  }, [selectedWord]);

  ///////////////////////////
  const pullWord = (word) => {
    setSelectedWord(word);
  };

  const audioHandler = () => {
    let audioUrl;
    for (let i of phonetics) {
      if (!!i.audio.trim().length) {
        audioUrl = i.audio;
        break;
      }
    }
    new Audio(audioUrl).play();
  };

  const themeToggleHandler = () => {
    setThemeState(!themeState);
  };

  const themeClass = themeState ? "light" : "dark";

  return (
    <div className={`App container ${themeClass}`}>
      {/* /////////////////// */}
      <div id="theme" className="theme">
        <button className="theme_toggle" onClick={themeToggleHandler}>
          {themeState ? (
            <img src="./moon.svg" alt="dark theme" />
          ) : (
            <img src="./sun-high.svg" alt="light theme" />
          )}
        </button>
      </div>
      {/* /////////////////// */}

      <div className="input_section section">
        <Input pullWord={pullWord} />
      </div>

      {/* /////////////////// */}
      {!!errorState && (
        <Error
          key={Math.random}
          title={errorState.title}
          message={errorState.message}
          resolution={errorState.resolution}
        />
      )}

      {/* /////////////////// */}
      {!!wordState && (
        <div id="defSection" className="defSection section-1">
          <div className="def_audio ">
            <div id="def" className="def">
              <div id="word" className="word">
                {word}
              </div>
              <div id="phonetic" className="phonetic">
                {phonetic}
              </div>
            </div>
            <div id="audio" className="audio">
              <div id="audio_container" className="audio_container">
                <button className="audio_button" onClick={audioHandler}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-player-play-filled"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#EE1B87"
                    fill="#EE1B87"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                      strokeWidth="0"
                      fill="inherit"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div id="meanings" className="meanings">
            {meanings.map((item) => (
              <Meaning
                key={Math.random()}
                partOfSpeech={item.partOfSpeech}
                definitions={item.definitions}
                synonyms={item.synonyms}
                antonyms={item.antonyms}
                pullWord={pullWord}
              />
            ))}
          </div>

          <div id="source_section" className="source_section section flex-1">
            <div className="sources_title">Source</div>
            {sourceUrls.map((item) => (
              <Source key={Math.random()} source={item} />
            ))}
          </div>
        </div>
      )}
      {/* /////////////////// */}

      <div className="credit section light_bold">
        made by <span className="credit_name">PRITOM</span>
      </div>
    </div>
  );
}

export default App;
