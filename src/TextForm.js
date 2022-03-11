import React, { useState } from "react";

export default function TextForm(params) {
    
    const [Text, setText] = useState("");
    const [myStyle, setMyStyle] = useState({
      color: 'white',
      backgroundColor: "grey",
      
    });
  
    const [btnText, setbtnText] = useState("Enable Light Mode");
  
    const toggleStyle = () => {
      if (myStyle.color == "white") {
        setMyStyle({
          color: "black",
          backgroundColor: "white",
        });
        setbtnText("Enable Dark Mode");
      } else {
        setMyStyle({
          color: "white",
          backgroundColor: "grey",
          border:'1px solid white'
        });
        setbtnText("Enable Light Mode");
      }
    };

    const handleupClick = (e) =>
    { e.preventDefault();
        console.log("UpperCase was clicked");
        let newtext=Text.toUpperCase();
        setText(newtext);
        console.log(Text);
    }

    const handleloClick = (e) =>
    {e.preventDefault();
        console.log("LowerCase was clicked");
        let newtext=Text.toLowerCase();
        setText(newtext);
        console.log(Text);
    }    

    const handleclearClick = (e) =>
    {e.preventDefault();
        console.log("Clear was clicked");
        let newtext="";
        setText(newtext);
        console.log(Text);
    }   
    var convertString = function (str) {
      var s = '';
      var i = 0;
      while (i < str.length) {
          var n = str.charAt(i);
          if (n == n.toUpperCase()) {
              // *Call* toLowerCase
              n = n.toLowerCase();
          } else {
              // *Call* toUpperCase
              n = n.toUpperCase();
          }
  
          i += 1;
          s += n; 
      }
      return s;
  };






    const handleAlternateClick = (e) =>
    { e.preventDefault();
        console.log("Alternate Characters was clicked");
        let newtext=convertString(Text);
        setText(newtext);
        console.log(Text);
    }  

    const handleonChange = (event) =>
    {   
      event.preventDefault();
        console.log("handle on change was clicked");
        setText(event.target.value);
        console.log(Text);
    }



    const handleCopyClick = (event) =>
    {   
      event.preventDefault();
        console.log("i am copy");
        var text=document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);


        // console.log(text);
    }

    const handleextraspacesClick = (event) =>
    {   
      event.preventDefault();
      let newtext=Text.split(/\s\s+/g);
      setText(newtext.join(" "));

        // console.log(text);
    }
    


  return (
    <>
      <form>
        <div className="form-group" style={{Color:params.mode==='dark'?'grey':'light',color:params.mode==='dark'?'white':'black'}}>
          <label htmlFor="exampleFormControlTextarea1">{params.heading}</label>
          <textarea
            className="form-control my-3"
            id="myBox"
            // style={myStyle}
            rows="8"
            value={Text}
            onChange={handleonChange}
            style={{backgroundColor:params.mode==='dark'?'grey':'white',color:params.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleAlternateClick}>Alternate Characters</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy to Clipboard</button>
        {/* <button type="button" class="btn btn-primary my-3" onClick={toggleStyle} >{btnText}</button> */}
        <button className="btn btn-primary mx-2" onClick={handleextraspacesClick}>Remove Extra Spaces</button>

        

        <div className="container my-3">
          <h1>

            Your Text Summary
          </h1>
          <p>
            {Text.split(" ").length} words and {Text.length} characters
          </p>
          <p>
            {0.008 * Text.split(" ").length} Minutes read
          </p>
          <h2>
            Preview
          </h2>
          <p>
            
            {Text.length>0?Text:"Write some text in text box to preview it here"}
          </p>
        </div>



      </form>
    </>
  );
}
