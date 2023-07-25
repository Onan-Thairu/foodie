import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.css"]
})
export class HeaderComponent {
  @Output() headerNavEvent = new EventEmitter<string>()
  collapsed = true

  onNavClick(value: string) {
    this.headerNavEvent.emit(value)
  }
}