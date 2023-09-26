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
            <div className="">

                <div className="flex justify-center flex-col relative">
                    <img src={donation.image} alt="" className=" h-[600px] rounded-2xl" />
                    <div className="w-full bg-black bg-opacity-50 rounded-b-2xl mx-auto p-10 absolute bottom-0">
                        <button onClick={handleDonation} className="btn">Donate ${donation.price}</button>
                    </div>
                </div>
                <div className="my-12">
                    <h2 className="text-4xl mb-5 font-bold">{donation.title}</h2>
                    <p>{donation.description}</p>
                </div>


            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DonationDetails;