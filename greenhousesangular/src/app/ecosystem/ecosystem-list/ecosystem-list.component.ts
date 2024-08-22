import { Component, OnInit } from '@angular/core';
import { EcosystemService } from '../ecosystem.service';
import { Ecosystem } from 'src/app/models/ecosystem';

@Component({
  selector: 'app-ecosystem-list',
  templateUrl: './ecosystem-list.component.html',
  styleUrls: ['./ecosystem-list.component.css']
})
export class EcosystemListComponent implements OnInit {
  ecosystems: Ecosystem[] = [];


  constructor(private ecosystemService: EcosystemService) { }
  //private ecosystemService: EcosystemService: Injects the EcosystemService into the component. This allows you to use the service’s methods to interact with the backend API.
  ngOnInit(): void {
    this.getEcosystems();
  }

  getEcosystems():void {
    this.ecosystemService.getEcosystem().subscribe(data => {
      console.log(data);
      this.ecosystems = data;
    })
  }
  //when you make an HTTP GET request, the data is the data returned from the server.

  updateEcosystem(id: number, updatedData: Ecosystem): void {
    this.ecosystemService.updateEcosystem(id, updatedData).subscribe(response => {
      this.getEcosystems(); // Refresh the list after update
    });
  }
  //response is often used to refer to the entire HTTP response object, which may include not just the data, but also metadata such as HTTP headers, status codes, etc.

  deleteEcosystem(id: number): void {
    this.ecosystemService.deleteEcosystem(id).subscribe(() => {
      this.getEcosystems(); // Refresh the list after deletion
    });
  }


}



//ngOnInit(): void {
  // This is where you put the tasks you want Angular to do
  // right after the component starts.
//}