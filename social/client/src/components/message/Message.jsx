import "./message.css";
import {format} from "timeago.js";

export default function Message({message, own}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
        <img
        className="messageImg" 
            src = "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"
            alt = ""
         />
         <p className="messageText"> {message.text} </p>
        </div>
        <div className="messageBottom">
            {format(message.createdtAt)}
        </div>
    </div>
  )
}
