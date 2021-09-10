import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.css"],
})
export class PhotoComponent {
  @Input() image;
  @Input() description;
}
