import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post key={1} author="Guilherme Crozariol" content="This is a post content!" />
          <Post key={1} author="Claudio Crozariol" content="This is a another post content!" />
        </main>
      </div>
    </div>
  )
}
