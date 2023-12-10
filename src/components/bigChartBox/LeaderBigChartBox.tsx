import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    document: 4000,
    good: 2400,
    // electronic: 2400,
  },
  {
    name: "Mon",
    document: 3000,
    good: 1398,
    // electronic: 2210,
  },
  {
    name: "Tue",
    document: 2000,
    good: 9800,
    // electronic: 2290,
  },
  {
    name: "Wed",
    document: 2780,
    good: 3908,
    // electronic: 2000,
  },
  {
    name: "Thu",
    document: 1890,
    good: 4800,
    // electronic: 2181,
  },
  {
    name: "Fri",
    document: 2390,
    good: 3800,
    // electronic: 2500,
  },
  {
    name: "Sat",
    document: 3490,
    good: 4300,
    // electronic: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Hàng nhận trong tuần</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            /> */}
            <Area
              type="monotone"
              dataKey="good"
              stackId="1"
              stroke="#0088FE"
              fill="#0088FE"
            />
            <Area
              type="monotone"
              dataKey="document"
              stackId="1"
              stroke="#ffb026"
              fill="#ffb026"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
