import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gcrozariol.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Crozariol</strong>
              <time title='October 8th, 2022 08:13 AM' dateTime="2022-07-19 08:13:30">About 1y ago</time>
            </div>
            
            <button onClick={handleDeleteComment} title='Delete comment'>
              <Trash size={24} />
            </button>
            
          </header>
          <p>{content}</p>
        </div>
        
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Clap <span>{likeCount}</span>
          </button>
        </footer>

      </div>
    </div>
  )
}