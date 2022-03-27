import ExerciseCard from "./components/ExerciseCard";
import "./style.scss";

import pushup from "./assets/pushup.png";
import skipping from "./assets/skipping.png";
import lunges from "./assets/lunges.png";
import pullup from "./assets/pullup.png";
import weight from "./assets/weight.png";
import situps from "./assets/situps.png";

function App() {
  return (
    <main>
      <div className="card-container">
        <ExerciseCard img={pushup} title="Pushups" />
        <ExerciseCard img={skipping} title="Skipping" />
        <ExerciseCard img={lunges} title="Lunges" />
        <ExerciseCard img={pullup} title="Pullup" />
        <ExerciseCard img={weight} title="Weight Lifting" />
        <ExerciseCard img={situps} title="Situps" />
      </div>
    </main>
  );
}

export default App;
