import * as THREE from 'three'

export function addSphere3Mesh(){
    //choose shape
      const sphereGeometry = new THREE.SphereGeometry(.1, .1, .1);
      //choose material
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff222 })
        //choose mesh
      const sphere3Mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

      return sphere3Mesh;
}