// Create The Earth For Space Debris To Orbit

// Create Sphere
var geometry   = new THREE.SphereGeometry(50, 32, 32)
var material  = new THREE.MeshPhongMaterial()
var earthMesh = new THREE.Mesh( geometry, material )
scene.add(earthMesh)

// Add Earth Texture
material.map    = THREE.ImageUtils.loadTexture('Earth/Noclouds.jpg')

// Add Bump Map - Produces Height
material.bumpMap    = THREE.ImageUtils.loadTexture('Earth/Bump.jpg')
material.bumpScale = 5

// Create Specularity of Sea
material.specularMap    = THREE.ImageUtils.loadTexture('Earth/Specular.jpg')
material.specular  = new THREE.Color('grey')

// Add Clouds
var geometry   = new THREE.SphereGeometry(0.51, 32, 32)
var material  = new THREE.MeshPhongMaterial({
  map     : new THREE.Texture(canvasCloud),
  side        : THREE.DoubleSide,
  opacity     : 0.8,
  transparent : true,
  depthWrite  : false,
})
var cloudMesh = new THREE.Mesh(geometry, material)
earthMesh.add(cloudMesh)

function animate() 
{
  requestAnimationFrame( animate );
  earthMesh.rotation.y += 0.005;
  renderer.render( scene, camera );
}
animate( );
