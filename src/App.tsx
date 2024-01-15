import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeBooleanValue } from './redux/clickSlice';
import { IRootState } from './redux/store';


function App() {
  const dispatch = useDispatch();
  const clickedValue = useSelector((state: IRootState) => state.clicked.value)

  return (
    <>
      <div>WIP</div>
      <div id='try-button'>
        <div id='click-value'>value: {clickedValue.toString()}</div>
        <button
          onClick={() => dispatch(changeBooleanValue())}
        >
          click me
        </button>
      </div>
    </>
  );
}

export default App;
