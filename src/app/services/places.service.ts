import { Injectable } from '@angular/core';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  places = [
    {
      nome: "Cresce Vendas",
      lat: -18.919752,
      lng: -48.267955,
      endereco: "Av. Rondon Pacheco – 3145 - Lídice – Uberlândia – MG",
    },
    {
      nome: "Uau Uau Lanches",
      lat: -18.920483,
      lng: -48.267877,
      endereco: "Av. Rondon Pacheco – 3050 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Colchões Ortobom",
      lat: -18.920126,
      lng: -48.267577,
      endereco: "Av. Rondon Pacheco – 3100 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Restaurante Caipira Amanhece",
      lat: -18.532608,
      lng: -48.193514,
      endereco: "R. Taquaral, 77, Araguari - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
  ];

  constructor() {}

  getPlacesReference(): Place[] {
    return this.places;
  }

  getPlace(position: number): Place {
    return this.places[position];
  }
}
