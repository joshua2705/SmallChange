import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {
  
  ngOnInit(){
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
  
    
    if(ctx)
    {
    const chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
    
          // The data for our dataset
          data: {
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
              datasets: [{
                  backgroundColor: 'rgb(0, 179, 0)',
                  borderColor: 'rgb(0, 179, 0)',
                  fill:false,
                  data: [40, 10, 3, 47, 25, 30, 20]
              }]
          },
    
          // Configuration options go here
          options: {
            legend: {
              display: false,
          }
          }
      });
    }
    else{
      console.log("Not found")
    }
  }
}