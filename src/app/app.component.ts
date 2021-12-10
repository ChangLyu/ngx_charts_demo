import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'engineInterviewProject';
  selection: any;
  selectedValue: any;
  constructor(private route: Router, private activeRoute: ActivatedRoute) {

  }
  ngOnInit(): void {

    // console.log(this.activeRoute.url);
    this.selection = [
      {
        value: "Grahpic 1",
        url: "graphic1"
      },
      {
        value: "Grahpic 2",
        url: "graphic2"
      },
    ];

    // this.route.events.subscribe((event: any) => {
    //   if (event instanceof NavigationEnd) {
    //     this.selectedValue = this.route.url === 'graphic1' ? this.selection[0] : this.selection[1];
    //   }
    // });

    this.selectedValue = this.selection[0];
  }

  onSelect(event: any) {
    this.route.navigateByUrl(this.selectedValue.url);
  }
}
