import * as THREE from 'three'

export function addLight(){
    const light = new THREE.PointLight(0xffffff, 5, 20)
    light.position.set(0, 0, 1)
    return light
}