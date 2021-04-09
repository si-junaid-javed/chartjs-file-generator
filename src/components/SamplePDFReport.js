import React, { useEffect } from 'react';
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import jsPDF from "jspdf";
import "jspdf-autotable";
const data = {
    labels: ['Advertisement - Local Content (9m52s, 10.6%)', 'Comedy Program - Regional Language (Punjabi) (5m5s, 5.5%)', 'Advertisement - Regional Language (Pashto) (4m56s, 5.3%)',
     'Advertisement - Foreign Content (4m48s, 5.2%)', 'Drama - Regional Language (Brohi) (4m23s, 4.7%)',
    'Advertisement - Regional Language (Brohi) (4m23s, 4.7%)','Public Service Message - Regional Language (Sindhi) (4m7s, 4.4%)','Health Program - Indian Content (3m59s, 4.3%)',
    'Religious Program - Indian Content (3m59s, 4.3%)','Cooking Show - Local Content (3m50s, 4.1%)','Advertisement - Regional Language (Punjabi) (3m50s, 4.1%)',
    'Branded Program - Local Content (3m26s, 3.7%)','Advertisement - Local Content (9m52s, 10.6%)', 'Comedy Program - Regional Language (Punjabi) (5m5s, 5.5%)', 'Advertisement - Regional Language (Pashto) (4m56s, 5.3%)',
    'Advertisement - Foreign Content (4m48s, 5.2%)',
    
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
    
        borderWidth: 0,
       
      },
    ],
  }
  
const options = {
  
 
  plugins: {
    datalabels: {
        color: '#ffffff',
        formatter: function (value) {
          return Math.round(value) + '%';
        },
        font: {
          weight: 'bold',
          size: 18,
        },
       
      },
     
     
    },
    legend: {
  
     
      display: true,
      position: "right",
      align: "center",
     
    
        labels: {
          padding: 15,
       
          fontColor: "#000",
         fontSize: 20,
       
        }
      }
}

const SamplePdfReport = () => {
  const handleClick =async () =>{
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
        pdf.addPage()

      console.log(pdf.heightLeft,"SPACE")
    pdf.autoTable({
      margin: { horizontal: 10, top: 10 },
      startY: 20,
      // columnStyles: { america: { align: 'center' } }, // European countries centered
      body: [
        {
          sr: "1",
          filename: `CSR test Shahbaz_2021_01_28_15_48_19.mp4.xml`,
          clip: `CSR test Shahbaz`,
          jobid: "Arshad Sharif",
          starttime: "Thu, Jan 28, 2021 3:30:00 PM",
          endtime: `Thu, Jan 28, 2021 3:30:00 PM`,
        },
        {
          sr: "1",
          filename: `CSR test Shahbaz_2021_01_28_15_48_19.mp4.xml`,
          clip: `CSR test Shahbaz`,
          jobid: "Arshad Sharif",
          starttime: "Thu, Jan 28, 2021 3:30:00 PM",
          endtime: `Thu, Jan 28, 2021 3:30:00 PM`,
        },
        {
          sr: "1",
          filename: `CSR test Shahbaz_2021_01_28_15_48_19.mp4.xml`,
          clipname: `CSR test Shahbaz`,
          jobid: "Arshad Sharif",
          starttime: "Thu, Jan 28, 2021 3:30:00 PM",
          endtime: `Thu, Jan 28, 2021 3:30:00 PM`,
        },
        
      ],
      columns: [
        { header: "Sr", dataKey: "sr" },
        { header: "First Name", dataKey: "filename" },
        { header: "Clip Name", dataKey: "clipname" },
        { header: "JobID", dataKey: "jobid" },
        { header: "Start Time", dataKey: "starttime" },
        { header: "End Time", dataKey: "endtime" },
      ],
      columnStyles: {
        0: { cellWidth: 10 },
        1: { cellWidth: 45 },
        2: { cellWidth: 35 },
        3: { cellWidth: 30 },
        4: { cellWidth: 30 },
      },
    });
        pdf.save("canvas.pdf");
  }

    return ( 
        <>
    <div className='header'>
      <h1 className='title'>Grouped Bar Chart</h1>
        <button onClick={handleClick} >Generate PDF</button>
    </div>
    <div >
    <Pie data={data} options={options} id="chart-one" />
    </div>
    </>
     );
}
 
export default SamplePdfReport;