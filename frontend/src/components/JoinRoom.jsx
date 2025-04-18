import React from "react";

const JoinRoom = ({ roomId, setRoomId, userName, setUserName, joinRoom }) => (
  <div className="join-container">
    <div className="join-form">
      <h1>Join Code Room</h1>
      <input
        type="text"
        placeholder="Room Id"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  </div>
);

export default JoinRoom;
