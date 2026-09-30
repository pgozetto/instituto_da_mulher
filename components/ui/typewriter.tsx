"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  words: string[]
  speed?: number
  delayBetweenWords?: number
  cursor?: boolean
  cursorChar?: string
}

export function Typewriter({
  words,
  speed = 100,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = "|",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const currentWord = words[wordIndex] ?? ""

  useEffect(() => {
    const isWordComplete = !isDeleting && charIndex >= currentWord.length
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setIsDeleting(true)
          }
        } else if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setWordIndex((previousIndex) => (previousIndex + 1) % words.length)
        }
      },
      isWordComplete ? delayBetweenWords : isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, currentWord, isDeleting, speed, delayBetweenWords, wordIndex, words.length])

  useEffect(() => {
    if (!cursor) return

    const cursorInterval = setInterval(() => {
      setShowCursor((previous) => !previous)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [cursor])

  const cursorMark = cursor && (
    <span className="ml-1 transition-opacity duration-75" style={{ opacity: showCursor ? 1 : 0 }} aria-hidden="true">
      {cursorChar}
    </span>
  )
  const longestWord = words.reduce((longest, word) => (word.length > longest.length ? word : longest), "")

  // The invisible copy of the full text reserves the final height, so the typing never pushes the page down.
  return (
    <span style={{ display: "inline-grid" }}>
      <span style={{ gridArea: "1 / 1", visibility: "hidden" }} aria-hidden="true">
        {longestWord}
        {cursor && <span className="ml-1">{cursorChar}</span>}
      </span>
      <span style={{ gridArea: "1 / 1" }}>
        {displayText}
        {cursorMark}
      </span>
    </span>
  )
}
