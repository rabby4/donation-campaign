
import { Link } from "react-router-dom";


const DonationCard = ({ donation }) => {

    const { id, image, title, category, category_bg_color, card_bg_color, text_button_bg_color } = donation;



    return (
        <div>
            <Link to={`/donationDetails/${id}`}>
                <div className={`card`} style={{ background: card_bg_color }}>
                    <figure><img src={image} alt="" /></figure>
                    <div className="card-body">
                        <div className="flex">
                            <div className="py-1 px-3 font-semibold rounded" style={{ background: category_bg_color, color: text_button_bg_color }}>{category}</div>
                        </div>
                        <h2 className={`card-title`} style={{ color: text_button_bg_color }}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default DonationCard;