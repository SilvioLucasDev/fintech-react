import { NavLink } from 'react-router-dom';
import { ISale } from '../Context/DataContext';

const SaleItem = ({ sale }: { sale: ISale }) => {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${sale.id}`} style={{ fontFamily: 'monospace' }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  );
};

export default SaleItem;
