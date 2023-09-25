import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const Donations = () => {

    const [donations, setDonations] = useState();

    useEffect(() => {
        fetch('../../../public/donations.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    return (
        <div>

            <div className="grid grid-cols-4 gap-5">
                {
                    donations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>

        </div>
    );
};

export default Donations;