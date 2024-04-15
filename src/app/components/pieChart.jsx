// components/PieChart.js
'use client'
import { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PieChartNext = ({ labels, sizes }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Referencia para almacenar la instancia del gráfico
    const [isRebuildingCanvas, setIsRebuildingCanvas] = useState(false);

    useEffect(() => {
      const loadChart = async () => {
        const { Chart } = await import('chart.js');
        if (chartRef && chartRef.current) {
          // Destruir el gráfico anterior si existe
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }

          // Ajustar el tamaño del canvas directamente
          chartRef.current.width = 300; // Ancho del canvas
          chartRef.current.height = 300; // Alto del canvas

          const ctx = chartRef.current.getContext('2d');
          const newChart = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: labels,
              datasets: [{
                data: sizes,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Puedes personalizar los colores aquí
              }],
            },
            options: {
              responsive: false,
              maintainAspectRatio: false, // Asegura que el gráfico no mantenga su relación de aspecto original
              title: {
                display: true,
                text: 'Ejemplo de Gráfico de Pie',
              },
            },
          });

          // Almacenar la instancia del nuevo gráfico
          chartInstance.current = newChart;
        }
      };
      loadChart();
    }, [labels, sizes, isRebuildingCanvas]); // Dependencias para el efecto

    // Función para manejar la eliminación y recreación del canvas
    const rebuildCanvas = () => {
      setIsRebuildingCanvas(true);
      // Aquí puedes agregar lógica adicional si es necesario
    };

    // Asegúrate de llamar a rebuildCanvas cuando sea necesario, por ejemplo, en respuesta a cambios en props o estado

    return (
      <>
        {isRebuildingCanvas ? null : <canvas ref={chartRef} />}
        {/* Aquí puedes agregar botones u otros elementos para controlar la recreación del canvas */}
      </>
    );
};

export default PieChartNext;
