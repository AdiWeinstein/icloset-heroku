import './AddItems.css'; 
import React, { useState , useContext} from "react";
import { ViewAllContext } from '../viewAll/ViewAllContext.js';



export default function AddItems(){
    const {getItems} = useContext(ViewAllContext); 
    const [fileData, setFileData] = useState({});
    const [imgPreview, setImgPreview] = useState(null);
    const [fileTypeError, setFileTypeError] = useState(false);
    const [fileExistsError, setFileExistsError] = useState(false);
    const [itemAddedMsg, setItemAddedMsg] = useState(false);
    const [selectExists, setSelectExists] = useState(true);
    const [selectRED, setSelectRED] = useState(false);
    const [type, setType] = useState('');//top bottom shoes else 
    const [productType, setProductType] = useState('');//top pants shorts dress skirt shoes
    const [topSelect, setTopSelect] = useState(false);
    const [bottomSelect, setBottomSelect] = useState(false);
    const [shoesSelect, setShoesSelect] = useState(false);
    const [elseSelect, setElseSelect] = useState(false);



    const handleTypechange = (e) => {
      setType(e.target.value);
      const type = e.target.value;
      

      if(type === "top" ){
        setTopSelect(true);
        setBottomSelect(false);
        setShoesSelect(false);
        setElseSelect(false);
      }else if (type === "bottom"){
        setBottomSelect(true);
        setTopSelect(false);
        setShoesSelect(false);
        setElseSelect(false);
      }else if (type === "shoes"){
        setShoesSelect(true);
        setBottomSelect(false);
        setTopSelect(false);
        setElseSelect(false);
      }else if (type === "else") {
        setElseSelect(true);
        setShoesSelect(false);
        setBottomSelect(false);
        setTopSelect(false);        
      }
    }

    const handleProductTypechange = (e) => {
      setProductType(e.target.value)
    }

    const fileChangeHandler = (e) => {   
      setFileTypeError(false);//clear error message when new item added
      setFileExistsError(false);
      setItemAddedMsg(false);  
      setSelectExists(false);
      setSelectRED(false);

      const selected = e.target.files[0];//The target property of the Event interface is a reference to the object onto which the event was dispatched.
                                          //.files[0] - Accessing the first selected file
      const allowedTypes =["image/png", "image/jpeg", "image/jpg"];

      if(selected && allowedTypes.includes(selected.type)){
        let reader = new FileReader();//'FileReader' object lets web applications asynchronously read the contents of files
        reader.onloadend = () =>{//'onloadend' event is fired when a request has completed, whether successfully (after load) or unsuccessfully (after abort or error).
                                //This event is triggered each time the reading operation is completed
          setImgPreview(reader.result);//show the img that is selected
        }
          reader.readAsDataURL(selected);//Starts reading the contents of the specified Blob, once finished, the result attribute contains a data: URL representing the file's data
                                        //The Blob object represents a blob, which is a file-like object of immutable, raw data
                                                                              
        }else{
          setFileTypeError(true);//Show error msg
      }

       setFileData(selected);
       
                             
       if(selected){
        let reader = new FileReader();
        reader.onloadend = () =>{
          setImgPreview(reader.result);//show the img that is selected
        }
        reader.readAsDataURL(selected);
      }else{
        setFileTypeError(true);
      }
      };

    
    const onSubmitHandler = (e) => {
        e.preventDefault();//prevent submit button default behavior
        setSelectExists(true)
        
         
    // Handle File Data from the state Before Sending
     const data = new FormData();//The FormData() constructor creates a new FormData object.
    
    data.append("file", fileData);//Adding a key/value pair to "data" using FormData.append:
    data.append("type", type);
    data.append("productType", productType);



if(type !== "" && productType !== ""){

     fetch("http://localhost:8080/api/addItems", {
       method: "POST",
       body: data,   
   })
  
     .then(res => {

        if(res.status === 201){
           setFileExistsError(false)
           setItemAddedMsg(true)
           setSelectRED(false)
           setType("")
           setProductType("")
           getItems();

        }else{
           setFileExistsError(true)
           setItemAddedMsg(false)
           setSelectRED(false)
           
        }
    })
   }else{
    setSelectRED(true)
    setItemAddedMsg(false)
   }
  }

    const clear = () =>{
      setImgPreview(null)
      setItemAddedMsg(false)
      setFileTypeError(false)
      setFileExistsError(false)
      setSelectExists(true)
      setSelectRED(false)
      setType('');
      setProductType('')
    }



    return (
        
      <div className="add-items">
        <div className="container">
      <form onSubmit={onSubmitHandler}>
      {!selectExists && <>
       <p className="selectMsg">Please select type and product-type from dropdown menu</p>       
       <div className="arrow"></div>
       </>
       }
      {selectRED && <p className="errorMsg">Please select type product-type from dropdown menu</p>}
      {imgPreview && (
        <>
      <select value={type} onChange={handleTypechange} >
                <option>Type</option>
                <option>top</option>
                <option>bottom</option>
                <option>shoes</option>
                <option>else</option>
            </select>                


        
        <select value={productType} onChange={handleProductTypechange} >
                <option>Product-type </option>
                <option disabled={topSelect ? false : true}>top</option>
                <option disabled={bottomSelect ? false : true} >pants</option>
                <option disabled={bottomSelect ? false : true}>shorts</option>
                <option  disabled={bottomSelect ? false : true}>skirt</option>
                <option disabled={elseSelect ? false : true}>dress</option>
                <option disabled={shoesSelect ? false : true}>shoes</option>
            </select>                
            </>
      )}
        <div className="container2">
        {fileTypeError && <p className="errorMsg">File not supported</p>}
        {fileExistsError && <p className="errorMsg">Item already exists</p>}
        {itemAddedMsg && <p className="addedMsg">Item added to closet</p>}
        
      <div
       className="imgPreview"
       style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/contain `: /*`url('../../images/addItems-hanger-background.jpg')`*/`black`}} //if we choose am img- show preview, else show background color
       >
        {!imgPreview && (
          <>
  
          <label htmlFor="fileUpload" className="customFileUpload"><p>Click to add item :)</p></label>
          <input type="file" id="fileUpload" onChange={fileChangeHandler} />
          
          <span>(jpg, jpeg or png)</span>
          </>
        )}
      </div>
      {/*if imgPreview exists we render the button*/}
      {imgPreview && (
        <>
        <button onClick={clear}><span>Select different item</span></button>
        <button type="submit" ><span>Add to closet</span></button>
        </>
      )}
    </div>
        

      </form>
    </div>
  </div>  
                                                                 
    );

    }           