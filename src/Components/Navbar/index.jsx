import { NavLink } from "react-router-dom"

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    {/* <NavLink 
                    to='/'
                    >
                        Shopi
                    </NavLink> */}
                    ✨
                </li>
                
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    juandiegouzmanjaimes11@gmail.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Sign In
                    </NavLink>
                </li>
                <i>
                    🛒 0
                </i>
            </ul>
        </nav>
    )
}

export default Navbar