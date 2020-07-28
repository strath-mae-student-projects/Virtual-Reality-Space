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
earthMesh.position.set( 0, 0, 8000 )
scene.add(earthMesh)

// Inside Sphere
// create the geometry sphere
var geometry1  = new THREE.SphereGeometry(6371, 32, 32)
// create the material, using a texture of startfield
var material1  = new THREE.MeshBasicMaterial()
material1.map   = THREE.ImageUtils.loadTexture('/Earth/Noclouds.jpg')
material1.side  = THREE.BackSide
// create the mesh based on geometry and material
var mesh  = new THREE.Mesh(geometry1, material1)
mesh.position.set( 0, 0, 8000 )
scene.add(mesh)

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
  earthMesh.rotation.y += 0.000072722;
  renderer.render( scene, camera );
}
animate( );
