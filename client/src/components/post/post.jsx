import "./post.css";

export default function post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg"  alt="postImg"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Happy</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                German Shepherd
                </span>
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className="postDesc">
         The German Shepherd is a larger than average dog breed that
          originated in Germany. A breed of dog that obeys its master.
           It is the third most intelligent breed of dog in the world. 
            </p>
        </div>
    )
}
