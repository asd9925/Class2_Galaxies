import * as THREE from 'three'

export function addSphereMesh(){
    //choose shape
      const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
      //choose material
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        //choose mesh
      const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

      return sphereMesh;
}