import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Web society with Angular";
  todoArray = [];
  addTodo(value: any) {
    this.todoArray.push(value);
    console.log(this.todoArray);
  }
  deleteItem() {
    console.log("delete item");
  }
}
