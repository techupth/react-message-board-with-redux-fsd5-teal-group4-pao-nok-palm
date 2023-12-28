import { useSelector,useDispatch } from 'react-redux';
import { addPost,del } from '../slices/messageBoardSlice';
import { changeText } from '../slices/textSlices';

// import { useState } from 'react';

function MessageBoard() {

  const dispatch = useDispatch();

  const post = useSelector((state)=>{ 
    return state.post;
  })

  // console.log(post)

  const textResult = useSelector((state)=>{
    return state.text;
  })

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={textResult}
            onChange={(e)=>{dispatch(changeText(e.target.value))}}
          />
        </label>
        <button className="submit-message-button" onClick={()=>{dispatch(addPost(textResult))}}>Submit</button>
      </div>
      <div className="board">
        {
          post.map((item,index)=>{
            return (
              <div key={index} className="message">
              <h1>{item}</h1>
              <button className="delete-button"
                onClick={()=>{dispatch(del(index))}}
              >x</button>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default MessageBoard;

/*
function MessageBoard() {

const [input,setInput] = useState("");

  const post = useSelector((state)=>{ 
    return state.post
  })

  // console.log(post)

  const dispatch = useDispatch();

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
          />
        </label>
        <button className="submit-message-button" onClick={()=>{dispatch(addPost(input))}}>Submit</button>
      </div>
      <div class="board">
        {
          post.map((item,index)=>{
            return (
              <div key={index} className="message">
              <h1>{item}</h1>
              <button className="delete-button"
                onClick={()=>{dispatch(del(index))}}
              >x</button>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default MessageBoard;
*/