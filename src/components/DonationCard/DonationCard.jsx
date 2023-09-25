
import { Link } from "react-router-dom";


const DonationCard = ({ donation }) => {

    const { id, image, title, description, category, category_bg_color, card_bg_color, text_button_bg_color, price } = donation;



    return (
        <div>
            <div className="hidden"></div>
            <Link to={`/donationDetails/${id}`}>
                <div className={`card shadow`}>
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>{description}</p>
                        <h2 className="card-title">{title}</h2>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default DonationCard;