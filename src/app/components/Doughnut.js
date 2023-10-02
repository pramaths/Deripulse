import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','grey']; 

const dough = ({ pieChartData }) => {
  return (
    <div style={{ position: 'relative', width: 130, height: 135 }}>
      <ResponsiveContainer>
      <PieChart width={180} height={185}>
        <Pie
          data={pieChartData}
          dataKey="mcap"
          innerRadius={60}
          outerRadius={90}
          fill="#82ca9d"
          isAnimationActive={true}
        >
          {pieChartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
      <PieChart
        width={180}
        height={185}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <Pie
          data={[
            { name: "Inner", value: 1 },
            { name: "Inner", value: 1 },
            { name: "Inner", value: 1 },
            { name: "Inner", value: 1 },
            { name: "Inner", value: 1 },
            { name: "Inner", value: 1 },
            { name: "Inner", value: 1 },
            { name: "Inner", value: 1 },
            { name: "Inner", value: 1 },
          ]}
          dataKey="value"
          innerRadius={52}
          outerRadius={53}
          fill="transparent"
          paddingAngle={8}
          stroke="white"
          strokeWidth={1}
        />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default dough;