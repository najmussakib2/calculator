import { useState } from 'react'
import './App.css'


function App() {
  const [display, setDisplay] = useState('0');



  const handleSubmit = (e) => {
    if (display == "error" || display == "0") {
      setDisplay(e.target.name)
    } else {
      setDisplay(display.concat(e.target.name));
    }
  }

  const backSpace = () => {
    setDisplay(display.slice(0, -1))
  }

  const clear = () => {
    setDisplay("")
  }

  const calculate = () => {
    try {
      setDisplay(eval(display).toString())

    } catch (err) {
      setDisplay("error")
    }

  }


  return (
    <div className="bg-[url(../src/assets/pxfuel.jpg)] bg-cover bg-center min-h-screen flex justify-center items-center">
      <div className="bg-black h-[450px]  w-80 rounded-lg overflow-hidden">


        <div className=" ">
          <form className="">

            <input type="text" value={display} className='w-full py-10 text-right font-semibold px-4 bg-black text-white text-4xl' />
          </form>
          <div className='grid grid-cols-4 gap-4 p-2 px-4 items-end'>
            <button className='btn font-bold col-span-2 bg-sky-300 border-none' onClick={clear} >Clear</button>
            <button className='btn font-bold  col-span-2 bg-sky-300 border-none' onClick={backSpace}>C</button>
            <button className='btn font-bold bg-sky-100 border-none' name='7' onClick={handleSubmit}>7</button>
            <button className='btn font-bold bg-sky-100 border-none' name='8' onClick={handleSubmit}>8</button>
            <button className='btn font-bold bg-sky-100 border-none' name='9' onClick={handleSubmit}>9</button>
            <button className='btn font-bold bg-sky-300 border-none' name='+' onClick={handleSubmit}>+</button>
            <button className='btn font-bold bg-sky-100 border-none' name='4' onClick={handleSubmit}>4</button>
            <button className='btn font-bold bg-sky-100 border-none' name='5' onClick={handleSubmit}>5</button>
            <button className='btn font-bold bg-sky-100 border-none' name='6' onClick={handleSubmit}>6</button>
            <button className='btn font-bold bg-sky-300 border-none' name='-' onClick={handleSubmit}>&ndash;</button>
            <button className='btn font-bold bg-sky-100 border-none' name='1' onClick={handleSubmit}>1</button>
            <button className='btn font-bold bg-sky-100 border-none' name='2' onClick={handleSubmit}>2</button>
            <button className='btn font-bold bg-sky-100 border-none' name='3' onClick={handleSubmit}>3</button>
            <button className='btn font-bold bg-sky-300 border-none' name='*' onClick={handleSubmit} >&times;</button>
            <button className='btn font-bold bg-sky-100 border-none' name='.' onClick={handleSubmit}>.</button>
            <button className='btn font-bold bg-sky-100 border-none' name='0' onClick={handleSubmit}>0</button>
            <button className='btn font-bold bg-sky-300 border-none' onClick={calculate} >=</button>
            <button className='btn font-bold bg-sky-300 border-none' name='/' onClick={handleSubmit}>&divide;</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;







