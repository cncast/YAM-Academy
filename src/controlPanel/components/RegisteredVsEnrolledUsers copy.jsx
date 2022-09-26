  import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js';
  import { useMemo } from 'react';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler
  );
  const defaultLabels = ['January', 'February', 'March', 'April'];
  const defaultDatasets = [{
      label: 'Registros',
      data: [23, 54, 23, 12],
      tension: 0.3,
      borderColor: '#06A1E0',
      pointRadius: 6,
      pointBackgroundColor: '#06A1E0',
      backgroundColor: '#8BD0EC'

  },{
      label: 'Matriculas',
      data: [3, 12, 4, 8],
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
        <Line data={data} options={options} />
    );
  }
  