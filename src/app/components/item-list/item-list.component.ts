import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/services/item/item-service.service';
import { Itemlist } from 'src/app/models/item/itemlist';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  itemsList: Itemlist[] = [];
  itemform = this.formBuilder.group(new Itemlist());
  items: Itemlist[] = [];
  action: string = 'Add';
  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemServiceService
  ) {}

  ngOnInit(): void {
    this.findAllItems();
  }

  findAllItems() {
    this.itemService.findAllItems().subscribe((data: Itemlist[]) => {
      console.log(data);
      this.itemsList = data;
    });
  }

  // save all items list..
  saveAllItems(users: Itemlist[]) {
    this.itemService.saveAllItems(users).subscribe((data: Itemlist[]) => {
      console.log(data);
      window.location.reload();
    });
  }

  deleteItem(item: Itemlist) {
    this.itemService.deleteItem(item).subscribe(() => {
      console.log(item);
      window.location.reload();
    });
  }

  // define submit method for form...
  onSubmit(): void {
    console.log(this.itemform);

    let items: any = new Itemlist();
    items = this.itemform.value;
    console.log(items);

    this.items.push(items);

    this.saveAllItems(this.items);

    // form will be refreshed after add information
    this.itemform.reset();
  }
}
