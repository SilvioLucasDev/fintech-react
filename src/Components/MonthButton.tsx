import React from 'react';
import { useData } from '../Context/DataContext';

const buttonStyle: React.CSSProperties = {
  padding: 'var(--gap) var(--gap-s)',
  backgroundColor: 'var(--color-3)',
  border: 'none',
  borderRadius: 'var(--gap)',
  color: 'var(--color-2)',
  fontWeight: '600',
  textTransform: 'capitalize',
};

function getNameMonth(month: number): string {
  const date = new Date();
  date.setMonth(date.getMonth() + month);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

function formatDate(date: Date): string {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

const MonthButton = ({ month }: { month: number }) => {
  const { setStartDate, setEndDate } = useData();

  function setMonth(month: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + month);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setStartDate(formatDate(firstDay));
    setEndDate(formatDate(lastDay));
  }

  return (
    <button style={buttonStyle} onClick={() => setMonth(month)}>
      {getNameMonth(month)}
    </button>
  );
};

export default MonthButton;
