

const DonatedCard = ({ donate }) => {

    const { id, image, sqr_img, title, category, category_bg_color, card_bg_color, text_button_bg_color, price } = donate;

    return (
        <div>
            <section>
                <div className="card card-side px-0 h-[195px] items-center" style={{ background: card_bg_color }}>
                    <figure><img src={image} alt="Movie" className="w-full" /></figure>
                    <div className="card-body">
                        <div className="flex">
                            <div className="py-1 px-3 font-semibold rounded" style={{ background: category_bg_color, color: text_button_bg_color }}>{category}</div>
                        </div>
                        <h2 className="card-title">{title}</h2>
                        <h4 className="font-medium" style={{ color: text_button_bg_color }}>${price}</h4>
                        <div className="">
                            <button className=" text-white py-2 px-6 rounded-lg" style={{ background: text_button_bg_color }}>View Details</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonatedCard;