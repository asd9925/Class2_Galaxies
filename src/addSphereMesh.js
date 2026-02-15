import * as THREE from 'three'

export function addSphereMesh(){
    //choose shape
      const sphereGeometry = new THREE.SphereGeometry(0.4, 32, 32);
      //choose material
      // const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      // const material = new THREE.MeshPhysicalMaterial({

      // })

      const sphereMaterial = new THREE.TextureLoader().load('./LavaTexture')

      // const textureLoader = new THREE.TextureLoader()
      // const lavaTexture = textureLoader.load('/Material_1919.jpg')

        //choose mesh
      const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

      return sphereMesh;
}