let scene, camera, renderer;
function init() {
  scene = new THREE.Scene;

  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);
  camera.position.set(-900, -200, -900);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Initialize Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Ambient Light
  scene.add(new THREE.AmbientLight(0x333333));
  // Add Directional Light
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 3, 5);
  scene.add(light);

  // Create Array & Load Textures for Skybox
  let materialArray = []
  let texture_ft = new THREE.TextureLoader().load("Virtual-Reality-Space/Space/Front.png");
  let texture_bk = new THREE.TextureLoader().load("Virtual-Reality-Space/Space/Back.png");
  let texture_up = new THREE.TextureLoader().load("Virtual-Reality-Space/Space/Top.png");
  let texture_dn = new THREE.TextureLoader().load("Virtual-Reality-Space/Space/Bottom.png");
  let texture_rt = new THREE.TextureLoader().load("Virtual-Reality-Space/Space/Right.png");
  let texture_lf = new THREE.TextureLoader().load("Virtual-Reality-Space/Space/Left.png");

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
  let skyBoxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
  let skyBox = new THREE.Mesh(skyBoxGeo, materialArray);
  scene.add(skyBox);


  animate();
}
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
  SkyBox.rotation.x += 0.10;
  skyBox.rotation.y += 0.10;

}
init();
