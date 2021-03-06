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
  <script src="OrbitControls.js"></script>

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

    // Initialize Controls
    controls = new THREE.OrbitControls( camera, renderer.domElement );

    // Add Cube
    var geometry = new THREE.BoxGeometry( 2, 2, 2 );
    var cubeMaterials = 
    [
      new THREE.MeshBasicMaterial( { color: 0xF00000, side: THREE.DoubleSide } ), // RIGHT SIDE
      new THREE.MeshPhongMaterial( { color: 0x0F0000, side: THREE.DoubleSide } ), // LEFT SIDE
      new THREE.MeshLambertMaterial( { color: 0x00F000, side: THREE.DoubleSide } ), // TOP SIDE
      new THREE.MeshPhongMaterial( { color: 0x000F00, side: THREE.DoubleSide } ), // BOTTOM SIDE
      new THREE.MeshLambertMaterial( { color: 0x0000F0, side: THREE.DoubleSide } ), // FRONT SIDE
      new THREE.MeshBasicMaterial( { color: 0x00000F, side: THREE.DoubleSide } ), // BACK SIDE
    ]

    var material = new THREE.MeshFaceMaterial ( cubeMaterials );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube ) ;

    camera.position.z = 3;

    // First Light Object
    var firstLightObjectGeometry = new THREE.BoxGeometry ( 1, 1, 1 );
    var firstLightObjectMaterial = new THREE.MeshLambertMaterial ( { color: 0xff0000, wireframe: false });
    var firstLightObjectCube = new THREE.Mesh( firstLightObjectGeometry, firstLightObjectMaterial)
    firstLightObjectCube.position.z = 5;
    scene.add( firstLightObjectCube );

    // Second Light Object
    var secondLightObjectGeometry = new THREE.BoxGeometry ( 1, 1, 1 );
    var secondLightObjectMaterial = new THREE.MeshLambertMaterial ( { color: 0x0000FF, wireframe: false });
    var secondLightObjectCube = new THREE.Mesh( secondLightObjectGeometry, secondLightObjectMaterial)
    secondLightObjectCube.position.z = 5;
    scene.add( secondLightObjectCube );

    // Third Light Object
    var thirdLightObjectGeometry = new THREE.BoxGeometry ( 1, 1, 1 );
    var thirdLightObjectMaterial = new THREE.MeshLambertMaterial ( { color: 0x00FF00, wireframe: false });
    var thirdLightObjectCube = new THREE.Mesh( thirdLightObjectGeometry, thirdLightObjectMaterial)
    thirdLightObjectCube.position.z = 5;
    scene.add( thirdLightObjectCube );

    // Directional Light Object
    var directionalLightObjectGeometry = new THREE.BoxGeometry ( 1, 1, 1 );
    var directionalLightObjectMaterial = new THREE.MeshLambertMaterial ( { color: 0xFFFFFF, wireframe: false });
    var directionalLightObjectCube = new THREE.Mesh( directionalLightObjectGeometry, directionalLightObjectMaterial)
    directionalLightObjectCube.position.set ( 0, 1, 0);
    scene.add( directionalLightObjectCube );

    // Spot Light Object
    var spotLightObjectGeometry = new THREE.BoxGeometry ( 1, 1, 1 );
    var spotLightObjectMaterial = new THREE.MeshLambertMaterial ( { color: 0xff45f6, wireframe: false });
    var spotLightObjectCube = new THREE.Mesh( spotLightObjectGeometry, spotLightObjectMaterial)
    spotLightObjectCube.position.set ( 0, 3, 0);
    scene.add( spotLightObjectCube );


    // Floor
    var floorGeometry = new THREE.CubeGeometry( 10, 1, 10 );
    var floorMaterial = new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load( 'img/Floor.png' ), side: THREE.DoubleSide } );
    var floorCube = new THREE.Mesh( floorGeometry, floorMaterial );
    floorCube.position.y = -5;
    scene.add( floorCube );
    
    // Ceiling
    var ceilingGeometry = new THREE.CubeGeometry( 10, 1, 10 );
    var ceilingMaterial = new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load( 'img/Ceiling.png'), side: THREE.DoubleSide } );
    var ceilingCube = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
    ceilingCube.position.y = 5;
    scene.add( ceilingCube );

    // Left Wall
    var leftWallGeometry = new THREE.CubeGeometry( 1, 10, 10 );
    var leftWallMaterial = new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load( 'img/LeftWall.png'), side: THREE.DoubleSide } );
    var leftWallCube = new THREE.Mesh( leftWallGeometry, leftWallMaterial );
    leftWallCube.position.x = -5;
    scene.add( leftWallCube ); 

    // Right Wall
    var rightWallGeometry = new THREE.CubeGeometry( 1, 10, 10 );
    var rightWallMaterial = new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader( ).load( 'img/RightWall.png'), side: THREE.DoubleSide } );
    var rightWallCube = new THREE.Mesh( rightWallGeometry, rightWallMaterial );
    rightWallCube.position.x = 5;
    scene.add( rightWallCube ); 

    //  Ambient Lighting
    var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.8 );
    scene.add( ambientLight );

    // Point Lighting
    var light1 = new THREE.PointLight( 0xff0000, 10, 50 );
    scene.add( light1 );

    var light2 = new THREE.PointLight (0x0000FF, 0.5, 50 );
    scene.add( light2 );

    var light3 = new THREE.PointLight( 0x00FF00, 1, 50 );
    scene.add( light3 );

    // Directional Lighting
    var directionalLight = new THREE.DirectionalLight( 0xFFFFFF,1 );
    directionalLight.position.set( 0, 1, 0 );
    scene.add( directionalLight )

    // Spot Lighting
    var spotLight = new THREE.SpotLight( 0xff45f6, 25 );
    spotLight.position.set( 0, 3, 0);
    scene.add( spotLight );

    // Render
    function animate() 
    {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
      
      var time = Date.now( ) * 0.0005;
      
      light1.position.x = Math.sin( time * 0.7) * 10;
      light1.position.y = Math.cos( time * 0.5) * 12;
      light1.position.z = Math.cos( time * 0.3) * 10;
      
      firstLightObjectCube.position.x = Math.sin( time * 0.7) * 10;
      firstLightObjectCube.position.y = Math.cos( time * 0.5) * 12;
      firstLightObjectCube.position.z = Math.cos( time * 0.3) * 10;

      light2.position.x = Math.cos( time * 0.3) * 12;
      light2.position.y = Math.sin( time * 0.5) * 15;
      light2.position.z = Math.sin( time * 0.7) * 12;

      secondLightObjectCube.position.x = Math.cos( time * 0.3) * 12;
      secondLightObjectCube.position.y = Math.sin( time * 0.5) * 15;
      secondLightObjectCube.position.z = Math.sin( time * 0.7) * 12;

      light3.position.x = Math.sin( time * 0.7) * 18;
      light3.position.y = Math.cos( time * 0.3) * 14;
      light3.position.z = Math.sin( time * 0.5) * 10;

      thirdLightObjectCube.position.x = Math.sin( time * 0.7) * 18;
      thirdLightObjectCube.position.y = Math.cos( time * 0.3) * 14;
      thirdLightObjectCube.position.z = Math.sin( time * 0.5) * 10;
    }
    animate( );
  </script>
</body>

</html>
