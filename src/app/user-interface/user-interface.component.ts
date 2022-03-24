import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./stylesForUser_Interface.css','./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {
  tables : any =[]
  constructor() { }

  ngOnInit(): void {
  }


  add(tableName : String)
  {
      let table={name : tableName,colums :['EMPNO','DEPTNO','Date']}
      this.tables.push(table)
  }
}
