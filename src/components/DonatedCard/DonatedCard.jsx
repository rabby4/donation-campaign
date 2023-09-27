import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const DonatedCard = ({ donate }) => {

    const { id, image, title, category, category_bg_color, card_bg_color, text_button_bg_color, price } = donate;

    return (
        <div>
            <section>
                <div className="card card-side px-0 h-[195px] items-center" style={{ background: card_bg_color }}>
                    <figure className=""><img src={image} alt="Movie" className="w-full" /></figure>
                    <div className="card-body p-2 md:p-8">
                        <div className="flex">
                            <div className="py-1 px-3 font-semibold text-xs md:text-base rounded" style={{ background: category_bg_color, color: text_button_bg_color }}>{category}</div>
                        </div>
                        <h2 className="card-title text-base md:text-xl">{title}</h2>
                        <h4 className="font-medium text-xs md:text-base" style={{ color: text_button_bg_color }}>${price}</h4>
                        <div className="">
                            <Link to={`/donationDetails/${id}`}>
                                <button className=" text-white py-2 px-2 md:px-6 rounded-lg" style={{ background: text_button_bg_color }}>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

DonatedCard.propTypes = {
    donate: PropTypes.object
}

export default DonatedCard;