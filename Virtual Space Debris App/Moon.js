// Create The Moon To Orbit Earth

//Moon 
var moonGeometry = new THREE.SphereGeometry(12.5, 32, 32);
var moonMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("/Moon/moon_texture.jpg")
});
var moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.set( -200, 0, 0);
scene.add(moon);

//  Create Moon Light
var moonLight = new THREE.SpotLight( 0xffffff );
moonLight.position.set( -200, 0, 0 );

moonLight.castShadow = true;

moonLight.shadow.mapSize.width = 1024;
moonLight.shadow.mapSize.height = 1024;

moonLight.shadow.camera.near = 500;
moonLight.shadow.camera.far = 4000;
moonLight.shadow.camera.fov = 30;

scene.add( moonLight );

//Set the moon's orbital radius, start angle, and angle increment value
var r = -200;
var theta = 0;
var dTheta = 10 * Math.PI / 1000;

//Render loop
var render = function() {

  //Increment theta, and update moon x and y
  //position based off new theta value        
  theta += dTheta;
  moon.position.x = r * Math.cos(theta);
  moon.position.z = r * Math.sin(theta);

  moonLight.position.x = r * Math.cos(theta);
  moonLight.position.z = r * Math.sign(theta);

  renderer.render(scene, camera);
  requestAnimationFrame(render);
};
render();
