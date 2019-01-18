import React, { useEffect, useRef, useLayoutEffect } from "react"
import styled from "@emotion/styled"

// Components
const DisplayValues = ({ values }: { values: { [s: string]: string } }) => (
  <div css={{ margin: "1rem 0", overflow: "scroll", fontSize: ".65rem" }}>
    {Object.keys(values).map(key => (
      <React.Fragment key={key}>
        <p>
          {key}: {values[key]}
        </p>
      </React.Fragment>
    ))}
  </div>
)
const ModalOverlay = styled.div`
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`
const Modal = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 2rem 3rem;
  text-align: center;
  overflow: visible;
  max-height: 100vh;
  overflow-y: auto;
`

// Hooks
function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  handler: (a: any) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
}
function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden"
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = "visible")
  }, []) // Empty array ensures effect is only run on mount and unmount
}
export default ({
  title,
  values,
  onClose,
}: {
  title: string
  values: { [s: string]: string }
  onClose: () => void
}) => {
  const ref = useRef(null)
  useOnClickOutside(ref, () => onClose())
  useLockBodyScroll()
  return (
    <ModalOverlay>
      <Modal ref={ref}>
        <h2>{title}</h2>
        <DisplayValues values={values} />
      </Modal>
    </ModalOverlay>
  )
}
