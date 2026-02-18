import * as THREE from 'three'

export function addSphereMesh(){
    //choose shape
      const sphereGeometry = new THREE.SphereGeometry(0.4, 32, 32);
      //choose material
      // const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      // const material = new THREE.MeshPhysicalMaterial({

      // })

      // const sphereMaterial = new THREE.TextureLoader().load('./LavaTexture')

      // const textureLoader = new THREE.TextureLoader()
      // const lavaTexture = textureLoader.load('/Material_1919.jpg')

      const sphereMaterial = new THREE.MeshStandardMaterial({
              color: 0x0335fc,
              metalness: 2.0,
              roughness: 0.35,
              //how strong colour is emitted
              emissive: 0x0a0a0a,
              emissiveIntensity: 0.7,
            })

        //choose mesh
      const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

      return sphereMesh;
}