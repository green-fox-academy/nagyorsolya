import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Weather } from "./models/Weather";
import { ApiService } from "./services/api.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
}
