import { Component, OnInit } from '@angular/core';
import { LoadChartDataService } from 'src/app/services/load-chart-data.service';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styleUrls: ['./graphic1.component.scss']
})
export class Graphic1Component implements OnInit {

  graphic1ChartOption: any;
  graphic1Data: any;
  updateOptions: any;
  constructor(private loadChartDataServcie: LoadChartDataService) { }

  ngOnInit(): void {
    this.loadChartDataServcie.loadChartData().subscribe(this.handleData.bind(this));
    this.initializeChartOption();
  }

  initializeChartOption() {
    this.graphic1ChartOption = {
      title: {
        text: 'US unemployment rates since 1940',
        x: 'center'
      },

      xAxis: {
        type: 'time',
        name: 'year',
        nameLocation: 'center'
      },
      yAxis: {
        type: 'value',
        name: 'unemployed_percent',
        nameLocation: 'center'
      },
      series: [{
        name: 'unemployed_percent',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.graphic1Data
      }]
    };
  }


  handleData(data: any) {
    this.graphic1Data = data.map((d: any) => {
      return [d.year + '', d.unemployed_percent]
    });
    // console.log(this.graphic1Data);
    this.updateOptions = {
      series: [{
        data: this.graphic1Data
      }]
    }
  }

}
