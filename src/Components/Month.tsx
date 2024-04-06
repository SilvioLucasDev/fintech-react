import MonthButton from './MonthButton';

const Month = () => {
  return (
    <div className="flex">
      <MonthButton month={-3} />
      <MonthButton month={-2} />
      <MonthButton month={-1} />
      <MonthButton month={-0} />
    </div>
  );
};

export default Month;
