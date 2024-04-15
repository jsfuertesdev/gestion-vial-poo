'use client'
import { useState, useEffect } from 'react';

function PieChart() {
    const [pieChartData, setPieChartData] = useState('');

    const fetchPieChartData = () => {
        fetch('http://127.0.0.1:5000/api/pie-chart')
            .then(response => response.json())
            .then(data => setPieChartData(data.pie_chart))
            .catch(error => console.error('Error fetching pie chart data:', error));
    };

    useEffect(() => {
        fetchPieChartData(); // Fetch inicial al cargar el componente

        const intervalId = setInterval(() => {
            fetchPieChartData(); // Fetch periódico cada 5 segundos (puedes ajustar el intervalo según tus necesidades)
        }, 10000); // Intervalo de 5 segundos

        return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    }, []);

    return (
        <div className="flex flex-col items-center gap-3">
            {console.log(pieChartData)}
            {pieChartData && <img src={`data:image/png;base64,${pieChartData}`} alt="Pie Chart" />}
        </div>
    );
}

export default PieChart;

