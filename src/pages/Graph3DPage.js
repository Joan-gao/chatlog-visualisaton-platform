import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import data from '../components/3dGraphData/operation_giraff.json';

const Graph3DPage = () => {
  const mountRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // 添加方向光
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10).normalize();
    scene.add(directionalLight);

    const nodes = data.nodes;
    const links = data.links;

    // 创建节点材料和几何体
    const nodeGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const nodeMaterial = new THREE.MeshPhongMaterial({
      color: 0x0077ff,
      emissive: 0x072534,
      specular: 0x00ffaa,
      shininess: 100,
    });

    const nodeObjects = nodes.map((node, index) => {
      const sphere = new THREE.Mesh(nodeGeometry, nodeMaterial);
      sphere.position.x = Math.random() * 20 - 10;
      sphere.position.y = Math.random() * 20 - 10;
      sphere.position.z = Math.random() * 20 - 10;
      sphere.userData = node;
      sphere.name = node.name;
      scene.add(sphere);
      return { id: node.id, object: sphere, key: `${node.id}-${index}` };
    });

    // 创建链接线
    links.forEach((link, index) => {
      const sourceNode = nodeObjects.find(
        (nodeObj) => nodeObj.id === link.source
      )?.object;
      const targetNode = nodeObjects.find(
        (nodeObj) => nodeObj.id === link.target
      )?.object;

      if (sourceNode && targetNode) {
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(
            sourceNode.position.x,
            sourceNode.position.y,
            sourceNode.position.z
          ),
          new THREE.Vector3(
            targetNode.position.x,
            targetNode.position.y,
            targetNode.position.z
          ),
        ]);

        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        const linkMaterial = new THREE.LineBasicMaterial({
          color: 0x00ffaa,
          linewidth: 2,
          transparent: true,
          opacity: 0.8,
        });

        const line = new THREE.Line(geometry, linkMaterial);
        line.userData = { ...link };
        scene.add(line);
      } else {
        console.error(
          `Missing nodes for link: sourceNode=${link.source}, targetNode=${link.target}`
        );
      }
    });

    camera.position.z = 50;

    const dragControls = new DragControls(
      nodeObjects.map((nodeObj) => nodeObj.object),
      camera,
      renderer.domElement
    );

    dragControls.addEventListener('dragstart', function (event) {
      controls.enabled = false;
    });

    dragControls.addEventListener('dragend', function (event) {
      controls.enabled = true;
    });

    dragControls.addEventListener('hoveron', function (event) {
      setHoveredNode(event.object.userData);
      setHoveredLink(null); // Reset link hover when node is hovered
    });

    dragControls.addEventListener('hoveroff', function (event) {
      setHoveredNode(null);
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children);

      if (intersects.length > 0) {
        const intersected = intersects[0].object;

        if (
          intersected.userData &&
          intersected.userData.source &&
          intersected.userData.target
        ) {
          setHoveredLink(intersected.userData);
          setHoveredNode(null); // Reset node hover when link is hovered
        } else if (intersected.userData) {
          setHoveredNode(intersected.userData);
          setHoveredLink(null); // Reset link hover when node is hovered
        } else {
          setHoveredNode(null);
          setHoveredLink(null);
        }
      } else {
        setHoveredNode(null);
        setHoveredLink(null);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
      {hoveredNode && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            color: 'white',
            borderRadius: '5px',
          }}
        >
          <div>
            <strong>Id:</strong> {hoveredNode.id}
          </div>
          <div>
            <strong>Name:</strong> {hoveredNode.name}
          </div>
          <div>
            <strong>Label:</strong> {hoveredNode.label}
          </div>
          <div>
            <strong>Description:</strong> {hoveredNode.description}
          </div>
        </div>
      )}
      {hoveredLink && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            padding: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            color: 'white',
            borderRadius: '5px',
          }}
        >
          <div>
            <strong>Source:</strong> {hoveredLink.source}
          </div>
          <div>
            <strong>Target:</strong> {hoveredLink.target}
          </div>
          <div>
            <strong>Type:</strong> {hoveredLink.type}
          </div>
          <div>
            <strong>Date:</strong> {hoveredLink.date}
          </div>
          <div>
            <strong>Time:</strong> {hoveredLink.time}
          </div>
        </div>
      )}
    </div>
  );
};

export default Graph3DPage;
