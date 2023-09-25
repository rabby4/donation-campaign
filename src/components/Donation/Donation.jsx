import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonations } from "../Utility/setDonation";
import DonatedCard from "../DonatedCard/DonatedCard";


const Donation = () => {
    const donations = useLoaderData();
    const [donatedItem, setDonatedItem] = useState()

    useEffect(() => {
        const setDonations = getDonations()
        if (setDonations.length > 0) {
            const addedDonations = donations?.filter(donation => setDonations.includes(donation.id))
            setDonatedItem(addedDonations)
        }
    }, [])
    return (
        <div>
            <section className="container mx-auto mt-24">
                <div className="grid grid-cols-2 gap-10">
                    {
                        donatedItem?.map(donate => <DonatedCard key={donate.id} donate={donate}></DonatedCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Donation;