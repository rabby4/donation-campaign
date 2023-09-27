import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Donations from "../Donations/Donations";
import { useState } from "react";
// import DonationCard from "../DonationCard/DonationCard";

const Home = () => {

    const donations = useLoaderData();

    const [searchValue, setSearchValue] = useState(donations);

    const handleSearch = (e) => {
        e.preventDefault();
        const search = document.getElementById('searchInput').value;

        if (search.length) {
            const filterDonations = donations.filter(donation => donation.category.toLowerCase() === search.toLowerCase());
            if (filterDonations) {
                setSearchValue(filterDonations)
            }
        } else {
            setSearchValue(donations)
        }
    }

    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <section className="max-w-7xl mx-auto py-20">
                <Donations searchValue={searchValue}></Donations>
            </section>
        </div>
    );
};

export default Home;