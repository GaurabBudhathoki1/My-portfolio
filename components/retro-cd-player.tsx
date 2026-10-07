"use client";

import { useEffect, useRef, useState } from "react";
import type * as THREE from "three";

type RetroCdPlayerProps = {
  category: string;
  title: string;
  note: string;
};

function drawScreenArtwork(
  canvas: HTMLCanvasElement,
  category: string,
  title: string,
  note: string,
) {
  const context = canvas.getContext("2d");
  if (!context) return;

  const { width, height } = canvas;
  const isMusic = category === "music";
  const background = context.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, isMusic ? "#f24d49" : "#21bdd0");
  background.addColorStop(1, isMusic ? "#f6ae38" : "#5549a8");
  context.fillStyle = background;
  context.fillRect(0, 0, width, height);

  const artWidth = width * 0.63;
  context.save();
  context.beginPath();
  context.rect(0, 0, artWidth, height);
  context.clip();
  context.fillStyle = isMusic ? "#172d55" : "#202c58";
  context.fillRect(0, 0, artWidth, height);

  const burstX = artWidth * 0.53;
  const burstY = height * 0.43;
  const sun = context.createRadialGradient(burstX, burstY, 8, burstX, burstY, height * 0.67);
  sun.addColorStop(0, isMusic ? "#ffdb54" : "#fff07a");
  sun.addColorStop(0.62, isMusic ? "#fa5a42" : "#f44e70");
  sun.addColorStop(1, isMusic ? "#e7365d" : "#4954cf");
  context.fillStyle = sun;
  context.beginPath();
  context.arc(burstX, burstY, height * 0.65, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#172d55";
  context.strokeStyle = "#101927";
  context.lineWidth = 8;
  const buildings = [
    { x: 0.02, w: 0.18, h: 0.33 },
    { x: 0.19, w: 0.17, h: 0.48 },
    { x: 0.78, w: 0.22, h: 0.38 },
  ];
  for (const building of buildings) {
    const x = building.x * artWidth;
    const buildingWidth = building.w * artWidth;
    const top = height * (1 - building.h);
    context.fillRect(x, top, buildingWidth, height - top);
    context.strokeRect(x, top, buildingWidth, height - top);
    context.fillStyle = "#ffd65a";
    for (let row = top + 24; row < height - 18; row += 34) {
      for (let column = x + 14; column < x + buildingWidth - 8; column += 28) {
        context.fillRect(column, row, 10, 14);
      }
    }
    context.fillStyle = "#172d55";
  }

  context.fillStyle = isMusic ? "#20c8df" : "#ffcf4b";
  context.strokeStyle = "#101927";
  context.lineWidth = 12;
  context.beginPath();
  context.moveTo(artWidth * 0.31, height * 0.92);
  context.lineTo(artWidth * 0.42, height * 0.61);
  context.lineTo(artWidth * 0.55, height * 0.68);
  context.lineTo(artWidth * 0.68, height * 0.35);
  context.lineTo(artWidth * 0.85, height * 0.51);
  context.lineTo(artWidth * 0.92, height * 0.96);
  context.closePath();
  context.fill();
  context.stroke();

  context.strokeStyle = "#fff4ce";
  context.lineWidth = 7;
  for (let line = 0; line < 7; line += 1) {
    const startY = height * (0.08 + line * 0.075);
    context.beginPath();
    context.moveTo(artWidth * 0.02, startY);
    context.lineTo(artWidth * (0.25 + (line % 3) * 0.11), startY - height * 0.1);
    context.stroke();
  }

  context.fillStyle = "rgba(11, 17, 31, 0.24)";
  for (let y = 6; y < height; y += 12) {
    for (let x = 6; x < artWidth; x += 12) {
      context.beginPath();
      context.arc(x, y, 2.7, 0, Math.PI * 2);
      context.fill();
    }
  }

  context.strokeStyle = "#101927";
  context.lineWidth = 9;
  context.strokeRect(4, 4, artWidth - 8, height - 8);
  context.restore();

  context.fillStyle = "#17242a";
  const panelX = artWidth;
  const panelWidth = width - artWidth;
  context.fillRect(panelX, 0, panelWidth, height);
  context.fillStyle = isMusic ? "#ff6a50" : "#2bd0d6";
  context.beginPath();
  context.moveTo(panelX, 0);
  context.lineTo(panelX + panelWidth * 0.18, 0);
  context.lineTo(panelX, height * 0.2);
  context.closePath();
  context.fill();

  context.fillStyle = "#9ec4b3";
  context.font = "bold 22px monospace";
  context.letterSpacing = "4px";
  context.fillText(isMusic ? "NOW PLAYING" : "INSPIRATION", panelX + 30, 66);

  context.fillStyle = "#f5f1e7";
  context.font = "bold 36px monospace";
  context.letterSpacing = "0px";
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let currentLine = "";
  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (context.measureText(candidate).width > panelWidth - 60 && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = candidate;
    }
  }
  if (currentLine) lines.push(currentLine);

  let titleY = 175;
  for (const line of lines.slice(0, 3)) {
    context.fillText(line, panelX + 30, titleY, panelWidth - 60);
    titleY += 46;
  }

  context.fillStyle = "#bdd0c9";
  context.font = "24px monospace";
  const noteWords = note.split(/\s+/);
  const noteLines: string[] = [];
  currentLine = "";
  for (const word of noteWords) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (context.measureText(candidate).width > panelWidth - 60 && currentLine) {
      noteLines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = candidate;
    }
  }
  if (currentLine) noteLines.push(currentLine);
  let noteY = Math.max(titleY + 24, height * 0.68);
  for (const line of noteLines.slice(0, 3)) {
    context.fillText(line, panelX + 30, noteY, panelWidth - 60);
    noteY += 34;
  }

  context.fillStyle = "#8db8a9";
  context.fillRect(panelX + 30, height - 74, panelWidth - 60, 5);
  context.fillStyle = "#e4c574";
  context.fillRect(panelX + 30, height - 74, (panelWidth - 60) * 0.42, 5);
}

