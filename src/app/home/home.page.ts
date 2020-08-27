import { Component, OnInit, ViewChild } from "@angular/core";
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  zoom = 18;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: "hybrid",
    zoomControl: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 11,
  };

  // regexFirstCharWords: RegExp = /\b[a-zA-Z0-9_]/g;
  infoContent = "";
  marker: any;

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
    {
      nome: "Tulipas",
      lat: -18.920247,
      lng: -48.267697,
      endereco: "Av. Rondon Pacheco – 3090 - Santa Maria - Uberlândia - MG",
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.addClickedMarker(this.places[0]);
  }

  addClickedMarker(place: {
    nome: string;
    lat: number;
    lng: number;
    endereco: string;
  }) {
    if (this.marker) {
      this.moveToMarker(place);
      // this.animatedMove(place);
      // this.map.animateCamera(CameraUpdateFactory.zoomIn());
      // this.map.animateCamera(CameraUpdateFactory.zoomIn());
    } else {
      this.center = {
        lat: place.lat,
        lng: place.lng,
      };
      this.marker = {
        position: {
          lat: place.lat,
          lng: place.lng,
        },

        // label: {
        //   color: "black",
        //   text: place.nome.match(this.regexFirstCharWords).join(""),
        // },

        title: place.nome,
        info: place.endereco,
        opacity: 0.8,
        options: {
          animation: google.maps.Animation.DROP,
        },
      };
    }
  }

  moveToMarker(newPlace: {
    nome: string;
    lat: number;
    lng: number;
    endereco: string;
  }) {
    this.marker.title = newPlace.nome;
    this.marker.info = newPlace.endereco;
    this.marker.position = {
      lat: newPlace.lat,
      lng: newPlace.lng,
    };
    this.map.panTo(new google.maps.LatLng(newPlace.lat, newPlace.lng));
  }

  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.info.open(marker);
  }

  // animatedMove(newPlace) {

  //   let lat = this.marker.position.lat;
  //   let lng = this.marker.position.lng;

  //   let deltalat = (newPlace.lat - this.marker.position.lat) / 100;
  //   let deltalng = (newPlace.lng - this.marker.position.lng) / 100;

  //   let delay = 10 * 0.5;

  //   // this.marker.label = {
  //   //   color: "black",
  //   //   text: newPlace.nome.match(this.regexFirstCharWords).join(""),
  //   // },

  //   this.marker.title = "Titulo " + newPlace.nome;
  //   this.marker.info = "Info " + newPlace.nome;

  //   let mar = this.marker;

  //   for (let i = 0; i < 100; i++) {
  //     ((ind) => {
  //       setTimeout(() =>  {
  //         let newLat = mar.position.lat;
  //         let newLng = mar.position.lng;
  //         newLat += deltalat;
  //         newLng += deltalng;

  //         this.map.panTo(new google.maps.LatLng(newLat, newLng));

  //         mar.position = {
  //           lat: newLat,
  //           lng: newLng,
  //         };

  //       }, delay * ind);
  //     })(i);
  //   }
  // }
}