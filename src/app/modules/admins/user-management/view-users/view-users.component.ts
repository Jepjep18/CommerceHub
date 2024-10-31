import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  // Define displayed columns and data source
  displayedColumns: string[] = ['dummyColumn1', 'dummyColumn2', 'dummyColumn3', 'dummyColumn4'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  // Add sorting change handler
  test(sortState: Sort): void {
    // Sorting logic or user feedback logic can go here if needed
  }
}

// Example data for the table
const ELEMENT_DATA = [
  { dummyColumn1: 'Data 1', dummyColumn2: 'Data 2', dummyColumn3: 'Data 3', dummyColumn4: 'Data 4' },
  { dummyColumn1: 'Data A', dummyColumn2: 'Data B', dummyColumn3: 'Data C', dummyColumn4: 'Data D' },
];
