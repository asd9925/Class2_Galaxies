import * as THREE from 'three'

export function addSphere4Mesh(){
    //choose shape
      const sphereGeometry = new THREE.SphereGeometry(0.4, 32, 32);
      //choose material
      const sphereMaterial = new THREE.MeshStandardMaterial({
                    color: 0xb873333,
                    metalness: 2.0,
                    roughness: 0.35,
                    //how strong colour is emitted
                    emissive: 0x0a0a0a,
                    emissiveIntensity: 0.7,
                  })
        //choose mesh
      const sphere4Mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

      return sphere4Mesh;
}