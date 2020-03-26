import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  yAxes = [];
  suggestedMax = 60;
  opposite = true;
  // yAxes: [
  //   {
  //     id: '1',
  //     type: 'linear',
  //     position: 'left',
  //     ticks: {
  //       suggestedMax: 60
  //     }
  //   },
  //   {
  //     id: '2',
  //     type: 'linear',
  //     position: 'right',
  //     ticks: {
  //       suggestedMax: 60
  //     }
  //   },
  //   {
  //     id: '3',
  //     type: 'linear',
  //     position: 'left',
  //     ticks: {
  //       suggestedMax: 60
  //     }
  //   },
  //   {
  //     id: '4',
  //     type: 'linear',
  //     position: 'right',
  //     ticks: {
  //       suggestedMax: 60
  //     }
  //   },
  //   {
  //     id: '5',
  //     type: 'linear',
  //     position: 'left',
  //     ticks: {
  //       suggestedMax: 60
  //     }
  //   }
  // ];


  dataset = [
    {
      label: 'umidade',
      data: [
        { y: 6.43, x: '2020-04-26T11:48:00Z' },
        { y: 7.43, x: '2020-04-26T11:49:00Z' },
        { y: 8.43, x: '2020-04-26T11:50:00Z' },
        { y: 9.43, x: '2020-04-26T11:51:00Z' },
        { y: 6.43, x: '2020-04-26T11:52:00Z' }
      ],
      yAxisID: '1',
      unit: 'PSI',
      suggestedMax: 10
    },
    {
      label: 'teste',
      data: [
        { y: 4.89, x: '2020-04-26T11:48:00Z' },
        { y: 5.89, x: '2020-04-26T11:49:00Z' },
        { y: 6.89, x: '2020-04-26T11:50:00Z' },
        { y: 7.89, x: '2020-04-26T11:51:00Z' },
        { y: 4.89, x: '2020-04-26T11:52:00Z' }
      ],
      yAxisID: '2',
      unit: 'Pa',
      suggestedMax: 10
    },
    {
      label: 'umidade 2',
      data: [
        { y: 52.56, x: '2020-04-26T11:48:00Z' },
        { y: 54.56, x: '2020-04-26T11:49:00Z' },
        { y: 56.56, x: '2020-04-26T11:50:00Z' },
        { y: 58.56, x: '2020-04-26T11:51:00Z' },
        { y: 52.56, x: '2020-04-26T11:52:00Z' }
      ],
      yAxisID: '3',
      unit: 'A',
      suggestedMax: 10
    },
    {
      label: 'porta',
      data: [
        { y: 0.37, x: '2020-04-26T11:48:00Z' },
        { y: 5.37, x: '2020-04-26T11:49:00Z' },
        { y: 10.37, x: '2020-04-26T11:50:00Z' },
        { y: 15.37, x: '2020-04-26T11:51:00Z' },
        { y: 0.37, x: '2020-04-26T11:52:00Z' }
      ],
      yAxisID: '4',
      unit: '0,1',
      suggestedMax: 20
    },
    {
      label: 'porta',
      data: [
        { y: 0.51, x: '2020-04-26T11:48:00Z' },
        { y: 4.51, x: '2020-04-26T11:49:00Z' },
        { y: 7.51, x: '2020-04-26T11:50:00Z' },
        { y: 2.51, x: '2020-04-26T11:51:00Z' },
        { y: 8.51, x: '2020-04-26T11:52:00Z' }
      ],
      yAxisID: '5',
      unit: '0,1',
      suggestedMax: 20
    }
  ];


  ngOnInit() {

  //  {
  //     id: '5',
  //     type: 'linear',
  //     position: 'left',
  //     ticks: {
  //       suggestedMax: 60
  //     }
  //   }


    this.dataset.forEach(dataset => {
      console.log('pushed', dataset);
      this.yAxes.push({
        id: dataset.yAxisID,
        type: 'linear',
        position: this.opposite ? 'right' : 'left',
        ticks: {
          suggestedMax: dataset.suggestedMax
        }
      });
      this.opposite = !this.opposite;
    });
    console.log('eai?', this.yAxes);
  }

}
