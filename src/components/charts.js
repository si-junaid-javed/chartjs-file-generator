import React, { useEffect } from "react";
import { Doughnut, Bar, Pie } from "react-chartjs-2";

import jsPDF from "jspdf";
import "jspdf-autotable";


const data = {
  
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const Charts = () => {


  const test = () => {
    const {logoImage} = window['config']

    // const chart = document.querySelector("#doughnut");
    // const hello = chart.toDataURL("image/png", 1.0);
    // const pie = document.getElementById("barchart");
    // const piechart = pie.toDataURL("image/png", 2.0);
    // console.log(pie, hello);
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

    // const pageWidth = Math.floor(pdf.internal.pageSize.getWidth());
    // const pageHeight = Math.floor(pdf.internal.pageSize.getHeight());
    // const widthRatio = pageWidth / chart.width;
    // const heightRatio = pageHeight / chart.height;
    // const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
    // const canvasWidth = chart.width * ratio;
    // const canvasHeight = chart.height * ratio;

    pdf.addImage(logoImage, "JPEG", 10, 8, 25, 30);
    // pdf.addImage(hello, 'JPEG', 30, 40, canvasWidth, canvasHeight);
    // pdf.addImage(imgData, 'JPEG', 0, 150);
    // console.log(pageHeight, pageWidth);

    pdf.autoTable({
      margin: { horizontal: 10, top: 10 },
      startY: 65,
      // columnStyles: { america: { align: 'center' } }, // European countries centered
      body: [
        {
          channelname: "ARY NEWS",
          tshowt: `LAST ACHIEVEMENT OF 30 NOVEMBER (22:07)`,
          host: "Arshad Sharif",
          topic: "China",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "Dunya News",
          tshowt: "Mexico",
          topic: `Wave of Change...Problems of employees of Media institutions`,
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "ARY NEWS",
          tshowt: `LAST ACHIEVEMENT OF 30 NOVEMBER (22:07)`,
          topic: "China",
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "Dunya News",
          tshowt: "Mexico",
          topic: `Wave of Change...Problems of employees of Media institutions`,
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "ARY NEWS",
          tshowt: `LAST ACHIEVEMENT OF 30 NOVEMBER (22:07)`,
          host: "Arshad Sharif",
          topic: "China",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "Dunya News",
          tshowt: "Mexico",
          topic: `Wave of Change...Problems of employees of Media institutions`,
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "ARY NEWS",
          tshowt: `LAST ACHIEVEMENT OF 30 NOVEMBER (22:07)`,
          topic: "China",
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "Geo News",
          tshowt: "Mexico",
          topic: `Wave of Change...Problems of employees of Media institutions`,
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "ARY NEWS",
          tshowt: `LAST ACHIEVEMENT OF 30 NOVEMBER (22:07)`,
          topic: "China",
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "Geo News",
          tshowt: "Mexico",
          topic: `Wave of Change...Problems of employees of Media institutions`,
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "ARY NEWS",
          tshowt: `LAST ACHIEVEMENT OF 30 NOVEMBER (22:07)`,
          topic: "China",
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "Express News",
          tshowt: "Mexico",
          topic: `Wave of Change...Problems of employees of Media institutions`,
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "ARY NEWS",
          tshowt: `LAST ACHIEVEMENT OF 30 NOVEMBER (22:07)`,
          topic: "China",
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
        {
          channelname: "Express News",
          tshowt: "Mexico",
          topic: `Wave of Change...Problems of employees of Media institutions`,
          host: "Arshad Sharif",
          participants: `Moeed Pirzada (Co-Host)`,
        },
      ],
      columns: [
        { header: "Channal Name", dataKey: "channelname" },
        { header: "Talk Show & Time", dataKey: "tshowt" },
        { header: "Topic", dataKey: "topic" },
        { header: "Host/Hostess", dataKey: "host" },
        { header: "Participants", dataKey: "participants" },
      ],
      columnStyles: {
        0: { cellWidth: 30 },
        1: { cellWidth: 45 },
        2: { cellWidth: 45 },
        3: { cellWidth: 30 },
        4: { cellWidth: 30 },
      },
    });

    pdf.save("canvas.pdf");
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
  const bardata = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Red Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "# of Blue Votes",
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: "rgb(54, 162, 235)",
      },
      {
        label: "# of Green Votes",
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };
  return (
    <>
      <Pie data={data} id="doughnut" />

      <Bar data={bardata} options={options} id="barchart" />
      <button onClick={test}>Click</button>
    </>
  );
};

export default Charts;
