import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/services/item/item-service.service';
import { Itemlist } from 'src/app/models/item/itemlist';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  itemsList: Itemlist[] = [];

  constructor(private itemService: ItemServiceService) {}

  ngOnInit(): void {
    this.findAllItems();
  }

  findAllItems() {
    this.itemService.findAllItems().subscribe((data: Itemlist[]) => {
      console.log(data);
      this.itemsList = data;
    });
  }
}
