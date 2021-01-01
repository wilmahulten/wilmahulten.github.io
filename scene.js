let scene, camera, renderer, light, materials = [],
backgroundColor, planeColor, numPlanes=4000, numIllustrations=16,
geometry, planes = [], plane, planeSize = 60;

function init() {
  scene = new THREE.Scene();
  backgroundColor = new THREE.Color(0xd6d0d0);
  scene.background = backgroundColor;
  camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight, 0.1, 500);
  camera.position = (0, 0, 0);
  // Camera facing upwards:
  camera.rotation.x = 1.5;
  camera.rotation.y = 0.27;
  camera.rotation.z = 0.28;

  light = new THREE.AmbientLight(0x404040);
  scene.add(light);

  renderer = new THREE.WebGLRenderer( { canvas: graphicCanvas} );
  renderer.setSize(window.innerWidth*0.43, window.innerHeight*0.53);
  document.body.appendChild(renderer.domElement);

  planeColor = backgroundColor;
  geometry = new THREE.PlaneGeometry(planeSize, planeSize, planeSize);

for ( let i=0; i<numIllustrations; i++ ) {
    materials[i] = new THREE.MeshBasicMaterial( {
    color: planeColor,
    map: new THREE.TextureLoader().load('illustrations/edits/'+i+".JPG"),
    side: THREE.DoubleSide,
    wireframe: true
})
};
  for ( let i = 0; i < numPlanes; i ++ ) {
    planes[i] = new THREE.Mesh( geometry, materials[i%materials.length] );
    planes[i].position.x = Math.random() * 1200 - 600;
    planes[i].position.y = Math.random() * 600 - 300;
    planes[i].position.z = Math.random() * 800 - 400;

    planes[i].rotation.x = Math.random();
    planes[i].rotation.y = Math.random();
    planes[i].rotation.z = Math.random();
    scene.add(planes[i]);
  };

  animate();
  window.addEventListener('resize', onWindowResize, false);
}
function animate() {

for(var i=0; i<numPlanes; i++) {
  planes[i].rotation.x += 0.001*Math.random();
  planes[i].rotation.y -= 0.004*Math.random();
  planes[i].rotation.z += 0.003*Math.random();

  planes[i].position.y -= Math.random()*0.7;
  if (planes[i].position.y < -200) {
    planes[i].position.y = 200;
    planes[i].position = 0;
  }
};
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
function onWindowResize() {
  camera.aspect = window.innerWidth*0.43/window.innerHeight*0.53;
  renderer.setSize(window.innerWidth*0.43, window.innerHeight*0.53);
  camera.updateProjectionMatrix();
}
init();
