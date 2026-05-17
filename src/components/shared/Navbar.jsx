
import { NavLink } from 'react-router';
import logoImg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import MyNavLink from './MyNavLink';

const Navbar = () => {
    return (
       <nav className='shadow'>
        <div className='flex justify-between gap-4 items-center py-[8px] container mx-auto'>
       <img src={logoImg} alt ='Logo' className='w-12' />
       <ul className='flex justify-between gap-2 items-center'>

        <li>
          <MyNavLink to={'/'}>Home</MyNavLink>
        
        </li>

        <li>
            <MyNavLink to={'/apps'}>Apps</MyNavLink>
            {/* <MyNavLink to={'/apps'} className={'text-yellow-400'}>Apps</MyNavLink> */}
        </li>

        <li>
            <MyNavLink to={'/installedApps'}>Installation</MyNavLink>
            </li>

       </ul>
       <button className="btn bg-purple-500 text-white"> <FaGithub />Contribute</button>
       </div>
       </nav>
    );
};

export default Navbar;