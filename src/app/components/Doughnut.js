import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','grey']; 

const dough = ({ pieChartData }) => {
  const labelStyle = {
    fontSize: '8px',
  };
  return (
    <div className='hii' style={{position:'absolute', width: '100%', height: '300px' }}>
      
      <ResponsiveContainer width='100%' height={200}>
      <PieChart >
        <Pie
          data={pieChartData}
          dataKey="mcap"
          innerRadius={45}
          outerRadius={78}
          // cx={90}
          // cy={90}
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
      </ResponsiveContainer>
    </div>
  );
};

export default dough;