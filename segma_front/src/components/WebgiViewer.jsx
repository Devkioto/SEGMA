import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ViewerApp,
  addBasePlugins,
  DiamondPlugin,
} from "webgi";

const WebgiViewer = () => {
  const canvasRef = useRef(null);
  const viewerRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    const setupViewer = async () => {
      const viewer = new ViewerApp({
        canvas: canvasRef.current,
      });
      viewerRef.current = viewer;

      await addBasePlugins(viewer);
      await viewer.addPlugin(DiamondPlugin);

      await viewer.load("/models/scene.glb"); // ✅ Correct public path

      const camera = viewer.scene.activeCamera;
      const controls = camera.controls;

      cameraRef.current = camera;
      controlsRef.current = controls;

      // ❌ Disable camera control
      controls.enabled = false;

      viewer.setDirty(); // force re-render
    };

    setupViewer();
  }, []);

  const goToView4 = () => {
    const viewer = viewerRef.current;
    const camera = cameraRef.current;
    // const controls = controlsRef.current;

    if (!viewer || !camera || !controls) return;

    const targetView = {
      position: { x: 2.166244, y: 0.286118, z: 3.92870 },
      target: { x: -0.2454, y: 0.147848, z: 0.146226 },
    };

    // Custom object to animate both position and target
    const camPos = { ...camera.position };
    const camTarget = { ...controls.target };

    gsap.to(camPos, {
      ...targetView.position,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.position.set(camPos.x, camPos.y, camPos.z);
        camera.lookAt(camTarget.x, camTarget.y, camTarget.z);
        viewer.setDirty();
      },
    });

    gsap.to(camTarget, {
      ...targetView.target,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        controls.target.set(camTarget.x, camTarget.y, camTarget.z);
        camera.lookAt(camTarget.x, camTarget.y, camTarget.z);
        viewer.setDirty();
      },
    });
  };

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />

      <button
        onClick={goToView4}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: "10px 20px",
          fontSize: "16px",
          background: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        Go to View #4
      </button>
    </div>
  );
};

export default WebgiViewer;
