

const Banner = () => {
    return (
        <div className=" h-[750px] bg-banner-bg-img bg-cover bg-white bg-center flex items-center -mt-[100px]">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold mb-10">I Grow By Helping People In Need</h2>
                <div className="join">
                    <input className="input input-bordered join-item w-80" placeholder="Search here..." />
                    <button className="btn join-item bg-red-500 hover:bg-red-600 border-0 text-white px-8">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;