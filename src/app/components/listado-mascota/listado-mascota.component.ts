import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';


const ListMascotas: Mascota[] = [ 
  {nombre: 'Ciro', edad: 15, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Luna', edad: 3, raza: 'Labrador', color: 'Negro', peso: 20},
  {nombre: 'Max', edad: 7, raza: 'Bulldog', color: 'Marrón y blanco', peso: 18},
  {nombre: 'Bella', edad: 2, raza: 'Poodle', color: 'Blanco', peso: 10},
  {nombre: 'Rocky', edad: 5, raza: 'Husky', color: 'Gris y blanco', peso: 25},
  {nombre: 'Milo', edad: 4, raza: 'Chihuahua', color: 'Café', peso: 5}
];


@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['nombre','edad','raza','color','peso','acciones'];
  dataSource = new MatTableDataSource<Mascota>(ListMascotas);

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort= this.sort;
      
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
 

  }
}