<script setup lang="ts">
import * as THREE from 'three';
import { onMounted, onUnmounted, shallowRef } from 'vue';

const canvasContainer = shallowRef<HTMLElement | null>(null);

// Scene variables
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let particles: THREE.Points;

// Particle system parameters
const PARTICLE_COUNT = 5000;
const positions = new Float32Array(PARTICLE_COUNT * 3);
const velocities = new Float32Array(PARTICLE_COUNT * 3);

const speedFactor = 0.4;

// Initialize particle positions and velocities
for (let i = 0; i < PARTICLE_COUNT; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 10; // Random X position
  positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Random Y position
  positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Random Z position

  velocities[i * 3] = (Math.random() - 0.5) * 0.01; // Random X velocity
  velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01; // Random Y velocity
  velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01; // Random Z velocity
}

onMounted(() => {
  if (!canvasContainer.value) return;

  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  canvasContainer.value.appendChild(renderer.domElement);

  // Particle system setup
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const canvas = document.createElement('canvas');
  const size = 256;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fillStyle = '#50C878'; // Emerald green color
  ctx.fill();
  const texture = new THREE.CanvasTexture(canvas);

  const material = new THREE.PointsMaterial({
    map: texture,
    size: 0.1,
    transparent: true,
    opacity: 0.8,
    alphaTest: 0.5,
    blending: THREE.NormalBlending,
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);
  camera.position.z = 5;

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    const positions = particles.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Update particle positions based on their velocities and speedFactor
      positions[i * 3] += velocities[i * 3] * speedFactor; // X position
      positions[i * 3 + 1] += velocities[i * 3 + 1] * speedFactor; // Y position
      positions[i * 3 + 2] += velocities[i * 3 + 2] * speedFactor; // Z position

      // Optional: Add boundary checks to keep particles within a certain area
      if (positions[i * 3] > 5) positions[i * 3] = -5;
      if (positions[i * 3] < -5) positions[i * 3] = 5;
      if (positions[i * 3 + 1] > 5) positions[i * 3 + 1] = -5;
      if (positions[i * 3 + 1] < -5) positions[i * 3 + 1] = 5;
      if (positions[i * 3 + 2] > 5) positions[i * 3 + 2] = -5;
      if (positions[i * 3 + 2] < -5) positions[i * 3 + 2] = 5;
    }

    particles.geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  };

  animate();

  // Handle window resize
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);

  if (renderer) {
    renderer.dispose();
    canvasContainer.value?.removeChild(renderer.domElement);
  }
});

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
</script>

<template>
  <div class="flex justify-center relative">
    <div ref="canvasContainer" class="fixed -z-50 opacity-45 dark:opacity-15" />
    <slot></slot>
    <ScrollTop />
  </div>
</template>

<style scoped>
</style>