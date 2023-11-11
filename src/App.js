import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHrs, setTimerHrs] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");
  const [text, setText] = useState(
    "Love, Our Aniversary Countdown Timer is here"
  );

  let interval = useRef();
  const startTimer = () => {
    const aniversary = new Date("Aug 31, 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = aniversary - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minu = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop time..
        setText("Happy aniversary love...");
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHrs(hours);
        setTimerMin(minu);
        setTimerSec(secs);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    const clear = interval.current;
    return () => {
      clearInterval(clear);
    };
  });
  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calender-clock timer-icon"></span>
          <h2>{text}</h2>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>days</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p>{timerHrs}</p>
            <p>
              <small>Hrs</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p>{timerMin}</p>
            <p>
              <small>Mins</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p>{timerSec}</p>
            <p>
              <small>Sec</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default App;
