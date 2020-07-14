// Read in TLE's From JSON File      
// Obtain xyz for orbit
let myRequest = new Request("./TLEs.json");
fetch(myRequest)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (TLEs) {
var render = function(){

console.log('Length of TLEs =', TLEs);
var satellite = [];    
var Debris = [];
let date = [];
let Newxyz = [];

var i;
var j;

for (i = 0; i < TLEs.length; i++) {
      satellite.push (new Orb.SGP4(TLEs[i]));
      var geometry = (new THREE.BoxGeometry(100,100,100));
      var material = (new THREE.MeshBasicMaterial({color: 0x00FF44}));
      Debris.push (new THREE.Mesh(geometry, material));
    };
    console.log('Satellite =', satellite);
    console.log('geometry =', geometry);
    console.log('material =', material);
    console.log('Debris =', Debris);
    
    // Add Cubes To Scene
    for(j=0; j <TLEs.length; j++){
    scene.add(Debris[j]);
    Debris[j].position.x = j*300;
    };

    // Orbit Propogation
    var propogate = setInterval(function (){
    for(k=0; k<TLEs.length; k++){
    date = new Date();
    
    Newxyz.push(satellite[k].xyz(date));
  
    Debris[k].position.x = Newxyz[k].x;
    Debris[k].position.y = Newxyz[k].y;
    Debris[k].position.z = Newxyz[k].z;
    };
    Newxyz = [];
    console.log('Newxyz:',Newxyz);
  },1000);
  propogate();
};
render();
  });
