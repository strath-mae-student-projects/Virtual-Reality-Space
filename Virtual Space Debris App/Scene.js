let scene, camera, renderer;
function init() {
  scene = new THREE.Scene;

  //camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 3000000);
  //camera.position.set(0, 0, -8000);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Initialize Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Ambient Light
  scene.add(new THREE.AmbientLight(0x333333));
  // Add Directional Light
  var light = new THREE.PointLight( 0xffffff, 100, 100 );
  light.position.set( -20, 0, 0 );
  scene.add( light );

  animate();
}
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera)

}
init();
