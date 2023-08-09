import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gcrozariol.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Crozariol</strong>
              <time title='October 8th, 2022 08:13 AM' dateTime="2022-07-19 08:13:30">About 1y ago</time>
            </div>
            
            <button title='Delete comment'>
              <Trash size={24} />
            </button>
            
          </header>
          <p>{content}</p>
        </div>
        
        <footer>
          <button>
            <ThumbsUp size={20} />
            Clap <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
}