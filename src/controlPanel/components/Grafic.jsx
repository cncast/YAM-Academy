import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js';
import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler
);
const defaultLabels = ['January', 'February', 'March', 'April'];
const defaultDatasets = [{
    label: 'Frances',
    data: [3, 8, 21, 14],
    tension: 0.3,
    borderColor: '#06A1E0',
    pointRadius: 6,
    pointBackgroundColor: '#06A1E0',
    backgroundColor: '#8BD0EC'

},{
    label: 'Ingles',
    data: [12, 17, 15, 18],
    tension: 0.3,
    borderColor: '#1ACA7A',
    pointRadius: 6,
    pointBackgroundColor: '#1ACA7A',
    backgroundColor: '#8BECC0'

}];
const options = {
  responsive: true,
  fill: false
}
export const Grafic = ({labels = defaultLabels, datasets = defaultDatasets}) => {
  const data = useMemo(() => {
      return {
          datasets: datasets,
          labels
      }
  }, [])
  return (
      <Line className='mt-4' data={data} options={options} />
  );
}
