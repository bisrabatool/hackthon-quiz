import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function CustomLabels() {
  return (
    <BarChart
      series={[
        { data: [4, 2, 5, 4, 1], stack: 'A', label: 'Quiz 1' },
        { data: [2, 8, 1, 3, 1], stack: 'A', label: 'Quiz 2' },
        { data: [14, 6, 5, 8, 9], label: 'Quiz 3' },
      ]}
      colors={['#21A7A9']} 
      barLabel={(item, context) => {
        if ((item.value ?? 0) > 10) {
          return 'High';
        }
        return context.bar.height < 60 ? null : item.value?.toString();
      }}
      width={600}
      height={350}
    />
  );
}
