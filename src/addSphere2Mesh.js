import * as THREE from 'three'

export function addSphere2Mesh(){

    //choose shape
      const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
      //choose material
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff })
        //choose mesh
      const sphere2Mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

      return sphere2Mesh;
}