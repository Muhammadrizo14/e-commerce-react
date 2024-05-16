import classes from './Sidebar.module.css';
import SideBarItem from './SidebarItem/SidebarItem';
import { useState } from 'react';
import MenuIcon from '../../../UI/icons/MenuIcon/MenuIcon';
import ArrowLeftIcon from '../../../UI/icons/ArrowLeftIcon/ArrowLeftIcon';
// import OrderIcon from '../../UI/icons/OrderIcon/OrderIcon';
import ProductIcon from '../../../UI/icons/ProductIcon/ProductIcon';
import CategoryIcon from '../../../UI/icons/CategoryIcon/CategoryIcon';
import { PATHS } from '../../../../constants/routes';
import OrderIcon from '../../../UI/icons/OrderIcon/OrderIcon';
import {useNavigate} from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const sidebarHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const exit = ()=> {
    localStorage.removeItem('accessToken')
    navigate('/')
  }

  return (
    <div className={`${classes.sidebar} ${isOpen && classes.open}`}>
      <button className={`${classes['toggle-btn']} ${isOpen && classes.opened}`} onClick={sidebarHandler}>
        {isOpen ? <ArrowLeftIcon /> : <MenuIcon />}
      </button>

      <nav className={classes.navigation}>
        <ul className={`${isOpen && classes['list-opened']} ${classes.list}`}>
          <SideBarItem isOpen={isOpen} title={'Заказы'} icon={<OrderIcon />} link={PATHS.orders} />
          <SideBarItem isOpen={isOpen} title={'Товары'} icon={<ProductIcon />} link={PATHS.products} />
          <SideBarItem isOpen={isOpen} title={'Настройки'} icon={<CategoryIcon />} link={PATHS.settings} />
        </ul>
        <button onClick={()=> exit()} className={classes.exit}><svg fill='#fff' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 21h8v-2l1-1v4h-9v2l-10-3v-18l10-3v2h9v5l-1-1v-3h-8v18zm10.053-9l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z"/></svg></button>
      </nav>
    </div>
  );
};

export default Sidebar;
