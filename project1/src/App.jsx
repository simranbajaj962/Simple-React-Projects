import { useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      {showModal ? (
        <Modal setShowModal={setShowModal} />
      ) : (
        <button id="start-btn" onClick={() => setShowModal(true)}>
          Start
        </button>
      )}
    </div>
  );
}

function Modal(props) {
  const [displayMsg, setDisplayMsg] = useState(false);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setDisplayMsg(true);
  }

  function handleLetsGo() {
    setDisplayMsg(false);
    props.setShowModal(false);
  }
  return (
    <div className="modal">
      {displayMsg ? (
        <div className="msg-box">
          <h3>Welcome!</h3>
          <p>{input.toUpperCase()}👋</p>
          <button className="btn" onClick={handleLetsGo}>
            Lets Go!
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Enter Your Name: </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
