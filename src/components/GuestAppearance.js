import React, { useEffect } from "react";
import { Doughnut, Bar, Pie } from "react-chartjs-2";

import jsPDF from "jspdf";
import "jspdf-autotable";


const data = {
  labels: ['Umer Ayub Khan', 'Hafeez Sheikh', 'Asad Umar', 'Razak Daud', 'Khusru Bakhtiyar', 'Hamad Azhar', 'Nadeem Baber',, 'Fakhar Unan'],
  datasets: [
    {
      label: 'Talk SHow / Channels',
      data: [12, 19, 3, 5, 2, 3,5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Media Talk',
      data: [2, 3, 20, 5, 1, 4,5, 2, 3],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    
  ],
}


 
const options = {
    scales: {
      yAxes: [
          
        {
         
          ticks: {
            beginAtZero: true,
           
          },
        },
      ],
      xAxes: [{
          gridLines: {
              display: false,
            },
           
                ticks: {
                    fontSize: 18
                }
         
     
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
            size: 20,
          },
         
        },
       
       
      },
      legend: {
  
     
        display: true,
        position: 'bottom',
        align: "center",
       
      
          labels: {
            padding: 15,
         
            fontColor: "#000",
           fontSize: 20,
         
          }
        }
    
          
  }

const GuestApperance = () => {
    const handleGenerate =async () =>{
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
            // const chartTwo = document.getElementById("chart-two");
            // const chartTwoBase =await chartTwo.toDataURL("image/png", 1.0);
     
            pdf.addImage(logoImage, "PNG", 10, 8, 25, 30);
            pdf.addImage(ChartOneBase, 'png', 10, 70, 180,90);
            
            
            let head = [
                [
                    {content: 'Umer Ayub Khan',colSpan: 2, styles: {halign: 'center', fillColor: [22, 160, 133]}}, 
                   
                ],
                ['Talk Show / Channels' , 'Media Talk'],
            ];
            
            pdf.autoTable({
                
                startY: 170,
                head: head,
                tableWidth:40,
                body: [
                    
                    ["data1"," " ],
                    ["data2"," " ],
                    [""," " ],
                    [""," " ],
                    [""," " ],
                
                ],
                columnStyles:{
                    1: { cellWidth: 20 },
                    2: { cellWidth: 20 },
                },
                theme: 'grid'
            });
            pdf.autoTable({
                margin: { horizontal: 60, top: 30 },
                startY: 170,
                head: head,
                tableWidth:40,
                body: [
                    
                    ["data1"," " ],
                    ["data2"," " ],
                    [""," " ],
                    [""," " ],
                    [""," " ],
                
                ],
                columnStyles:{
                    1: { cellWidth: 20 },
                    2: { cellWidth: 20 },
                },
                theme: 'grid'
            });
    
            pdf.autoTable({
                margin: { horizontal: 105, top: 30 },
                startY: 170,
                head: head,
                tableWidth:40,
                body: [
                    
                    ["data1"," " ],
                    ["data2"," " ],
                    [""," " ],
                    [""," " ],
                    [""," " ],
                
                ],
                columnStyles:{
                    1: { cellWidth: 20 },
                    2: { cellWidth: 20 },
                },
                theme: 'grid'
            });
            pdf.autoTable({
                margin: { horizontal: 150, top: 30 },
                startY: 170,
                head: head,
                tableWidth:40,
                body: [
                    
                    ["data1"," " ],
                    ["data2"," " ],
                    [""," " ],
                    [""," " ],
                    [""," " ],
                
                ],
                columnStyles:{
                    1: { cellWidth: 20 },
                    2: { cellWidth: 20 },
                },
                theme: 'grid'
            });
            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(15);
            pdf.text(100, 265, "Channel Monitored:", "center");
            pdf.setTextColor(0, 0, 0);
          
            pdf.setFontSize(12);
            
            pdf.text(100, 275, "Geo, ARY, Samaa, Hum, Dunya, 24, Abb Takk,:", "center");
      
            pdf.save("canvas.pdf");
    }
    return ( 
        <>
        <div className='header'>
        <h1 className='title'>Grouped Bar Chart</h1>
        <div className='links'>
            <button onClick={handleGenerate}>Generate File</button>
        </div>
      </div>
      <Bar data={data} options={options} id="chart-one"/>
      </>
     );
}
 
export default GuestApperance;