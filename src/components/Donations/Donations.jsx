import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const Donations = () => {

    const [donations, setDonations] = useState();

    useEffect(() => {
        fetch('/donations.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-14 md:mx-16 lg:mx-0">
                {
                    donations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>

        </div>
    );
};

export default Donations;