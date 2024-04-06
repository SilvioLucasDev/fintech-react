import React from 'react';
import useFetch from '../Hooks/useFetch';

type IDataContext = {
  data: ISale[] | null;
  loading: boolean;
  error: string | null;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
};

type ISale = {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartao';
  data: string;
  parcelas: number | null;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
};

function getDateAnyDaysAgo(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() - days);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [startDate, setStartDate] = React.useState(getDateAnyDaysAgo(30));
  const [endDate, setEndDate] = React.useState(getDateAnyDaysAgo(0));

  const { data, error, loading } = useFetch<ISale[]>(
    `https://data.origamid.dev/vendas/?inicio=${startDate}&final=${endDate}`,
  );

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