function applyArtworkTexture(
  THREE: typeof import("three"),
  scene: THREE.Object3D,
  texture: THREE.CanvasTexture,
) {
  let artworkMesh: THREE.Mesh | undefined;
  const screenParts: string[] = [];
  scene.traverse((child) => {
    const normalizedName = child.name.toLowerCase().replaceAll("_", " ");
    if (normalizedName.includes("artwork") || normalizedName.includes("display screen")) {
      screenParts.push(`${child.name} (${child.type})`);
    }
    if (
      normalizedName === "artwork area" &&
      "isMesh" in child &&
      child.isMesh === true
    ) {
      artworkMesh = child as THREE.Mesh;
    }
  });
  if (!artworkMesh) {
    throw new Error(`Screen mesh "Artwork area" was not found. Model screen parts: ${screenParts.join(", ") || "none"}.`);
  }

  const sourceGeometry = artworkMesh.geometry;
  const geometry = sourceGeometry.index
    ? sourceGeometry.toNonIndexed()
    : sourceGeometry.clone();
  const position = geometry.getAttribute("position");
  geometry.computeVertexNormals();
  const uv = new Float32Array(position.count * 2);
  const bounds = new THREE.Box3();
  for (let vertex = 0; vertex < position.count; vertex += 1) {
    bounds.expandByPoint(new THREE.Vector3(position.getX(vertex), position.getY(vertex), position.getZ(vertex)));
  }
  const size = bounds.getSize(new THREE.Vector3());
  const frontZ = bounds.max.z;
  const materialGroups: { materialIndex: number; start: number; count: number }[] = [];

  for (let vertex = 0; vertex < position.count; vertex += 1) {
    uv[vertex * 2] = (position.getX(vertex) - bounds.min.x) / size.x;
    uv[vertex * 2 + 1] = (position.getY(vertex) - bounds.min.y) / size.y;
  }
  geometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  geometry.clearGroups();

  for (let vertex = 0; vertex < position.count; vertex += 3) {
    const a = new THREE.Vector3(position.getX(vertex), position.getY(vertex), position.getZ(vertex));
    const b = new THREE.Vector3(position.getX(vertex + 1), position.getY(vertex + 1), position.getZ(vertex + 1));
    const c = new THREE.Vector3(position.getX(vertex + 2), position.getY(vertex + 2), position.getZ(vertex + 2));
    const faceNormal = b.sub(a).cross(c.sub(a)).normalize();
    const centerZ = (
      position.getZ(vertex) +
      position.getZ(vertex + 1) +
      position.getZ(vertex + 2)
    ) / 3;
    const materialIndex = faceNormal.z > 0.9 && centerZ > frontZ - size.z * 0.05 ? 1 : 0;
    const previousGroup = materialGroups.at(-1);
    if (previousGroup?.materialIndex === materialIndex) {
      previousGroup.count += 3;
    } else {
      materialGroups.push({ materialIndex, start: vertex, count: 3 });
    }
  }
  for (const group of materialGroups) {
    geometry.addGroup(group.start, group.count, group.materialIndex);
  }

  const baseMaterial = Array.isArray(artworkMesh.material) ? artworkMesh.material[0] : artworkMesh.material;
  const screenMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  artworkMesh.geometry = geometry;
  artworkMesh.material = [baseMaterial, screenMaterial];
  sourceGeometry.dispose();
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (!("isMesh" in child) || child.isMesh !== true) return;
    const mesh = child as THREE.Mesh;
    mesh.geometry.dispose();
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const material of materials) material.dispose();
  });
}

