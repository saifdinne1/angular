import { Component } from '@angular/core';
import { Residence } from '../residence.model';
import { Apartment } from '../apartment.model';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: 'assets/R1.jpeg' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: 'assets/R2.jpg' },
    { id: 3, name: 'El Arij', address: 'Rades', image: 'assets/R3.jpg' },
    { id: 4, name: 'El Anber', address: 'Manzah 5', image: 'assets/R4.jpg' },
  ];
  listApartments: Apartment[] = [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'AppartementS+1',
      residence: this.listResidences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'AppartementS+2',
      residence: this.listResidences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.listResidences[1],
    },
  ];

  selectedResidenceApartments: Apartment[] = [];
  favoriteApartments: Apartment[] = [];
  surfaceFilter: number | null = null;

  showApartments(residence: Residence): void {
    this.selectedResidenceApartments = this.listApartments.filter(
      (apartment) => apartment.residence === residence
    );
  }

  addToFavorites(apartment: Apartment): void {
    this.favoriteApartments.push(apartment);
  }

  filterBySurface(): void {
    if (this.surfaceFilter !== null) {
      this.selectedResidenceApartments =
        this.selectedResidenceApartments.filter(
          (apartment) => apartment.surface >= this.surfaceFilter!
        );
    }
  }
}
