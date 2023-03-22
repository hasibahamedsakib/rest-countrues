import React from "react";

function App() {
  const players = [
    { name: "Shakib All Hasan", isBatter: true, isBowler: true },
    { name: "Mehedi Hasan MIraz", isBatter: true, isBowler: true },
    { name: "Tamim iqbal", isBatter: true, isBowler: false },
    { name: "Liton Dash", isBatter: true, isBowler: false },
    { name: "Taskin Ahamed", isBatter: false, isBowler: true },
    { name: "Mashrafee", isBatter: false, isBowler: true },
    { name: "Moshfiqur rahim", isBatter: true, isBowler: false },
    { name: "Nasir Hussain", isBatter: true, isBowler: true },
    { name: "Najmul Shanto", isBatter: true, isBowler: false },
    { name: "Mahmodullah Reyad", isBatter: true, isBowler: true },
  ];

  return (
    <div
      style={{
        background: "orange",
        color: "white",
        textAlign: "center",
        display: "grid",
        gridTemplateColumns: `auto auto auto auto`,
        gridGap: 15,
        padding: 10,
      }}
    >
      {players.map((player) => {
        return <Players player={player}></Players>;
      })}
    </div>
  );
}
export default App;
function Players({ player }) {
  const childrenStyle = {
    background: "hotPink",
    padding: 20,
    border: `5px solid black`,
    borderRadius: 20,
  };
  return (
    <div style={childrenStyle}>
      <h2>{player.name}</h2>
      <p>{player.isBatter && player.isBowler ? "He is alrounder" : ""}</p>
      <h3>
        {player.isBatter ? "He is Batter in bangladesh Team" : "He is a bowler"}
      </h3>
    </div>
  );
}
