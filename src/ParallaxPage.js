import { useEffect, useState, useRef } from "react"

const HorizontalParallaxLayer = ({
  speed = 0.5,
  type = "absolute", // "absolute" or "sticky"
  start = 0,
  end = 1900,
  children,
  style = {},
  className = "",
}) => {
  const [scrollX, setScrollX] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const x = window.scrollX

      if (type === "absolute") {
        setScrollX(x * speed)
      } else if (type === "sticky") {
        if (x < start) {
          setScrollX(start)
        } else if (x > end) {
          setScrollX(end)
        } else {
          setScrollX(x)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, start, end, type])

  return (
    <div
      className={className}
      style={{
        position: type === "sticky" ? "fixed" : "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        transform:
          type === "absolute"
            ? `translateX(-${scrollX}px)`
            : "translateX(0)",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "1900px", // fixed internal layout
          height: "100%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default HorizontalParallaxLayer