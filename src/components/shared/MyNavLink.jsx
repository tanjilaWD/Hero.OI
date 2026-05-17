import { NavLink } from "react-router"


const MyNavLink = ({to, children, className}) => {
    return (
       <NavLink
        to={to}
         className={({isActive}) => ` font-semibold pb-2 ${className} ${isActive ? 'text-purple-400 border-b border-b-purple-500' : ''}` } >
         {children}
         </NavLink>
    );
};

export default MyNavLink;