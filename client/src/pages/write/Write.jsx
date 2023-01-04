import "./write.css"

export default function Write() {
  return (
    <div className="write">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg"
        alt="postImg"
        className="writeImg"
    />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{ display: "none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button type="submit" className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
