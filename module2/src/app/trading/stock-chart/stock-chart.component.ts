import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

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
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  fill:false,
                  data: [0, 10, 5, 2, 20, 30, 45]
              }]
          },
    
          // Configuration options go here
          options: {}
      });
    }
    else{
      console.log("Not found")
    }
  }
}