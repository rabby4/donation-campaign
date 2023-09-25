// import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Donations from "../Donations/Donations";
// import DonationCard from "../DonationCard/DonationCard";

const Home = () => {

    // const donations = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <section className="container mx-auto py-20">
                <Donations></Donations>
                {/* <div className="grid grid-cols-4 gap-5">
                    {
                        donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                    }
                </div> */}
            </section>
        </div>
    );
};

export default Home;