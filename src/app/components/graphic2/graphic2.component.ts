import { Component, OnInit } from '@angular/core';
import { LoadChartDataService } from 'src/app/services/load-chart-data.service';

@Component({
  selector: 'app-graphic2',
  templateUrl: './graphic2.component.html',
  styleUrls: ['./graphic2.component.scss']
})
export class Graphic2Component implements OnInit {


  graphic2ChartOption: any;
  graphic2Data: any = {
    year: [],
    unemployed: [],
    employed_total: [],
    population: []
  };
  updateOptions: any;


  constructor(private loadChartDataServcie: LoadChartDataService) { }

  ngOnInit(): void {
    this.loadChartDataServcie.loadChartData().subscribe(this.handleData.bind(this));
    this.initializeChartOption();
  }

  initializeChartOption() {
    this.graphic2ChartOption = {
      title: {
        text: 'US unemployment rates since 1940',
        x: 'center'
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          let str = '<div>';
          if (params) {
            str = '<div>' + 'year: ' + params[0].axisValue + '</div>';
            params.map((param: any) => {
              str += '<div>' + param.seriesName + ':' + param.value + '</div>';
            });
          }
          return str;
        }
      },
      legend: {
        // align: 'right',
        right: 20,
        orient: 'vertical',
        data: ['unemployed', 'employed_total', 'population']
      },
      xAxis: {
        type: 'category',
        name: 'year',
        nameLocation: 'center',
        data: this.graphic2Data.year
      },
      yAxis: {
        type: 'value',
        nameLocation: 'center'
      },
      series: [
        {
          name: 'unemployed',
          type: 'line',
          data: this.graphic2Data.unemployed
        },
        {
          name: 'population',
          type: 'line',
          data: this.graphic2Data.polulation
        },
        {
          name: 'employed_total',
          type: 'line',
          data: this.graphic2Data.employed_total
        }

      ]
    };
  }

  handleData(data: any) {
    console.log(data);
    data.map((d: any) => {
      this.graphic2Data.year.push(d.year + '');
      this.graphic2Data.unemployed.push(d.unemployed);
      this.graphic2Data.employed_total.push(d.employed_total);
      this.graphic2Data.population.push(d.population);
    });
    console.log(this.graphic2Data);
    this.updateOptions = {
      xAxis: { data: this.graphic2Data.year },
      series: [
        {
          data: this.graphic2Data.unemployed
        },
        {
          data: this.graphic2Data.employed_total
        },
        {
          data: this.graphic2Data.population
        }
      ]
    }
  }
}
