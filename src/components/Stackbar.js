import React from "react";
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import jsPDF from "jspdf";
import "jspdf-autotable";
const data = {
  labels: [
    "HAMID MIR",
    "ALINA FAROOQ",
    "ZAINAB ABBAS",
    "FAKHAR-E-ALAM",
    "AFTAB IQBAL",
    "ALYY KHAN",
    "RAHAT KAZMI",
    "SHEHZAD ROY",
    "GHAZI SALAHUDDIN",
    "ZAKIR QUERSHI",
    "SAHIR LODHI",
    "RABAB HASHIM",
    "HINA DILPAZEER",
    "SAAD HAROON",
    "SADAF JABBAR",
    "SABIR SHAKIR",
    "SHAHZEB KHANZADA",
    "DR SHAHID MASOOD",
    "IMRAN KHAN",
    "HASSAN NISAR",
    "MUBASHIR LUQMAN",
    "TALAT HUSSAIN",
  ],
  datasets: [
    {
      label: "# Positivity",
      data: [
        40,
        30,
        25,
        65,
        48,
        43,
        60,
        70,
        75,
        35,
        48,
        43,
        40,
        30,
        25,
        65,
        100,
        100,
        100,
        30,
        75,
        65,
        48,
        57,
        40,
        70,
        75,
        35,
        100,
        0,
        60,
        70,
        25,
        65,
        52,
        43,
      ],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "# NEGATIVITY",
      data: [
        60,
        70,
        75,
        35,
        52,
        57,
        40,
        30,
        25,
        65,
        52,
        57,
        60,
        70,
        75,
        35,
        0,
        0,
        0,
        70,
        25,
        35,
        52,
        43,
        60,
        30,
        25,
        65,
        0,
        100,
        40,
        30,
        75,
        35,
        48,
        57,
      ],
      backgroundColor: "rgb(54, 162, 235)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const StackedBar = () => {
    const handleClick=async()=>{
        const {logoImage} = window['config']

        const pdf = new jsPDF("p", "mm", "a4");
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(20);
        pdf.text(115, 23, "Dunya News - Transmission Report", "center");
        pdf.setFontSize(9);
        pdf.text(
            115,
            30,
            "Generated At: Thursday, April 1, 2021 10:52:41 AM",
            "center"
            );
            pdf.line(200, 39, 10, 39);
    
            pdf.setLineWidth(1);
    
            pdf.setLineWidth(1);
            pdf.setFontSize(12);
            pdf.text(10, 45, "Report from: ");
            pdf.setTextColor(0, 0, 139);
            pdf.setFontSize(12);
            pdf.text(35, 45, "Thu, Jan 28, 2021 2:30:00 PM");
            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(12);
            pdf.text(94, 45, "to: ");
            pdf.setTextColor(0, 0, 139);
            pdf.setFontSize(12);
            pdf.text(100, 45, "Thu, Jan 28, 2021 4:59:59 PM");
            //
            pdf.setTextColor(0, 0, 0);
            pdf.text(10, 52, "Report Duration: ");
            pdf.setTextColor(0, 0, 139);
            pdf.setFontSize(12);
            pdf.text(43, 52, "2h 29m 59s");
            //imahes
            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(15);
            pdf.text(100, 70, "Graphical Representation of Biasness of Anchors / Hosts (02-03-2021)", "center");
            const chartOne = document.getElementById("chart-one");
            const ChartOneBase = await chartOne.toDataURL("image/png", 1.0);
            const chartTwo = document.getElementById("chart-two");
            const chartTwoBase =await chartTwo.toDataURL("image/png", 2.0);
     
            pdf.addImage(logoImage, "PNG", 10, 8, 25, 30);
            pdf.addImage(ChartOneBase, 'JPEG', 15, 80, 170,85);
            pdf.addImage(chartTwoBase, 'JPEG', 15, 170, 170,85);
            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(15);
            pdf.text(100, 265, "Channel Monitored:", "center");
            pdf.setTextColor(0, 0, 0);
          
            pdf.setFontSize(12);
            
            pdf.text(100, 275, "Geo, ARY, Samaa, Hum, Dunya, 24, Abb Takk,:", "center");
            
            pdf.save("canvas.pdf");
            
        // pdf.addImage(imgData, 'JPEG', 0, 150);
        // console.log(pageHeight, pageWidth);
    }
  return( <>
    <div className="header">
      <h1 className="title">Stacked Bar Chart</h1>
      <button onClick={handleClick}>Generate PDF</button>
    </div>
    <div
      style={{
        minWidth: "100%",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div style={{ width: "800px" }}>
        <Bar data={data} options={options}  id="chart-one"/>
      </div>
      <div style={{ width: "800px" }}>
        <Bar data={data} options={options} id="chart-two"/>
      </div>
    </div>

  </>)
 
};

export default StackedBar;
