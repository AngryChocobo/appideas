import { useEffect, useState } from "react";
import { DateTimePicker } from "@/components/ui/date-time-picker";
const CountdownTimer = () => {
  const [date, setDate] = useState<Date>();
  const [day, setDay] = useState<number>();
  const [hour, setHour] = useState<number>();
  const [minute, setMinute] = useState<number>();
  const [second, setSecond] = useState<number>();

  useEffect(() => {
    const timer = setInterval(() => {
      if (!date) {
        setDay(undefined);
        setHour(undefined);
        setMinute(undefined);
        setSecond(undefined);
        return;
      }
      const now = Date.now();
      const left = date.getTime() - now;
      const seconds = Math.floor(left / 1000);
      const days = seconds / 60 / 60 / 24;
      setDay(Math.floor(days));
      const hours = seconds / 60 / 60;
      setHour(Math.floor(hours % 24));
      const minutes = seconds / 60;
      setMinute(Math.floor(minutes % 60));
      setSecond(seconds % 60);
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);
  return (
    <div
      className="flex h-full w-full flex-col
  items-center justify-center "
    >
      <div className="flex h-11 w-1/2 flex-col justify-center gap-2 ">
        <DateTimePicker date={date} setDate={setDate} />
        {date && (
          <p>倒计时: {`${day}天 ${hour}小时 ${minute}分钟 ${second}秒`}</p>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
