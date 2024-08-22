import { Component, OnInit } from '@angular/core';
import { VisitPriceService } from '../visit-price.service';
import { VisitPrice } from 'src/app/models/visitPrice';

@Component({
  selector: 'app-visit-price-list',
  templateUrl: './visit-price-list.component.html',
  styleUrls: ['./visit-price-list.component.css']
})
export class VisitPriceListComponent implements OnInit {
  visitPrices: VisitPrice[] = [];

  constructor(private visitPriceService: VisitPriceService) { }

  ngOnInit(): void {
    this.getVisitPrices();
  }

  getVisitPrices(): void {
    this.visitPriceService.getVisitPrice().subscribe(data => {
      this.visitPrices = data;
    });
  }

  updateVisitPrice(id: number, updatedData: VisitPrice): void {
    this.visitPriceService.updateVisitPrice(id, updatedData).subscribe(() => {
      this.getVisitPrices();
    });
  }

  deleteVisitPrice(id: number): void {
    this.visitPriceService.deleteVisitPrice(id).subscribe(() => {
      this.getVisitPrices();
    });
  }
}
