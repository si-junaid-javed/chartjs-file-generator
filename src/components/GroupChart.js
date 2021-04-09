import React from 'react'
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import 'chartjs-plugin-datalabels';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Base64 } from 'js-base64';
const value = {
    labels: ['0'],
    datasets: [
      {
        
        data: [80],
        backgroundColor: 'rgb(255, 99, 132)',
        
      },
      {
       
        data: [ 100],
        backgroundColor: 'rgb(54, 162, 235)',
     
      },
      {
        
        data: [10],
        backgroundColor: 'rgb(75, 192, 192)',
        
      },
    ],
  }
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
    
        borderWidth: 0,
       
      },
    ],
  }

const options = {
  scales: {
    yAxes: [
        
      {
        gridLines: {
            display: false,
          },
        ticks: {
          beginAtZero: true,
          display:false
        },
      },
    ],
    xAxes: [{
        gridLines: {
            display: false,
          },
   
    }]
    
  },
 
  plugins: {
    datalabels: {
        color: '#ffffff',
        formatter: function (value) {
          return Math.round(value) + '%';
        },
        font: {
          weight: 'bold',
          size: 30,
        },
       
      },
     
     
    },
    legend: {
        display: false,
    }
        
}


const GroupedBar = () => {
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
            // pdf.text(100, 70, "Graphical Representation of Biasness of Anchors / Hosts (02-03-2021)", "center");
            const chartOne = document.getElementById("chart-one");
            const ChartOneBase = await chartOne.toDataURL("image/png", 1.0);
            const chartTwo = document.getElementById("chart-two");
            const chartTwoBase =await chartTwo.toDataURL("image/png", 1.0);
     
            pdf.addImage(logoImage, "PNG", 10, 8, 25, 30);
            pdf.addImage(ChartOneBase, 'png', 15, 75, 180,90);
          
            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(15);
            pdf.text(100, 265, "Channel Monitored:", "center");
            pdf.setTextColor(0, 0, 0);
          
            pdf.setFontSize(12);
            
            pdf.text(100, 275, "Geo, ARY, Samaa, Hum, Dunya, 24, Abb Takk,:", "center");
            //layout
            pdf.setLineWidth(0.5)
            pdf.setFillColor(211,211,211)
            pdf.rect(10, 60, 190, 10, 'FD')
            pdf.text(100, 67, "Geo, ARY, Samaa, Hum, Dunya, 24, Abb Takk,:", "center");
          
             // layout
            pdf.setFillColor(211, 211, 211)
            pdf.rect(10, 170, 190, 10, 'FD')
            pdf.text(100, 176, "GEO NEW", "center");
            pdf.setFillColor(255, 255, 255)
            pdf.rect(10, 180, 38, 10, 'FD')
            pdf.addImage(chartTwoBase, 'JPEG', 10, 200, 60,35);
            pdf.text(25, 186, "GEO NEW");
            pdf.setFillColor(255, 255, 255)
            pdf.rect(48, 180, 38, 10, 'FD')
            pdf.text(25, 186, "GEO NEW");
            pdf.setFillColor(255, 255, 255)
            pdf.rect(86, 180, 38, 10, 'FD')
            pdf.text(25, 186, "GEO NEW");
            pdf.setFillColor(255, 255, 255)
            pdf.rect(124, 180, 38, 10, 'FD')
            pdf.text(25, 186, "GEO NEW");
            pdf.setFillColor(255, 255, 255)
            pdf.rect(162, 180, 38, 10, 'FD')
            pdf.text(25, 186, "GEO NEW");
            pdf.save("canvas.pdf");
        }
    return(
  <>
    <div className='header'>
      <h1 className='title'>Grouped Bar Chart</h1>
        <button onClick={handleClick}>Generate PDF</button>
    </div>
    <div >
    <Pie data={data} id="chart-one" />
    <Bar data={value} options={options}  id="chart-two"/>
    </div>
  </>
)}

export default GroupedBar