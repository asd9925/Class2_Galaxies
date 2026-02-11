import * as THREE from 'three'

export function addSphere2Mesh(){

    //choose shape
      const sphereGeometry = new THREE.SphereGeometry(0.4, 32, 32);
      //choose material
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: "rgb(255, 0, 0)" })
        //choose mesh
      const sphere2Mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

      return sphere2Mesh;
}