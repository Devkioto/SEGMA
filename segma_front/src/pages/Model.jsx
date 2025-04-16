import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ViewerApp,
  addBasePlugins,
  AssetManagerPlugin,
  TonemapPlugin,
  GBufferPlugin,
  DiamondPlugin
} from 'webgi'

function Model() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const [viewerReady, setViewerReady] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setViewerReady(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 } // triggers when 25% visible
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!viewerReady) return

    const setupViewer = async () => {
      const viewer = new ViewerApp({
        canvas: canvasRef.current,
      })

      await addBasePlugins(viewer)

      await viewer.addPlugin(GBufferPlugin)
      await viewer.addPlugin(TonemapPlugin)
      await viewer.addPlugin(AssetManagerPlugin)
      await viewer.addPlugin(DiamondPlugin)

      const tonemap = viewer.getPlugin(TonemapPlugin)
      tonemap.enabled = true
      tonemap.config.exposure = 1.2

      await viewer.load('/models/scene.glb', {
        autoCenter: true,
        scale: 0.5,
      })
        // Limit zoom in and out
  const controls = viewer.scene.activeCamera.controls
  controls.minDistance = 3    // Minimum zoom distance
  controls.maxDistance = 10   // Maximum zoom distance

      window.viewer = viewer
    }

    setupViewer()
  }, [viewerReady])

  return (
    <>

    <motion.div
      ref={containerRef}
      className='bg-[#f5f5f5] '
      id="webgi-canvas-container"
      style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {viewerReady ? (
        <canvas
          id="webgi-canvas"
          ref={canvasRef}
          style={{ width: '100%', height: '100%', display: 'block' }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
          }}
        >
          <div className="flex items-center justify-center z-50">
            <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5L12 4V0A12 12 0 1024 12h-4a8 8 0 01-16 0z"></path>
            </svg>
            <span className="ml-2">Loading 3D Model...</span>
          </div>
        </div>
      )}
    </motion.div>
    </>
  )
}

export default Model
