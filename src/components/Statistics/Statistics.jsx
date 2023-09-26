import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { getDonations, saveDonations } from "../Utility/setDonation";

const Statistics = () => {

    const totalDonate = useLoaderData();
    const donated = getDonations();

    let donatedValue = ((donated.length / totalDonate.length) * 100);
    let dueDonation = Math.abs(donatedValue - 100);
    let donatedFinalValue = parseFloat(donatedValue.toFixed(1));
    let dueFinalDonation = parseFloat(dueDonation.toFixed(1))


    const data = [
        { name: "Group A", value: donatedFinalValue },
        { name: "Group B", value: dueFinalDonation }
    ];

    const COLORS = ["#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
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
            <section className="max-w-7xl mx-auto text-center">
                <PieChart width={600} height={600}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip></Tooltip>
                </PieChart>
                <div>
                    <span>span</span>
                </div>
            </section>



        </div>
    );
};

export default Statistics;