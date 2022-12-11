import './Widget.modul.css';

const WidgetButton = ({ onIncrement, onDecrement, onInserter, onRed }) => (
  <div>
    <button
      type="text"
      name="good"
      className="list"
      onClick={onIncrement}
      onMouseOver={onRed}
    >
      good
    </button>
    <button type="text" name="neutral" className="list" onClick={onDecrement}>
      neutral
    </button>
    <button type="text" name="bad" className="list" onClick={onInserter}>
      bad
    </button>
  </div>
);

export default WidgetButton;
