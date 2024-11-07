import React ,{ useState }from 'react';

const InputArea = (props) => {
    const [inputText ,setinputText]=useState("");
    const handleChange=(event)=>
    {
       setinputText(event.target.value)
    };
  return (
    <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
        <button onClick={()=>{ 
            props.additems(inputText);
            setinputText("");
        }}
        >
            <span>ADD</span>
        </button>
      
    </div>
  );
};

export default InputArea;





