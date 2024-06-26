import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Area,
  YAxis,
} from "recharts";
import carStaticsData from "./carStatics";


const CarStatsChart = ({data}:any) => {
  return (
    <ResponsiveContainer className={"w-full"}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" stroke="#ddd" />

        {/* <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" /> */}
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />

        <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="month" /> */}
          <YAxis />
          <Tooltip />

        {/* <Area
          type="monotone"
          dataKey="week"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        /> */}
        <Area
          type="monotone"
          dataKey="count"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>

  //   <ResponsiveContainer width="100%" height="100%">
  //   <AreaChart
  //     width={500}
  //     height={400}
  //     data={carStaticsData}
  //     margin={{
  //       top: 10,
  //       right: 30,
  //       left: 0,
  //       bottom: 0,
  //     }}
  //   >
  //     <CartesianGrid strokeDasharray="3 3" />
  //     <XAxis dataKey="name" />
  //     <YAxis />
  //     <Tooltip />
  //     <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
  //   </AreaChart>
  // </ResponsiveContainer>
  );
};

export default CarStatsChart;
