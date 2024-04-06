import summary from '../assets/icons/summary.svg';
import sale from '../assets/icons/sale.svg';
import webhooks from '../assets/icons/webhooks.svg';
import settings from '../assets/icons/settings.svg';
import contact from '../assets/icons/contact.svg';
import exit from '../assets/icons/exit.svg';
import FintechSVG from '../assets/FintechSVG';

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={summary} alt="" />
          </span>
          <a href="">Resumo</a>
        </li>
        <li>
          <span>
            <img src={sale} alt="" />
          </span>
          <a href="">Vendas</a>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a>Webhooks</a>
        </li>
        <li>
          <span>
            <img src={settings} alt="" />
          </span>
          <a>Configurações</a>
        </li>
        <li>
          <span>
            <img src={contact} alt="" />
          </span>
          <a>Contatos</a>
        </li>
        <li>
          <span>
            <img src={exit} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
