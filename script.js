'use strict';

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
//   type = 'running';
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//     this.calcPace();
//   }
//   calcPace() {
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }
// class Cycling extends WorkOut {
//   type = 'cycling';
//   constructor(coords, distance, duration, elevationGain) {
//     super(coords, distance, duration);
//     this.elevation = elevationGain;
//     this.calcSpeed();
//   }
//   calcSpeed() {
//     this.speed = this.distance / this.duration;
//     return this.speed;
//   }
// }

// const run1 = new Running([39, -12], 5.2, 24, 179);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);
// ///////////////////////////////////////////
// //Application Architecture
// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');
// class App {
//   #map;
//   #mapEvent;
//   #workouts = [];

//   constructor() {
//     this.#workouts = [];
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
//     // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

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

//     const validInputs = (...inputs) =>
//       inputs.every(inp => Number.isFinite(inp));
//     const allPositive = (...inputs) => inputs.every(inp => inp > 0);

//     //Get Data from Form
//     const type = inputType.value;
//     const duration = +inputDuration.value;
//     const distance = +inputDistance.value;
//     const { lat, lng } = this.#mapEvent.latlng;
//     let workout;
//     //If WorkOut running , then create running Object
//     if (type === 'running') {
//       const cadence = +inputCadence.value;
//       //Check if data is valid
//       if (
//         !validInputs(distance, duration, cadence) ||
//         !allPositive(distance, duration, cadence)
//       )
//         return alert('Inputs have to be positive number!');
//       workout = new Running([lat, lng], distance, duration, cadence);
//     }

//     //If WorkOut cycling , then create cycling Object
//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;
//       //Check if data is valid
//       if (
//         !validInputs(distance, duration, elevation) ||
//         !allPositive(distance, duration, elevation)
//       )
//         return alert('Inputs have to be positive number!');
//       workout = new Cycling([lat, lng], distance, duration, elevation);
//     }

//     // Add new Object to WorkOut Array
//     this.#workouts.push(workout);
//     console.log(workout);
//     // Render WorkOut on map as marker
//     this.renderWorkoutMarker(workout)
//     // Render WorkOut on list

//     // Hide Form + clear input fields
//     inputDistance.value =
//       inputElevation.value =
//       inputDuration.value =
//       inputCadence.value =
//         '';
//   }

//   renderWorkoutMarker(workout) {
//     L.marker(workout.coords)
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: `${workout.type}-popup`,
//         }),
//       )
//       .setPopupContent('workout')
//       .openPopup();
//   }
// }

// const app = new App();

// -----------------------13
// -------------------------Rendring WorkOuts
// class WorkOut {
//   date = new Date();
//   id = (Date.now() + '').slice(-10);
//   constructor(coords, distance, duration) {
//     this.coords = coords;
//     this.distance = distance;
//     this.duration = duration;
//   }
//   _setDescription() {
//     // prettier-ignore
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
//       months[this.date.getMonth()]
//     } ${this.date.getDate()}`;
//   }
// }

// class Running extends WorkOut {
//   type = 'running';
//   constructor(coords, distance, duration, cadence) {
//     super(coords, distance, duration);
//     this.cadence = cadence;
//     this.calcPace();
//     this._setDescription();
//   }
//   calcPace() {
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }
// class Cycling extends WorkOut {
//   type = 'cycling';
//   constructor(coords, distance, duration, elevationGain) {
//     super(coords, distance, duration);
//     this.elevationGain = elevationGain;
//     this.calcSpeed();
//     this._setDescription();
//   }
//   calcSpeed() {
//     this.speed = this.distance / this.duration;
//     return this.speed;
//   }
// }

// const run1 = new Running([39, -12], 5.2, 24, 179);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);
// ///////////////////////////////////////////
// //Application Architecture
// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');
// class App {
//   #map;
//   #mapEvent;
//   #workouts = [];

//   constructor() {
//     this.#workouts = [];
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
//     // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

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

//   _hideForm() {
//     //Empty inputs
//     inputDistance.value =
//       inputElevation.value =
//       inputDuration.value =
//       inputCadence.value =
//         '';
//     form.style.display = 'none';
//     form.classList.add('hidden');
//     setTimeout(() => {
//       form.style.display = 'grid';
//     }, 1000);
//   }

//   _toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     e.preventDefault();

//     const validInputs = (...inputs) =>
//       inputs.every(inp => Number.isFinite(inp));
//     const allPositive = (...inputs) => inputs.every(inp => inp > 0);

