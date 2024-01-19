import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeBooleanValue } from './redux/clickSlice';
import { IRootState } from './redux/store';
import CardsVisualizer from './CardsVisualizer';


function App() {
  const dispatch = useDispatch();
  const clickedValue = useSelector((state: IRootState) => state.clicked.value)

  return (
    <>
      <div id='try-button'>
        <div id='click-value'>value: {clickedValue.toString()}</div>
        <button
          onClick={() => dispatch(changeBooleanValue())}
        >
          click me
        </button>
      </div>
      <CardsVisualizer />
    </>
  );
}

export default App;
