import React from "react";

interface PostProps {
  author: string
  content: string
}

export function Post({author, content}: PostProps) {
  return (
    <>
      <strong>{author}</strong>
      <p>{content}</p>
    </>
  )
}