interface Props{
    text:string;
}

function Message({text}:Props) {  
    return (
        <p>
            {text}
        </p>
    );
  }
  export default Message;