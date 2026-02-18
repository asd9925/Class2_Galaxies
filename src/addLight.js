import * as THREE from 'three'

export function addLight(){
    const light = new THREE.PointLight(0xfffff0, 15, 20)
    light.position.set(0, 0, 1.5)
    return light
}