import "./singlePost.css"

export default function SinglePost() {
  
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img 
        className="singlePostImg"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg"
          alt="imgview"
        /> 
        <h1 className="singlePostTitle">
        German Shepherd
        <div className="singlePostEdit">
        <i className="singlePostIcon far fa-edit"></i>
        <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
        <span className="singlePostAuthor">Author : <b>Chandima</b></span>
        <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
        The German Shepherd is a larger than average dog breed that
          originated in Germany. A breed of dog that obeys its master.
           It is the third most intelligent breed of dog in the world. 
           The German Shepherd is a larger than average dog breed that
          originated in Germany. A breed of dog that obeys its master.
           It is the third most intelligent breed of dog in the world. 
           The German Shepherd is a larger than average dog breed that
          originated in Germany. A breed of dog that obeys its master.
           It is the third most intelligent breed of dog in the world. 
           The German Shepherd is a larger than average dog breed that
          originated in Germany. A breed of dog that obeys its master.
           It is the third most intelligent breed of dog in the world.
            The German Shepherd is a larger than average dog breed that
          originated in Germany. A breed of dog that obeys its master.
           It is the third most intelligent breed of dog in the world. 
        </p>
      </div>
    </div>
  )
}
