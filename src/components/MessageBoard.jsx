import { useSelector, useDispatch } from "react-redux";
import { addMessage, deleteMessage } from "../slices/messageBoardSlice";

function MessageBoard() {
  const message = useSelector((state) => {
    return state.messageBoard;
  });

  console.log(message?.name);
  const dispatch = useDispatch();

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage(e.target[0].value));
            e.target[0].value = "";
          }}
        >
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
            />
          </label>
          <button className="submit-message-button">Submit</button>
        </form>
      </div>
      <div className="board">
        {message?.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  dispatch(deleteMessage(index));
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
