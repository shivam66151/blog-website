import  './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
    <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/334978/pexels-photo-334978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" 
        className='singlePostImg'/>
        <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet 
        <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Shivam</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Totam, distinctio tempora, quos sequi ipsam assumenda aliquam 
        quod corrupti doloribus illo, sapiente labore enim laudantium? 
        Debitis suscipit voluptatibus aliquid deserunt beatae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Impedit dolorum magni, nulla rerum reiciendis velit, expedita, 
        ea voluptate optio itaque animi quidem cumque. 
        Ratione eos quod mollitia laborum ipsam odit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Totam, distinctio tempora, quos sequi ipsam assumenda aliquam 
        quod corrupti doloribus illo, sapiente labore enim laudantium? 
        Debitis suscipit voluptatibus aliquid deserunt beatae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Impedit dolorum magni, nulla rerum reiciendis velit, expedita, 
        ea voluptate optio itaque animi quidem cumque. 
        Ratione eos quod mollitia laborum ipsam odit?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Totam, distinctio tempora, quos sequi ipsam assumenda aliquam 
        quod corrupti doloribus illo, sapiente labore enim laudantium? 
        Debitis suscipit voluptatibus aliquid deserunt beatae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Impedit dolorum magni, nulla rerum reiciendis velit, expedita, 
        ea voluptate optio itaque animi quidem cumque. 
        Ratione eos quod mollitia laborum ipsam odit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Totam, distinctio tempora, quos sequi ipsam assumenda aliquam 
        quod corrupti doloribus illo, sapiente labore enim laudantium? 
        Debitis suscipit voluptatibus aliquid deserunt beatae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Impedit dolorum magni, nulla rerum reiciendis velit, expedita, 
        ea voluptate optio itaque animi quidem cumque. 
        Ratione eos quod mollitia laborum ipsam odit?
        </p>
    </div>
    </div>
  )
}
