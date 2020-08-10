// Read in TLE's From JSON File      
// Obtain xyz for orbit
let myRequest = new Request("./TLEs.json");
fetch(myRequest)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (TLEs) {
var render = function(){


var satellite = [];    
var Debris = [];
let date = [];
let Newxyz = [];

var i;
var j;

for ( i = 0; i < TLEs.length; i++ ) {
  if( TLEs[i].OBJECT_TYPE === 'ROCKET BODY' ){
    satellite.push (new Orb.SGP4(TLEs[i]));
    var geometry = (new THREE.BoxGeometry(50,50,50));
    var material = (new THREE.MeshBasicMaterial({color: 0x00FF00 /*GREEN*/}));
    Debris.push (new THREE.Mesh(geometry, material));
  } else if( TLEs[i].OBJECT_TYPE === 'PAYLOAD' ){
    satellite.push (new Orb.SGP4(TLEs[i]));
    var geometry = (new THREE.BoxGeometry(50,50,50));
    var material = (new THREE.MeshBasicMaterial({color: 0xFF6600 /*ORANGE*/}));
    Debris.push (new THREE.Mesh(geometry, material));
  } else if( TLEs[i].OBJECT_TYPE === 'DEBRIS' ){
    satellite.push (new Orb.SGP4(TLEs[i]));
    var geometry = (new THREE.BoxGeometry(50,50,50));
    var material = (new THREE.MeshBasicMaterial({color: 0xFF0080 /*PURPLE*/}));
    Debris.push (new THREE.Mesh(geometry, material));
  } else{
    satellite.push (new Orb.SGP4(TLEs[i]));
    var geometry = (new THREE.BoxGeometry(100,100,100));
    var material = (new THREE.MeshBasicMaterial({color: 0xFF8C00}));
    Debris.push (new THREE.Mesh(geometry, material));
  }

  };
    
    // Add Cubes To Scene
    for( j=0; j < TLEs.length; j++ ){
    scene.add(Debris[j]);
    };

    // Orbit Propogation
    var propogate = setInterval(function (){
    for( k=0; k < TLEs.length; k++ ){
    date = new Date();
    
    Newxyz.push(satellite[k].xyz(date));
  
    Debris[k].position.x = Newxyz[k].x;
    Debris[k].position.y = Newxyz[k].y;
    Debris[k].position.z = Newxyz[k].z + 15000;

    };
    Newxyz = [];

  },1000);
};
render();

  });
