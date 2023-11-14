import './Top.css';
const Top =()=>{
    return (<div className='Top' >
       <div className='topelement'> 
        Financial Year 
        <div className="dropdown">
        <select className="mydropdown">
  <option value="2023-24">FY 2023-24</option>
</select>
</div>
</div>
<div className='topelement'>

    Country
    <div className="dropdown">
    <select className="mydropdown">
  <option value="australia">Australia</option>
</select>
</div>

</div>

<hr className='line'/>
<hr ></hr>

</div>)
}
export default Top;