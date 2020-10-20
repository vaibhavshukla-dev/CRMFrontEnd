import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent implements OnInit {
  @ViewChild('fileImportInput') fileImportInput: any;
  public csvRecords: any[] = [];
  csvData: any;
  worksheet: any;
  data: any;
  dataList: any = [];
  isLoading : boolean = false;


  constructor(private utilityService : UtilityService) { }

  ngOnInit() {
  }

  fileChangeListener($event: any): void {
    
    this.isLoading = true;
    var files = $event.srcElement.files;
    this.csvRecords = [];
    if (files[0].name.endsWith('.csv')) {
      var input = $event.target;
      var reader = new FileReader();
      
      reader.readAsText(input.files[0]);
      reader.onload = (data) => {
        let csvData = reader.result;
        let csvRecordsArray = (csvData as string).split('\r');

        for (let i = 0; i < csvRecordsArray.length; i++) {
          let rowdata = csvRecordsArray[i].match(/("[^"]*")|[^,]+/g);
          this.csvRecords.push(rowdata);
        }
        this.isLoading = false;
        let lastLine = this.csvRecords.length - 1;        
        if(this.csvRecords[lastLine].toString() == '\n'){
          this.csvRecords.pop();
        }        
        this.utilityService.fileUploaded.next(this.csvRecords);
      };
      reader.onerror = function () {
        alert('Unable to read ' + input.files[0]);
      };
    } else {
      alert('Please import valid .csv file.');
      this.fileImportInput.nativeElement.value = "";
      this.csvRecords = [];
    }
  }

}
