import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
@Component({
  selector: 'app-item-list',
templateUrl: './item-list.html',
  styleUrls: ['./item-list.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.apiService.getItems().subscribe(
      (data: any) => {
        this.items = data;
        console.log('Ítems recibidos:', data);
      },
      (error: any) => {
        console.error('Error al obtener los ítems:', error);
      }
    );
  }
}

