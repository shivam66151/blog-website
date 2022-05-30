import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className = 'posting' 
        src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" />
    <div className="postInfo">
       <div className="postCats">
           <span className="postCat">Music</span>
           <span className="postCat">Life</span>
       </div>
       <span className="postTitle">Lorem ipsum dolor sit amet</span>
       <hr />
       <span className='postDate'>1 hour ago</span>
    </div>
    <p className='postDesc'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, debitis. 
    Eius voluptates sint recusandae expedita ipsam, incidunt esse facilis harum
    aspernatur voluptatem beatae facere accusamus at quod quaerat. Rerum, numquam?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, debitis. 
    Eius voluptates sint recusandae expedita ipsam, incidunt esse facilis harum
    aspernatur voluptatem beatae facere accusamus at quod quaerat. Rerum, numquam?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, debitis. 
    Eius voluptates sint recusandae expedita ipsam, incidunt esse facilis harum
    aspernatur voluptatem beatae facere accusamus at quod quaerat. Rerum, numquam?
    </p>
    </div>
  )
}
