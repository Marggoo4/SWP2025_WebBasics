import './App.css'
import {Button, Card, List } from "./components/4_Aufgabe/components";

export default function App() {
  return (
  <div className="p-10 space-y-10">

      <Button text="Senden" />

      <Card
        title="John Doe"
        description="Architect & Engineer"
        image="https://cdn.vectorstock.com/i/500p/29/52/faceless-male-avatar-in-hoodie-vector-56412952.jpg"
      />

      <List items={["Coffee", "Tea", "Beer"]} />

    </div>
  )
}
