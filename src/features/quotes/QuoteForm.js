import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";

function QuoteForm() {
  const [formData, setFormData] = useState({
    content: '',
    author: ''
  });
  const dispatch = useDispatch();

  function handleChange(event) {
    setFormData({...formData, [event.target.id] : event.target.value})
  }

  function handleSubmit(event) {
    // Handle Form Submit event default
    event.preventDefault()
    // Create quote object from state
    let quote = {...formData, votes: 0, id: uuid()}
    // Pass quote object to action creator
    dispatch(addQuote(quote));
    // Update component state to return to default state
    setFormData({
      content: '',
      author: ''
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={(e) =>handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      id="content"
                      value={formData.content}
                      name="content"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
