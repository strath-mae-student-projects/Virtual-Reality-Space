// Create The Earth For Space Debris To Orbit

// Add Light
scene.add(new THREE.AmbientLight(0x333333));

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(500, 300, 500);
scene.add(light);

// Create Sphere
var geometry   = new THREE.SphereGeometry(6371, 32, 32)
var material  = new THREE.MeshLambertMaterial()
var earthMesh = new THREE.Mesh( geometry, material )
earthMesh.position.set( 0, 0, 0 )
scene.add(earthMesh)

// Add Earth Texture
material.map = new THREE.TextureLoader().load("/Earth/Noclouds.jpg")

// Add Bump Map - Produces Height
material.bumpMap = new THREE.TextureLoader().load("/Earth/bump.jpg")
material.bumpScale = 1

// Create Specularity of Sea
material.specularMap    = new THREE.TextureLoader().load("/Earth/specular.jpg")
material.specular  = new THREE.Color('grey')

function animate() 
{
  requestAnimationFrame( animate );
  earthMesh.rotation.y += 0.001;
  renderer.render( scene, camera );
}
animate( );
