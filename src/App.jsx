import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Card 
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonText="Go somewhere"
      />

      <Card 
        title="Card with Image"
        text="This card has an actual image instead of a placeholder."
        buttonText="View Details"
        imageUrl="https://placekitten.com/300/200"
      />

      <Card 
        title="Another Card"
        text="This is another example card with different content and styling."
        buttonText="Learn More"
      />
    </div>
  );
}

export default App;
