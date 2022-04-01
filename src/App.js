import useScroll from './hooks/useScroll';
import { moon, stars, mountains_behind, mountains_front } from './images';

function App() {
  useScroll([
    'stars',
    'moon',
    'mountains_behind',
    'mountains_front',
    'text',
    'btn',
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <a href="#" className="logo">
          Logo
        </a>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
      <section>
        <img src={stars} id="stars" />
        <img src={moon} id="moon" />
        <img src={mountains_behind} id="mountains_behind" />
        <h2 id="text">Moon Light</h2>
        <a href="#sec" id="btn">
          Explore
        </a>
        <img src={mountains_front} id="mountains_front" />
      </section>
      <div className="sec" id="sec">
        <h2>Parallax Scrolling Effects</h2>
        <p>
          Magna elit ex amet in veniam pariatur sint ea duis nostrud. Cupidatat
          commodo cupidatat veniam in irure consectetur dolor ipsum non dolor
          qui. Nostrud ad culpa quis aliqua qui duis proident adipisicing. Magna
          elit ex amet in veniam pariatur sint ea duis nostrud. Cupidatat
          commodo cupidatat veniam in irure consectetur dolor ipsum non dolor
          qui. Nostrud ad culpa quis aliqua qui duis proident adipisicing. Magna
          elit ex amet in veniam pariatur sint ea duis nostrud. Cupidatat
          commodo cupidatat veniam in irure consectetur dolor ipsum non dolor
          qui. Nostrud ad culpa quis aliqua qui duis proident adipisicing.
          <br />
          <br />
          Magna elit ex amet in veniam pariatur sint ea duis nostrud. Cupidatat
          commodo cupidatat veniam in irure consectetur dolor ipsum non dolor
          qui. Nostrud ad culpa quis aliqua qui duis proident adipisicing. Magna
          elit ex amet in veniam pariatur sint ea duis nostrud. Cupidatat
          commodo cupidatat veniam in irure consectetur dolor ipsum non dolor
          qui. Nostrud ad culpa quis aliqua qui duis proident adipisicing. Magna
          elit ex amet in veniam pariatur sint ea duis nostrud. Cupidatat
          commodo cupidatat veniam in irure consectetur dolor ipsum non dolor
          qui. Nostrud ad culpa quis aliqua qui duis proident adipisicing.
          <br />
          <br />
          Magna elit ex amet in veniam pariatur sint ea duis nostrud. Cupidatat
          commodo cupidatat veniam in irure consectetur dolor ipsum non dolor
          qui. Nostrud ad culpa quis aliqua qui duis proident adipisicing. Magna
          elit ex amet in veniam pariatur sint ea duis nostrud. Cupidatat
          commodo cupidatat veniam in irure consectetur dolor ipsum non dolor
          qui. Nostrud ad culpa quis aliqua qui duis proident adipisicing. Magna
          elit ex amet in veniam pariatur sint ea duis nostrud. Cupidatat
          commodo cupidatat veniam in irure consectetur dolor ipsum non dolor
          qui. Nostrud ad culpa quis aliqua qui duis proident adipisicing.
          <br />
        </p>
      </div>
    </div>
  );
}

export default App;
