import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonations } from "../Utility/setDonation";
import DonatedCard from "../DonatedCard/DonatedCard";
import './donation.css'


const Donation = () => {
    const donations = useLoaderData();
    const [donatedItem, setDonatedItem] = useState()
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const setDonations = getDonations()
        if (setDonations.length > 0) {
            const addedDonations = donations?.filter(donation => setDonations.includes(donation.id))
            setDonatedItem(addedDonations)
        }
    }, [])

    console.log(donatedItem)


    return (
        <div>
            <section className="max-w-7xl lg:mx-auto mt-24 md:mx-14 mx-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {
                        isShow ? donatedItem?.map(donate => <DonatedCard key={donate.id} donate={donate}></DonatedCard>) : donatedItem?.slice(0, 4).map(donate => <DonatedCard key={donate.id} donate={donate}></DonatedCard>)
                    }
                </div>
                <div className={`text-center ${donatedItem?.length <= 4 ? 'hidden' : ''}`}>
                    <button className="btn my-10 bg-green-700 hover:bg-green-600 text-white" onClick={() => setIsShow(!isShow)}>{isShow ? 'Show Less' : "Show All"}</button>
                </div>
            </section>
        </div>
    );
};

export default Donation;