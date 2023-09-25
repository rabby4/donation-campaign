import { useLoaderData } from "react-router-dom";


const Statistics = () => {

    const totalDonate = useLoaderData();
    console.log(totalDonate)

    return (
        <div>
            <h2 className="text-6xl">this is Statistics page</h2>
        </div>
    );
};

export default Statistics;