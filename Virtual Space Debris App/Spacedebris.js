
var xDistance = 50;
var zDistance = 30;
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color:0x00ff44});

//initial offset so does not start in middle.
var xOffset = -110;

for(var i = 0; i < 100; i++){
    for(var j = 0; j < 3; j++){
            var mesh  = new THREE.Mesh(geometry, material);
            mesh.position.x = Math.random() * 80 - 2 + xOffset;
            mesh.position.y = Math.random() * 80 + xOffset;
            mesh.position.z = Math.random() * 80 - 2 + xOffset;

            scene.add(mesh);
    }
};
