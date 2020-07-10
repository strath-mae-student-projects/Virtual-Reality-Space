// Read in TLE's From JSON File      

// TEST 1
let myRequest = new Request("./TLEs.json");
fetch(myRequest)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (TLEs) {
    // Calculate Julien Date For Any Day
    var D = 10.472222222; //11:20
    var M = 7;
    var Y = 2020;
    var originalJD = 2451545;

    // Check For Month and Correct Accordingly
    if (M > 2) {
      M = M;
      Y = Y;
    } else {
      M = M + 12;
      Y = Y - 1;
    }
    console.log('M =', M);
    console.log('Y =', Y);

    A = Math.trunc(Y / 100);
    console.log('A =', A);
    B = 2 - A + Math.trunc(A / 4);
    console.log('B =', B);

    // Calculate Julien Date
    JD = Math.trunc(365.25 * (Y + 4716)) + Math.trunc(30.6001 * (M + 1)) + D + B - 1524.5;
    console.log('JD =', JD);
    
    // Check To Ensure TLEs Are Read In Correctly
    console.log('Read TLEs:', TLEs);
    var j = 0;
    // Obtain Orbit
    for (j = 0; j < TLEs.length; j++) {
      const satellite = new Orb.SGP4(TLEs[j]);
      console.log('satellite period =', 60 * (satellite.orbital_period));

      // Calculate New JD
      var dPeriod = D + (satellite.orbital_period/60/24);
      console.log('D after Period =', dPeriod);
      var mPeriod = 7;
      var yPeriod = 2020

      if (mPeriod > 2) {
        mPeriod = mPeriod;
        yPeriod = yPeriod;
      } else {
        mPeriod = mPeriod + 12;
        yPeriod = yPeriod - 1;
      }
      console.log('mPeriod =', mPeriod);
      console.log('yPeriod =', yPeriod);
  
      aPeriod = Math.trunc(yPeriod / 100);
      console.log('aPeriod =', aPeriod);
      bPeriod = 2 - aPeriod + Math.trunc(aPeriod / 4);
      console.log('aPeriod =', bPeriod);
  
      // Calculate Julien Date
      jdPeriod = Math.trunc(365.25 * (yPeriod + 4716)) + Math.trunc(30.6001 * (mPeriod + 1)) + dPeriod + bPeriod - 1524.5;
      console.log('JD Period =', jdPeriod);
      
      // Add Cube For Each Piece Of Debris
      var geometry = new THREE.BoxGeometry(100, 100, 100);
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff44 })
      var Debris = new THREE.Mesh(geometry, material);
      scene.add(Debris);
      Debris.position.x = 300 * i;

      for( i = JD; i < jdPeriod; i+0.00011573173  ){
        var render = function () {
          let Newxyz = satellite.xyz(i);

          console.log('X =', Newxyz.x);

          //Debris.position.x = Newxyz.x;
          //Debris.position.y = Newxyz.y;
          //Debris.position.z = Newxyz.z;
        }
      }

    };
  });






// TEST 2
/*let myRequest = new Request("./TLEs.json");
fetch(myRequest)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (TLEs) {
    // Check To Ensure TLEs Are Read In Correctly
    console.log('Read TLEs:', TLEs);

    // Create Cubes To Simulate Debris - As Many as There Are TLEs Input
    var geometry = new THREE.BoxGeometry(100, 100, 100);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff44 });
    var i = 0;
    var j = 0;
    var satellites = [];
    for (i = 0; i < TLEs.length; i++) {

      var Debris = new THREE.Mesh(geometry, material);
      scene.add(Debris);
      Debris.position.x = 300 * i;
    };

    // Create The Orbits For Each TLE & Change Each Position
    for (j = 0; j < TLEs.length; j++) {

      const satellite = [new Orb.SGP4(TLEs[j])];

      var render = function () {
        var propogate = setInterval(function () {
          // Orbit 1 Propogation
          let date = new Date();

          let Newxyz = satellite[j].xyz(date);


          Debris.position.x = Newxyz.x;
          Debris.position.y = Newxyz.y;
          Debris.position.z = Newxyz.z;

        }, 1000)
        propogate();

      };
      render();
    };

  });









// TEST 3
// Obtain XYZ For Start Of Orbit 1
const satellite1 = new Orb.SGP4(tle);

// Obtain XYZ For Start Of Orbit 2
const satellite2 = new Orb.SGP4(tle2);

// Obtain XYZ For Start Of Orbit 3
const satellite3 = new Orb.SGP4(tle3);

// Obtain XYZ For Start Of Orbit 4
const satellite4 = new Orb.SGP4(tle4);

// Create Render
var render = function () {
  // Create Cube
  var geometry1 = new THREE.BoxGeometry(1000, 1000, 1000);
  var material1 = new THREE.MeshBasicMaterial({ color: 0x00ff44 });
  var Debris1 = new THREE.Mesh(geometry1, material1);
  scene.add(Debris1);

  // Create Cube2
  var geometry2 = new THREE.BoxGeometry(1000, 1000, 1000);
  var material2 = new THREE.MeshBasicMaterial({ color: 0x00ff44 });
  var Debris2 = new THREE.Mesh(geometry2, material2);
  scene.add(Debris2);

  // Create Cube3
  var geometry3 = new THREE.BoxGeometry(100, 100, 100);
  var material3 = new THREE.MeshBasicMaterial({ color: 0x00ff44 });
  var Debris3 = new THREE.Mesh(geometry3, material3);
  scene.add(Debris3);

  // Create Cube4
  var geometry4 = new THREE.BoxGeometry(100, 100, 100);
  var material4 = new THREE.MeshBasicMaterial({ color: 0x00ff44 });
  var Debris4 = new THREE.Mesh(geometry4, material4);
  scene.add(Debris4);

  // Propogate Orbit
  var propogate1 = setInterval(function () {
    // Orbit 1 Propogation
    let date1 = new Date();

    let Newxyz1 = satellite1.xyz(date1);

    Debris1.position.x = Newxyz1.x;
    Debris1.position.y = Newxyz1.y;
    Debris1.position.z = Newxyz1.z;

    // Orbit 2 Propogation
    let date2 = new Date();

    let Newxyz2 = satellite2.xyz(date2);

    Debris2.position.x = Newxyz2.x;
    Debris2.position.y = Newxyz2.y;
    Debris2.position.z = Newxyz2.z;

    // Orbit 3 Propogation
    let date3 = new Date();

    let Newxyz3 = satellite1.xyz(date3);

    Debris3.position.x = Newxyz3.x;
    Debris3.position.y = Newxyz3.y;
    Debris3.position.z = Newxyz3.z;

    // Orbit 4 Propogation
    let date4 = new Date();

    let Newxyz4 = satellite4.xyz(date4);

    Debris4.position.x = Newxyz4.x;
    Debris4.position.y = Newxyz4.y;
    Debris4.position.z = Newxyz4.z;
  }, 1000);
  propogate1();

}
render();*/
