import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';
const Write = () => {
  const [value, setValue] = useState('');

  console.log(value);

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>Draft
          </span>
          <span>
            <b>Visiblity: </b> Public
          </span>
          <input style={{display:"none"}} type="file" id='file' />
          <label className='file' htmlFor="file">Uplaod Image</label>
          <div className="button">
            <button>Save as a draft</button>
            <button>update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" name='cat' value="art" id='art' />
          <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' value="art" id='art' />
          <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' value="art" id='art' />
          <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' value="art" id='art' />
          <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' value="art" id='art' />
          <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' value="art" id='art' />
          <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write