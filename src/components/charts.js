import React from 'react';
import { Doughnut ,Bar, Pie } from 'react-chartjs-2';
import jsPDF from "jspdf";
import 'jspdf-autotable'
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
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}
const Charts = () => {
    const test = () =>{
        const chart = document.querySelector('#doughnut')
        const hello = chart.toDataURL("image/png",1.0)
        const pie = document.getElementById('barchart')
        const piechart = pie.toDataURL("image/png",2.0)
        console.log(pie,hello)
        const pdf = new jsPDF("p", "mm", "a4");
        // pdf.text(100, 20, 'Hello World', 'center');
        pdf.setTextColor(139,0,0)
        pdf.rect(20, 20, 170, 10)
        pdf.text(100,27,"This is the text for the heading","center")
        const pageWidth = Math.floor(pdf.internal.pageSize.getWidth());
        const pageHeight = Math.floor(pdf.internal.pageSize.getHeight());
        const widthRatio = pageWidth / chart.width;
        const heightRatio = pageHeight / chart.height;
        const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
        const canvasWidth = chart.width * ratio;
    const canvasHeight = chart.height * ratio;

    // pdf.addImage(hello, 'JPEG', 0, 30, canvasWidth, canvasHeight);
    pdf.addImage(hello, 'JPEG', 30, 40, canvasWidth, canvasHeight);
    pdf.addImage(piechart, 'JPEG', 0, 150, canvasWidth, canvasHeight);
        console.log(pageHeight,pageWidth)
        pdf.setFontSize(20);
       
        pdf.autoTable({
           
            margin: {horizontal:20,top: 10},
            startY: 35,
            columnStyles: { america: { align: 'center' } }, // European countries centered
            body: [
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
            

            ],
            columns: [
              { header: 'Europe', dataKey: 'europe' },
              { header: 'Asia', dataKey: 'asia' },
            ],
            columnStyles: {
                0: {cellWidth: 30},
                1: {cellWidth: 30},
              
                
              }
          })
      
        pdf.save('canvas.pdf');
    }
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
    }
    const bardata = {
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: '# of Red Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: '# of Blue Votes',
          data: [2, 3, 20, 5, 1, 4],
          backgroundColor: 'rgb(54, 162, 235)',
        },
        {
          label: '# of Green Votes',
          data: [3, 10, 13, 15, 22, 30],
          backgroundColor: 'rgb(75, 192, 192)',
        },
      ],
    }
    return ( 
        <>
      <Pie data={data} id="doughnut"/>
      
      <Bar  width="150" height="100" data={bardata} options={options} id="barchart"/>
<button onClick={test}>Click</button>
</>
     );
}
 
export default Charts;