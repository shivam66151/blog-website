import './homepage.css'
import Header from '../../components/header/Header'
import Posts from '../../posts/Posts'
import SideBar from '../../sidebar/Sidebar'

export default function HomePage() {
  return (
    <>
    <Header />
    <div className='home'>
    <Posts />
    <SideBar />
    </div>
    </>
  )
}
