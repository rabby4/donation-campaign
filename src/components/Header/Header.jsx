import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="z-50 relative">
            <div className="max-w-7xl mx-auto">
                <div className="navbar py-5 flex-col md:flex-row">
                    <div className="flex-1 mb-5 md:mb-0">
                        <Link to='/'><img src={'https://i.ibb.co/rvRss5b/Logo.png'} alt="donation-campaign" className="w-40" /></Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu-horizontal gap-10 px-1 text-base font-semibold">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 border-b-2 border-red-500" : ""}
                                > Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 border-b-2 border-red-500" : ""}
                                > Donation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-500 border-b-2 border-red-500" : ""}
                                > Statistics
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;