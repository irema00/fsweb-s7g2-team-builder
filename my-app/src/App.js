import React, { useState } from "react";
import AddMember from "./components/Form";

function App() {
  const [memberList, setMemberList] = useState([]);

  const handleAddMember = (newMember) => {
    setMemberList([...memberList, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <AddMember onAddMember={handleAddMember} />

      <div className="member-list">
        {memberList.map((member, index) => (
          <div key={index}>
            <h3>Member {index + 1}:</h3>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
