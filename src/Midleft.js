import { useState } from "react";

const Midleft =()=>{
  const[purchase,setpurchase]=useState("");
  const[exchange,setexchange]=useState("");
  const[ddown1,setddown1]=useState("");

  const rate = document.getElementById('rate')
  const saleprice=document.getElementById('crypto')
  const purchaseprice=document.getElementById('purchase')
  const expens=document.getElementById('expense')
  const gam=document.getElementById('gamount')

  if (rate && ddown1!=undefined){
    rate.value = {
      "0": "0%",
      "18200": 'Nil + 19% of excess over $18.200',
      "45000": '$5,092 + 32.5% of excess over $45,000',
      "120000": '$29,467 + 37% of excess over $120,000',
      "180000": '$51,667 + 45% of excess over $180,000',
    }[ddown1]
  }
  if(saleprice && purchaseprice && expens!=undefined){
    gam.value=saleprice.value-purchaseprice.value-expens.value
  }



  
return (<div>
  <div>
Enter purchase price of Crypto<br></br>
  <input type="text" id="purchase"  class = "" name="purchase" onChange={(event) => {setpurchase(event.target.value)}} /><br></br></div>
  <div>
  Enter Your Expenses<br></br>
  <input type="text" id="expense" name="expense" onChange={(event) => {setexchange(event.target.value)}} /><br></br>
  </div>
  <div>
  Select your Annual Income<br></br>
  <div className="dropdown">
  <select id="mydropdown" onChange={(event) => {setddown1(event.target.value)}}>
  <option value="0">$0-$18,200</option>
  <option value="18200">$18,201-$45,000</option>
  <option value="45000">$45,001-$1,20,000</option>
  <option value="120000">$1,20,001-$1,80,000</option>
  <option value="180000">$1,80,001+</option>
</select>
</div>
  </div><br></br>
<div>
  Capital gain Amount<br></br>
  <input type="text" id="gamount" name="gamount" ></input><br></br>
  </div>
</div>)
}
export default Midleft;