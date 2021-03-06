import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { PlacesService } from '../services/places.service';
import { Place } from '../models/place.model'
import { latLng, Marker } from 'leaflet';

// Configurações padrões para fazer o marker aparecer na versão mobile
const iconRetinaUrl = "assets/marker-icon-2x.png";
const iconUrl = "assets/marker-icon.png";
const shadowUrl = "assets/marker-shadow.png";
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: "app-leaflet",
  templateUrl: "./leaflet.component.html",
  styleUrls: ["./leaflet.component.scss"],
})
export class LeafletComponent implements AfterViewInit, OnInit {
  private map: any;
  private marker: any;
  private popup: any;

  places: Place[];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.places = this.placesService.getPlacesReference();
  }

  ngAfterViewInit() {
    this.addMapAndTileLayer();

    // Timeout para esperar o load inicial dos tiles do map, antes de colocar o marker e o popup
    setTimeout(() => {
      const latLng: L.LatLng = L.latLng(this.places[0].lat, this.places[0].lng);
      this.addMarker(this.places[0], latLng);
      this.addPopupToMarker(this.places[0], latLng, this.marker);
    }, 2000)
    

    // correção de bug para baixar todos os tiles abertos no map atual
    setTimeout(() => {
      this.map.invalidateSize();
    }, 1000);
  }

  // Mudar o marker para o local clicado da lista
  addClickedMarker(id: number) {
    const place = this.placesService.getPlace(id);
    const newLatLng = L.latLng(place.lat, place.lng);
    this.addMarker(place, newLatLng);
    this.addPopupToMarker(place, newLatLng, this.marker);
    console.log(this.placesService.getPlace(id));
  }

  // Inicia o map e o tileLayer dele, caso não tenha sido já iniciado
  addMapAndTileLayer() {
    if (!this.map) {
      this.map = L.map("map").setView(
        [this.places[0].lat, this.places[0].lng],
        16
      );
    }
    if (!this.map.hasLayer()) {
      L.tileLayer(
        "https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=IFcmcZTAOhTyMN9zBNpU",
        {
          attribution:
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
          maxZoom: 18,
          tileSize: 256,
        }
      ).addTo(this.map);
    } else {
      console.log("Already has a map and layer.");
    }
  }

  // Cria o marker (caso não tenha sido criado) e muda sua posição e dados conforme o lugar escolhido
  addMarker(place: Place, latLng: L.LatLng) {
    if (!this.marker) {
      this.marker = L.marker(latLng);
      this.marker.addTo(this.map);
    }
    
    this.map.panTo(latLng, {
      animate: true,
      duration: 0.6,
    });

    this.map.setView(latLng, 16);
    this.marker.setLatLng(latLng);
  }

  // Adiciona o popup com o nome e endereço do lugar, e já abre ele imediatamente
  addPopupToMarker(place: Place, latLng: L.LatLng, marker: Marker) {
    this.popup = L.popup().setContent(
      "<p><strong>" + place.nome + "</strong><br />" + place.endereco + "</p>"
    );

    this.marker.bindPopup(this.popup).openPopup();
  }
}
