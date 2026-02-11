import * as THREE from 'three'

export function addSphere3Mesh(){
    //choose shape
      const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
      //choose material
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: "rgb(232, 84, 210)" })
        //choose mesh
      const sphere3Mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

      return sphere3Mesh;
}