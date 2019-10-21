import React, { Component } from "react";
import axios from "axios";

import "./NewPost.css";

// rce
// rconst
class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max"
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.setState.autho
    };
    console.log("here: " + data);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then(response => {
        console.log(response);
      });
  };

  render() {
    let post;
    post = (
      <div className="NewPost">
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title</label>
            <div>
              <input type="text" name="title" />
            </div>
          </div>
          <div>
            <label>Content</label>
            <div>
              <textarea type="text" name="content" />
            </div>
          </div>
          <div>
            <label>Author</label>
            <div>
              <select value={this.state.author}>
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
              </select>
            </div>
          </div>
          <button onClick={this.postDataHandler}>Add Post</button>
        </form>
      </div>
      // <h1>Add Post</h1>
      // <label>Title</label>
      // <input type="text" value={this.state.title} />
      // <br />
      // <label>Content</label>
      // <textarea rows="4" value={this.state.content} />
      // <br />
      // <label>Author</label>
      // <select value={this.state.author}>
      //   <option value="Max">Max</option>
      //   <option value="Manu">Manu</option>
      // </select>
      // <button>Add Post</button>
    );
    return post;
  }
}

export default NewPost;
