import './css/app.css';
import './css/shownnow.css';
import Navbar from './Components/Header/Navbar';
import Slider from './Components/Slider';
import Collections from './Components/Collections';
import ShowNow from './Components/ShowNow';

function App() {
  return (
    <div class="container">
      <Navbar />
      <Slider />
      <ShowNow />
      <Collections />
    </div>
  );
}

export default App;