export function RetroCdPlayer({ category, title, note }: RetroCdPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const artworkCanvasRef = useRef<HTMLCanvasElement>(null);
  const textureRef = useRef<THREE.CanvasTexture | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const artworkCanvas = artworkCanvasRef.current;
    if (!artworkCanvas) return;
    drawScreenArtwork(artworkCanvas, category, title, note);
    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    }
  }, [category, title, note]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const artworkCanvas = artworkCanvasRef.current;
    if (!container || !canvas || !artworkCanvas) return;

    let disposed = false;
    let renderer: THREE.WebGLRenderer | undefined;
    let model: THREE.Object3D | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let scene: THREE.Scene | undefined;
    let camera: THREE.PerspectiveCamera | undefined;
    let three: typeof import("three") | undefined;

    const resize = () => {
      if (!renderer || !camera || !container || !model || !scene || !three) return;
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      const bounds = new three.Box3().setFromObject(model);
      const size = bounds.getSize(new three.Vector3());
      const fitHeight = Math.max(size.y, size.x / camera.aspect) * 1.25;
      camera.position.set(0, 0, fitHeight / (2 * Math.tan((camera.fov * Math.PI) / 360)) + size.z * 0.7);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    const initialize = async () => {
      try {
        const [THREE, { GLTFLoader }] = await Promise.all([
          import("three"),
          import("three/addons/loaders/GLTFLoader.js"),
        ]);
        if (disposed) return;
        three = THREE;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(38, 1, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        rendererRef.current = renderer;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.1;
        renderer.setClearColor(0x000000, 0);
        scene.add(new THREE.HemisphereLight(0xffffff, 0x55535a, 2.1));

        const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
        keyLight.position.set(-90, 140, 180);
        scene.add(keyLight);
        const fillLight = new THREE.DirectionalLight(0xb7d3ff, 1.3);
        fillLight.position.set(100, -30, 80);
        scene.add(fillLight);
        sceneRef.current = scene;
        cameraRef.current = camera;

        const gltf = await new GLTFLoader().loadAsync("/models/retro_cd_player_3d.glb");
        if (disposed) {
          disposeObject(gltf.scene);
          renderer.dispose();
          return;
        }

        const artworkTexture = new THREE.CanvasTexture(artworkCanvas);
        artworkTexture.colorSpace = THREE.SRGBColorSpace;
        artworkTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        textureRef.current = artworkTexture;
        model = gltf.scene;
        applyArtworkTexture(THREE, model, artworkTexture);
        const bounds = new THREE.Box3().setFromObject(model);
        const center = bounds.getCenter(new THREE.Vector3());
        model.position.sub(center);
        model.rotation.y = 0;
        scene.add(model);

        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);
        resize();
        setLoading(false);
      } catch (loadError) {
        if (!disposed) {
          setError(loadError instanceof Error ? loadError.message : "The 3D player could not be loaded.");
          setLoading(false);
        }
      }
    };

    void initialize();

    return () => {
      disposed = true;
      resizeObserver?.disconnect();
      if (model) disposeObject(model);
      textureRef.current = null;
      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      renderer?.dispose();
    };
  }, []);

  return (
    <div className="cd-player-panel">
      <div
        ref={containerRef}
        className="cd-player-viewer"
        role="img"
        aria-label={`3D CD player showing ${title} on its screen.`}
      >
        <canvas ref={canvasRef} className="cd-player-canvas" aria-hidden="true" />
        <canvas ref={artworkCanvasRef} width={1024} height={512} className="cd-player-artwork-source" aria-hidden="true" />
        {loading ? <span className="cd-player-status">Loading CD player…</span> : null}
        {error ? <span className="cd-player-error" role="alert">Unable to load the CD player: {error}</span> : null}
      </div>
      <div className="cd-player-now-playing" aria-live="polite">
        <span>{category === "music" ? "NOW LISTENING" : "CURRENTLY INSPIRED BY"}</span>
        <strong>{title}</strong>
        <small>{note}</small>
      </div>
    </div>
  );
}
