import { Component, OnInit } from "@angular/core";
import { Console } from "@angular/core/src/console";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"]
})
export class CursosComponent implements OnInit {

  public Lista_Url:string[]
  
  constructor(){

    this.Lista_Url = ['Java','B','C']

  }
ngOnInit(){

  }
}

