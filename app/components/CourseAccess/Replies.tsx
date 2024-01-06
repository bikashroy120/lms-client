import React, { useState } from "react";

type Props = {};

function Replies({}: Props) {
    const [replyActive,setReplyActive] = useState(false)
  return (
    <div>
      <button onClick={() => setReplyActive(!replyActive)}>
        {!replyActive ? "Replies" : "Hide Replies"}
      </button>
    </div>
  );
}

export default Replies;
