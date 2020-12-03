import "./App.scss";
import Card from "./components/Card";
import Header from "./components/Header";

import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import photo5 from "./assets/photo5.png";
import photo6 from "./assets/photo6.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__card">
        <Card photo={photo1} name="Bill Mahoney" position="Product owner" />
        <Card photo={photo2} name="Saba Cabrera" position="Art director" />
        <Card photo={photo3} name="Shae Le" position="Tech Lead" />
        <Card photo={photo4} name="Skylah Lu" position="UX Designer" />
        <Card photo={photo5} name="Griff Richards" position="Developer" />
        <Card photo={photo6} name="Stan John" position="Deverloper" />
      </div>
    </div>
  );
}

export default App;
