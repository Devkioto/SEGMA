import React, { useEffect, useRef } from 'react'
import {
  ViewerApp,
  addBasePlugins,
  AssetManagerPlugin,
  DiamondPlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GBufferPlugin,
  
} from 'webgi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Model() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const setupViewer = async () => {
      const viewer = new ViewerApp({
        canvas: canvasRef.current,
      })

      // Base essentials (camera, environment, controls, etc.)
      await addBasePlugins(viewer)

      // Post-processing plugins
      await viewer.addPlugin(GBufferPlugin)
      await viewer.addPlugin(SSRPlugin)
      await viewer.addPlugin(SSAOPlugin)
      await viewer.addPlugin(BloomPlugin)
      await viewer.addPlugin(TonemapPlugin)
      await viewer.addPlugin(DiamondPlugin)
      await viewer.addPlugin(AssetManagerPlugin)

      // Configure tonemapping
      const tonemap = viewer.getPlugin(TonemapPlugin)
      tonemap.enabled = true
      tonemap.config.exposure = 1.3

      // Configure SSAA


      // Load model
      const model = await viewer.load('/models/scene.glb', {
        autoCenter: true,
        scale: 0.5,
      })
      model.position.set(0, 0, 0) // Set model position to origin

      // Disable all camera controls (zoom, pan, rotate)
      const camera = viewer.scene.activeCamera
      const controls = camera.controls
      controls.enableZoom = false
      controls.enablePan = false
      controls.enableRotate = false

      // Optional: expose viewer to global for debugging
      window.viewer = viewer
    }

    setupViewer()

    return () => {
      // Optional: clean up if needed
    }
  }, [])

  return (
    <div
      id="webgi-canvas-container"
      style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
    >
      <canvas
        id="webgi-canvas"
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  )
}

export default Model
