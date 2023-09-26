// import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Donations from "../Donations/Donations";
// import DonationCard from "../DonationCard/DonationCard";

const Home = () => {

    // const donations = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <section className="max-w-7xl mx-auto py-20">
                <Donations></Donations>
            </section>
        </div>
    );
};

export default Home;