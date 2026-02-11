import * as THREE from 'three'

export function addSphere4Mesh(){
    //choose shape
      const sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
      //choose material
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff222 })
        //choose mesh
      const sphere4Mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

      return sphere4Mesh;
}