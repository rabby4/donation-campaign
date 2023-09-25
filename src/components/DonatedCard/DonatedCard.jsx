

const DonatedCard = ({ donate }) => {

    const { title, image } = donate;

    return (
        <div>
            <section>
                <div className="card card-side">
                    <figure><img src={image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonatedCard;