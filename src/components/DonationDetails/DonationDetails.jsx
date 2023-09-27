import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "../Utility/setDonation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id)

    const donation = donations?.find(donation => donation.id === intId);

    const handleDonation = () => {
        saveDonations(intId)
        toast('donation added')
    }


    return (
        <div className="max-w-7xl mx-auto mt-12">
            <div className="mx-5 md:mx-10 lg:mx-0">

                <div className="flex justify-center flex-col relative">
                    <img src={donation.image} alt="" className="h-[200px] md:h-[400px] lg:h-[600px] rounded-2xl" />
                    <div className="w-full bg-black bg-opacity-50 rounded-b-2xl mx-auto p-5 md:p-10 absolute bottom-0">
                        <button onClick={handleDonation} className="btn text-white border-0 text-xs md:text-base" style={{ background: donation.text_button_bg_color }}>Donate ${donation.price}</button>
                    </div>
                </div>
                <div className="my-12">
                    <h2 className="lg:text-4xl md:text-3xl text-2xl mb-5 font-bold">{donation.title}</h2>
                    <p className="md:text-base text-sm">{donation.description}</p>
                </div>


            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DonationDetails;