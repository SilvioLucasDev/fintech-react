import DateInput from './DateInput';
import { useData } from '../Context/DataContext';

const DateRange = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        id="start"
        label="Início"
        value={startDate}
        onChange={({ target }) => setStartDate(target.value)}
      />
      <DateInput
        id="end"
        label="Final"
        value={endDate}
        onChange={({ target }) => setEndDate(target.value)}
      />
    </form>
  );
};

export default DateRange;
