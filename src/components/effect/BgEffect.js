import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import * as THREE from 'three'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const BgEffect = ({children}) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
        setVantaEffect(BIRDS({
            THREE,
            el: myRef.current,
            quantity: 3,
            birdsize: 1,
            maxHeight: 90.00,
            maxWidth: 90.00,
            scale: 1.00,
            scaleMobile: 1.5
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div  className="birds" ref={myRef}>
    {children}
  </div>
}

export default BgEffect