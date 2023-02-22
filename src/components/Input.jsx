import { useRef } from "react";

export default function Input({ pullWord }) {
  const wordRef = useRef();
  const formRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    // console.log(wordRef.current.value);
    if (!wordRef.current.value.trim().length) return;
    pullWord(wordRef.current.value);
    formRef.current.reset();
  }

  return (
    <form onSubmit={submitHandler} ref={formRef}>
      <div className="word_input">
        <input type="text" name="word" id="word" ref={wordRef} />
        <div id="search_icon" className="search_icon">
          <img src="./search.svg" alt="search icon" />
        </div>
      </div>
    </form>
  );
}
