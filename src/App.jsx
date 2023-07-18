import { Post } from "./Post"
import { Header } from "./components/Header"
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post key={1} author="Guilherme Crozariol" content="This is a post content!" />
      <Post key={1} author="Claudio Crozariol" content="This is a another post content!" />
    </div>
  )
}
