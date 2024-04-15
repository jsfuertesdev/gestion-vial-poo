'use client'
import Image from "next/image";
import PieChart from "./pie";
import ButtonLinks from "./botones";
import AlertaPase from "./alertaPase";
import Conductores from "./conductores";
import Layout from "./components/Layout";
import PieChartNext from "./components/pieChart";

export default function Home() {
  const labels = ['Vigente', 'Vencido', 'Proximo a vencer'];
  const sizes = [50, 10, 10];
  return (
    <div className="flex items-center gap-3">
        <ButtonLinks/>
        {/* <PieChart/> */}
        <PieChartNext labels={labels} sizes={sizes} />
        <Layout/>
    </div>
  );
}
