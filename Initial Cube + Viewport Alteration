<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>My first three.js app</title>
  <style>
    body 
    {
      margin: 0;
    }

    canvas 
    {
      display: block;
    }
  </style>
</head>

<body>
  <script src="three.js"></script>
  <script>
    // Our Javascript will go here.
    // Create Scene
    var scene = new THREE.Scene( );
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer( );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    // Update Viewport - Allows for the window to be resized without causing the scene to change
    window.addEventListener( 'resize', function( )
    {
      var width = window.innerWidth;
      var height = window.innerHeight;
      renderer.setSize( width, height );
      camera.aspect = width/height;
      camera.updateProjectionMatrix( );
    } );

    // Add Cube
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: false } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube ) ;

    camera.position.z = 5;

    // Render
    function animate() 
    {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
    animate( );
  </script>
</body>

</html>
