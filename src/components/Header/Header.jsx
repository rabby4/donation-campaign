import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="z-50 relative">
            <div className="max-w-7xl mx-auto">
                <div className="navbar py-5">
                    <div className="flex-1">
                        <img src="/src/assets/logo/Logo.png" alt="donation-campaign" className="w-40" />
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