//     //Get Data from Form
//     const type = inputType.value;
//     const duration = +inputDuration.value;
//     const distance = +inputDistance.value;
//     const { lat, lng } = this.#mapEvent.latlng;
//     let workout;
//     //If WorkOut running , then create running Object
//     if (type === 'running') {
//       const cadence = +inputCadence.value;
//       //Check if data is valid
//       if (
//         !validInputs(distance, duration, cadence) ||
//         !allPositive(distance, duration, cadence)
//       )
//         return alert('Inputs have to be positive number!');
//       workout = new Running([lat, lng], distance, duration, cadence);
//     }

//     //If WorkOut cycling , then create cycling Object
//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;
//       //Check if data is valid
//       if (
//         !validInputs(distance, duration, elevation) ||
//         !allPositive(distance, duration, elevation)
//       )
//         return alert('Inputs have to be positive number!');
//       workout = new Cycling([lat, lng], distance, duration, elevation);
//     }

//     // Add new Object to WorkOut Array
//     this.#workouts.push(workout);
//     console.log(workout);

//     // Render WorkOut on map as marker
//     this._renderWorkoutMarker(workout);

//     // Render WorkOut on list
//     this._renderWorkout(workout);

//     // Hide Form + clear input fields
//     this._hideForm();
//   }

//   _renderWorkoutMarker(workout) {
//     L.marker(workout.coords)
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: `${workout.type}-popup`,
//         }),
//       )
//       .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
//       .openPopup();
//   }

//   _renderWorkout(workout) {
//     let html = `<li class="workout workout--${workout.type}" data-id=${workout.id}>
//           <h2 class="workout__title">${workout.description}</h2>
//           <div class="workout__details">
//             <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
//             <span class="workout__value">${workout.distance}</span>
//             <span class="workout__unit">km</span>
//           </div>
//           <div class="workout__details">
//             <span class="workout__icon">⏱</span>
//             <span class="workout__value">${workout.duration}</span>
//             <span class="workout__unit">min</span>
//           </div>
//        `;
//     if (workout.type === 'running')
//       html += `
//         <div class="workout__details">
//           <span class="workout__icon">⚡️</span>
//           <span class="workout__value">${workout.pace.toFixed(1)}</span>
//           <span class="workout__unit">min/km</span>
//         </div>
//         <div class="workout__details">
//           <span class="workout__icon">🦶🏼</span>
//           <span class="workout__value">${workout.cadence.toFixed(1)}</span>
//           <span class="workout__unit">spm</span>
//         </div>
//       </li>
//   `;
//     if (workout.type === 'cycling')
//       html += `
//          <div class="workout__details">
//             <span class="workout__icon">⚡️</span>
//             <span class="workout__value">${workout.speed.toFixed(1)}</span>
//             <span class="workout__unit">km/h</span>
//           </div>
//           <div class="workout__details">
//             <span class="workout__icon">🏔️</span>
//             <span class="workout__value">${workout.elevationGain}</span>
//             <span class="workout__unit">m</span>
//           </div>
//          </li>
//     `;
//     form.insertAdjacentHTML('afterend', html);
//   }
// }

// const app = new App();

// -----------------------14
// -------------------------Move to marker on Click
class WorkOut {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}

class Running extends WorkOut {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends WorkOut {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    this.speed = this.distance / this.duration;
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 179);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
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
  #workouts = [];
  #mapZoomLevel = 13;
  constructor() {
    //Get Users position
    this._getPosition();

    // Get Data From Local Storage
    this._getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
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
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    //Handling Click on map
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    //Empty inputs
    inputDistance.value =
      inputElevation.value =
      inputDuration.value =
      inputCadence.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => {
      form.style.display = 'grid';
    }, 1000);
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
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

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
    this.#workouts.push(workout);

    // Render WorkOut on map as marker
    this._renderWorkoutMarker(workout);

    // Render WorkOut on list
    this._renderWorkout(workout);

    // Hide Form + clear input fields
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        }),
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`,
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `<li class="workout workout--${workout.type}" data-id=${workout.id}>
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
       `;
    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence.toFixed(1)}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
  `;
    if (workout.type === 'cycling')
      html += `
         <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🏔️</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
         </li>
    `;
    form.insertAdjacentHTML('afterend', html);
  }
  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id,
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 2,
      },
    });
    //Using the public interface
    // workout.click();
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    this.#workouts = data;
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }
  reset () {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
 