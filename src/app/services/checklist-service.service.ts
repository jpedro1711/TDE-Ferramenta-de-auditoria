import { Injectable, OnInit } from '@angular/core';
import { checklistItem } from 'src/model/checklistItem';

@Injectable({
  providedIn: 'root',
})
export class ChecklistServiceService {
  public itemsList: Array<checklistItem> = [];
  constructor() {
    this.itemsList = JSON.parse(localStorage.getItem('list') || '[]');
  }

  addItem(item: checklistItem) {
    this.itemsList.push(item);
    localStorage.setItem('list', JSON.stringify(this.itemsList));
  }

  getItems() {
    return this.itemsList;
  }
}
