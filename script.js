'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

// -----------------------01 Section intro
// -----------------------03 Project Overview

// -----------------------04
// -------------------------How to Plan a Web Project
//  1) User Stories
//  2) Features
//  3) FlowChart
//  4) Architecture

/* 
  1) User Stories..
Description of the Application functionality from the user perspective
  */

// -----------------------05
// -------------------------Using The Geolocation Api
// if (navigator.geolocation)
//     navigator.geolocation.getCurrentPosition(
// function (position) {
//     const {latitude} = position.coords;
//     const {longitude} = position.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
// },
// function () {
//     alert('Could not get your Location');
// },
// );

// -----------------------06
// -------------------------Displaying a map using 'Leaflet' Library
// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

//       const coords = [latitude, longitude];
//       const map = L.map('map').setView(coords, 15);

//       L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       L.marker(coords)
//         .addTo(map)
//         .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//         .openPopup();
//     },
//     function () {
//       alert('Could not get your Location');
//     },
//   );

// -----------------------07
// -------------------------Displaying a Map Marker
// if (navigator.geolocation)
//     navigator.geolocation.getCurrentPosition(
// function (position) {
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

//       const coords = [latitude, longitude];
//       const map = L.map('map').setView(coords, 15);

//       L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//           attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//         }).addTo(map);

//         map.on('click', function (mapEvent) {
//             console.log(mapEvent);
//             const {lat, lng} = mapEvent.latlng;
//         L.marker([lat, lng])
//         .addTo(map)
//         .bindPopup(L.popup({
//             maxWidth:250,
//             minWidth: 100,
//             autoClose: false,
//             closeOnClick: false,
//             className: 'running-popup'
//         }
//     ))
//     .setPopupContent('WorkOut')
//         .openPopup();
//         });
//     },
//     function () {
//       alert('Could not get your Location');
//     },
// );

// -----------------------08
// -------------------------Displaying Workout Input Form

// let map, mapEvent;

// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

//       const coords = [latitude, longitude];
//       map = L.map('map').setView(coords, 15);

//       L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);
//       //Handling Click on map
//       map.on('click', function (mapE) {
//         mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//       });
//     },
//     function () {
//       alert('Could not get your Location');
//     },
//   );

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   inputDistance.value =
//     inputElevation.value =
//     inputDuration.value =
//     inputCadence.value =
//       '';
//   console.log(mapEvent);
//   //Display Marker
//   const { lat, lng } = mapEvent.latlng;
//   L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup(
//       L.popup({
//         maxWidth: 250,
//         minWidth: 100,
//         autoClose: false,
//         closeOnClick: false,
//         className: 'running-popup',
//       }),
//     )
//     .setPopupContent('WorkOut')
//     .openPopup();
// });

// inputType.addEventListener('change', function () {
//   inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//   inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// });

// -----------------------10
// -------------------------Refactoring for Project Architecture
// let map, mapEvent;
// class App {
//   #map;
//   #mapEvent;

//   constructor() {
//     this._getPosition();

//     form.addEventListener('submit', this._newWorkout.bind(this));

//     inputType.addEventListener('change', this._toggleElevationField.bind(this));
//   }

//   _getPosition() {
//     if (navigator.geolocation)
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your Position');
//         },
//       );
//   }

//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

//     const coords = [latitude, longitude];
//     this.#map = L.map('map').setView(coords, 15);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);
//     //Handling Click on map
//     this.#map.on('click', this._showForm.bind(this));
//   }

//   _showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     e.preventDefault();
//     inputDistance.value =
//       inputElevation.value =
//       inputDuration.value =
//       inputCadence.value =
//         '';
//     //Display Marker
//     const { lat, lng } = this.#mapEvent.latlng;
//     L.marker([lat, lng])
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: 'running-popup',
//         }),
//       )
//       .setPopupContent('WorkOut')
//       .openPopup();
//   }
// }

// const app = new App();

// -----------------------11
// -------------------------Managing Workout Data Creating Classes

// class WorkOut {
//   date = new Date();
//   id = (Date.now() + '').slice(-10);
//   constructor(coords, distance, duration) {
//     this.coords = coords;
//     this.distance = distance;
//     this.duration = duration;
//   }
// }

// class Running extends WorkOut {
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//     this.calcPace();
//   }
//   calcPace() {
//     this.pace = this.duration / this.distance;
//     return this.pace
//   }
// }
// class Cycling extends WorkOut {
//   constructor(coords, distance, duration, elevationGain) {
//     super(coords, distance, duration);
//     this.elevation = elevationGain;
//     this.calcSpeed ();
//   }
//    calcSpeed () {
//     this.speed = this.distance / this.duration ;
//     return this.speed
//   }
// }

// const run1 = new Running([39,-12], 5.2, 24 ,179)
// const cycling1 = new Cycling([39,-12], 27, 95 ,523)
// console.log(run1, cycling1)
// ///////////////////////////////////////////
// //Application Architecture
// class App {
//   #map;
//   #mapEvent;

//   constructor() {
//     this._getPosition();

//     form.addEventListener('submit', this._newWorkout.bind(this));

//     inputType.addEventListener('change', this._toggleElevationField.bind(this));
//   }

//   _getPosition() {
//     if (navigator.geolocation)
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your Position');
//         },
//       );
//   }

//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

//     const coords = [latitude, longitude];
//     this.#map = L.map('map').setView(coords, 15);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);
//     //Handling Click on map
//     this.#map.on('click', this._showForm.bind(this));
//   }

//   _showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     e.preventDefault();
//     inputDistance.value =
//       inputElevation.value =
//       inputDuration.value =
//       inputCadence.value =
//         '';
//     //Display Marker
//     const { lat, lng } = this.#mapEvent.latlng;
//     L.marker([lat, lng])
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: 'running-popup',
//         }),
//       )
//       .setPopupContent('WorkOut')
//       .openPopup();
//   }
// }

// const app = new App();
// -----------------------12
// -------------------------Creating A New WorkOut

class WorkOut {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends WorkOut {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends WorkOut {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevation = elevationGain;
    this.calcSpeed();
  }
  calcSpeed() {
    this.speed = this.distance / this.duration;
    return this.speed;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 179);
const cycling1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1, cycling1);
///////////////////////////////////////////
//Application Architecture
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
class App {
  #map;
  #mapEvent;
  #workout = [];

  constructor() {
    this.#workout = [];
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your Position');
        },
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    //Handling Click on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    //Get Data from Form
    const type = inputType.value;
    const duration = +inputDuration.value;
    const distance = +inputDistance.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let  workout;
    //If WorkOut running , then create running Object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      //Check if data is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive number!');
       workout = new Running([lat, lng], distance, duration, cadence);
    }

    //If WorkOut cycling , then create cycling Object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      //Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration, elevation)
      )
        return alert('Inputs have to be positive number!');
        workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new Object to WorkOut Array
      this.#workout.push(workout);
      console.log(workout)
    // Render WorkOut on map as marker
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        }),
      )
      .setPopupContent('WorkOut')
      .openPopup();

    // Render WorkOut on list

    // Hide Form + clear input fields
    inputDistance.value =
      inputElevation.value =
      inputDuration.value =
      inputCadence.value =
        '';
  }
}

const app = new App();
