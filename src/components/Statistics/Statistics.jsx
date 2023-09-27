import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, } from "recharts";
import { getDonations, } from "../Utility/setDonation";

const Statistics = () => {

    const totalDonate = useLoaderData();
    const donated = getDonations();

    let donatedValue = ((donated.length / totalDonate.length) * 100);
    let dueDonation = Math.abs(donatedValue - 100);
    let donatedFinalValue = parseFloat(donatedValue.toFixed(1));
    let dueFinalDonation = parseFloat(dueDonation.toFixed(1))


    const data = [
        { name: "Your Donation", value: donatedFinalValue },
        { name: "Total Donation", value: dueFinalDonation }
    ];

    const COLORS = ["#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };



    return (
        <div>
            <section className="max-w-7xl mx-auto flex justify-center mt-24">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>

            </section>

            <div className="flex justify-around flex-col md:flex-row max-w-2xl mx-auto">
                <div className="relative mx-auto mt-5 flex w-52 text-center">
                    <p>Your Donation</p>
                    <span className="w-20 h-2 bg-[#FFBB28] absolute right-0 mt-[10px]"></span>
                </div>
                <div className="relative mx-auto mt-5 flex w-52">
                    <p>Total Donation</p>
                    <span className="w-20 h-2 bg-[#FF8042] absolute right-0 mt-[10px]"></span>
                </div>
            </div>


        </div>
    );
};

export default Statistics;