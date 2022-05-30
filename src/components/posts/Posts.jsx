import Post from '../post/Post'
import './posts.css'

export default function Posts() {
  return (
    <div className='posts'>
    <Post img='https://images.pexels.com/photos/12258266/pexels-photo-12258266.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
    <Post img='https://images.pexels.com/photos/11826094/pexels-photo-11826094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
    <Post img='https://images.pexels.com/photos/11920150/pexels-photo-11920150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
    <Post img='https://images.pexels.com/photos/7173203/pexels-photo-7173203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
    <Post img='https://images.pexels.com/photos/9150518/pexels-photo-9150518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
    <Post img='https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
    </div>
  )
}
