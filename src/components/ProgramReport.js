import React from 'react';
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import jsPDF from "jspdf";
import "jspdf-autotable";
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

const ProgramReport = () => {
    return ( 
        <>
   <Doughnut
     
      width={60}
      height={30} 
      data={data}
      options={{
        cutoutPercentage: 55,
        elements: {
          center: {
            
            fontColor: "#666666",
            fontFamily: "Allianz-Neo",
            fontStyle: "bold",
            minFontSize: 25,
            maxFontSize: 30
          }
        },
        plugins: {
          outlabels: {
            backgroundColor: "white", // Background color of Label
            borderColor: "none", // Border color of Label
            borderRadius: 0, // Border radius of Label
            borderWidth: 0, // Thickness of border
            color: "black", // Font color
            display: false,
            lineWidth: 1, // Thickness of line between chart arc and Label
            padding: 0,
            lineColor: "black",
            textAlign: "center",
            stretch: 45,
          },
          labels: false
        },
      
        legend: {
          display: true,
          position: "right",
          align: "center",
          fontFamily: "Allianz-Neo",
          textDirection: 'ltr',
            labels: {
              usePointStyle: true,
              fontColor: "#006192",
             fontSize: 25,
           
            }
        }
      }}
      />
      
</>
     );
}
 
export default ProgramReport;