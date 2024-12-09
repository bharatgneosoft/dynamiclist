import { Component } from '@angular/core';
import { Item } from '../item.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamiclist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dynamiclist.component.html',
  styleUrl: './dynamiclist.component.css'
})
export class DynamiclistComponent {
  items: Item[] = [
    { name: 'Task 1', description:"description1" },
    { name: 'Item 1', description:"description2" },
  ];

  searchQuery: string='';

  get filterItems():Item[]{
    return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}
