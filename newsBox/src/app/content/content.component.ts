import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {

  newsArray = [];

  constructor(public httpServ: HttpService) {
    this.httpServ.test().subscribe(
      result => {

        for (let key in result["articles"]) {
          this.newsArray.push(result["articles"][key]);
        }

        console.log(this.newsArray[0]);
      },
      err => {}
    );
  }

  

  ngOnInit() {}
}
