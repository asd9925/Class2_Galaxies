import * as THREE from 'three'

export function addSphere4Mesh(){
    //choose shape
      const sphereGeometry = new THREE.SphereGeometry(0.4, 32, 32);
      //choose material
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x2012ff })
        //choose mesh
      const sphere4Mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

      return sphere4Mesh;
}