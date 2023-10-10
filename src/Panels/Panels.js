import  './Panels.css'

function Panels() {
  return (
    <div className='panels-container'>
        <div className='panel' id='panel-left'>
            <h1>Best Seller</h1>
            <button>Shop Now</button>
        </div>
        <div className='panel' id='panel-rigth'>
             <h1>New Arrivals</h1>
            <button>Shop Now</button>
        </div>
    </div>
  )
}

export default Panels