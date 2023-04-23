import React from 'react'
  
const Pagination = ({setpage,pageNo }) => {
  let allPage= Math.ceil(16/2)  
  let newArr=new Array(allPage).fill(0);

  return (
    <div  >
       { newArr.map((item,index)=>(
        <button key={index+1} style={{
            backgroundColor : pageNo ===(index+1) ? "red" : "green",
            
        }} onClick={()=> setpage(index+1)}>{index+1}</button>
       ))}
    </div>
  )
}

export default Pagination