// Create Array & Load Textures for Skybox
let materialArray = []
let texture_ft = new THREE.TextureLoader().load("/Space/Front.png");
let texture_bk = new THREE.TextureLoader().load("/Space/Back.png");
let texture_up = new THREE.TextureLoader().load("/Space/Top.png");
let texture_dn = new THREE.TextureLoader().load("/Space/Bottom.png");
let texture_rt = new THREE.TextureLoader().load("/Space/Right.png");
let texture_lf = new THREE.TextureLoader().load("/Space/Left.png");

// Place Textures in Skybox Array
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

// Make Skybox images on the inside
for (let i = 0; i < 6; i++)
  materialArray[i].side = THREE.BackSide;

// Add Skybox
let skyBoxGeo = new THREE.BoxGeometry(290000, 290000, 290000);
let skyBox = new THREE.Mesh(skyBoxGeo, materialArray);
scene.add(skyBox);
