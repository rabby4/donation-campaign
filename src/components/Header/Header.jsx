

const Header = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="navbar bg-base-100 py-5">
                    <div className="flex-1">
                        <img src="/src/assets/logo/Logo.png" alt="donation-campaign" className="w-40" />
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-base">
                            <li><a>Home</a></li>
                            <li><a>Donation</a></li>
                            <li><a>Statistics</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;