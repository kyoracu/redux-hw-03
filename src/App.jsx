import { useDispatch, useSelector } from "@reduxjs/toolkit";
import { guessNumber, resetGame } from "./store/store";

const App = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.game);

  const handleGuess = (e) => {
    e.preventDefault();
    const guess = parseInt(e.target.elements.guess.value);
    dispatch(guessNumber(guess));
  };

  return (
    <div>
      {status === "in progress" && (
        <form onSubmit={handleGuess}>
          <input type="number" name="guess" />
          <button type="submit">Угадать</button>
        </form>
      )}
      {status === "win" && (
        <div>
          <p>Поздравляем вы отгадали число!</p>
          <button onClick={() => dispatch(resetGame())}>Играть снова</button>
        </div>
      )}
      {status === "higher" && (
        <div>
          <p>Неправильно бери выше!</p>
        </div>
      )}
      {status === "lower" && (
        <div>
          <p>Неправильно бери ниже</p>
        </div>
      )}
    </div>
  );
};

export default App;