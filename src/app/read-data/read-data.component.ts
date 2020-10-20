import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.css']
})
export class ReadDataComponent implements OnInit {
  csvRecords = [];

  @ViewChild('fileImportInput') fileImportInput: any;
  

  constructor(private utilityService : UtilityService) { }

  ngOnInit() {
    this.utilityService.fileUploaded.subscribe((data) => {
      this.csvRecords = data;
    })
  }


   
}
