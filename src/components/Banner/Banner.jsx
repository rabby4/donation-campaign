import PropTypes from 'prop-types';

const Banner = ({ handleSearch }) => {
    return (
        <section className=" h-[750px] bg-cover bg-center flex items-center -mt-[135px] md:-mt-[100px]" style={{ backgroundImage: "url(https://i.ibb.co/1ZYgd1R/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)" }}>
            <div className="bg-white bg-opacity-70 w-full h-full absolute"></div>
            <div className="container mx-auto text-center z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">I Grow By Helping People In Need</h2>
                <div className="join">
                    <input id="searchInput" className="input input-bordered join-item w-44 md:w-80" placeholder="Search here..." />
                    <button onClick={handleSearch} className="btn join-item bg-red-500 hover:bg-red-600 border-0 text-white px-6 md:px-8">Search</button>
                </div>
            </div>
        </section>
    );
};

Banner.propTypes = {
    handleSearch: PropTypes.func
}

export default Banner;