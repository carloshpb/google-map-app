import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { PlacesService } from '../services/places.service';
import { Place } from '../models/place.model'

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

  places: Place[];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.places = this.placesService.getPlacesReference();
  }

  ngAfterViewInit() {
    // let mymap = L.map("mapid").setView([51.505, -0.09], 13);

    // let map = L.map("map").fitWorld();

    this.map = L.map("map").setView([this.places[0].lat, this.places[0].lng], 16);

    // {
    //     attribution:
    //       '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    //     maxZoom: 18,
    //     tileSize: 512,
    //     zoomOffset: -1,
    //   }

    L.tileLayer(
      "https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=IFcmcZTAOhTyMN9zBNpU",
      {
        attribution:
          '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        maxZoom: 18,
        tileSize: 256,
      }
    ).addTo(this.map);

    this.marker = L.marker([this.places[0].lat, this.places[0].lng]).addTo(this.map);

    setTimeout(() => {this.map.invalidateSize()}, 1000);

    // this.map.on("locationfound", this.onLocationFound);
  }

  // onLocationFound(e: any) {
  //   var radius = e.accuracy;

  //   L.marker(e.latlng)
  //     .addTo(this.map)
  //     .bindPopup("You are within " + radius + " meters from this point")
  //     .openPopup();

  //   L.circle(e.latlng, radius).addTo(this.map);
  // }

  addClickedMarker(id: number) {
    const place = this.placesService.getPlace(id);
    const newLatLng = new L.LatLng(place.lat, place.lng);
    this.map.panTo(newLatLng, {
      animate: true,
      duration: 0.6
    });
    this.marker.setLatLng(newLatLng);
    console.log(this.placesService.getPlace(id));
  }
}
