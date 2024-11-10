import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  console.log('ຂໍ້ຄວາມນີ້ຈະສະແດງທຸກຄັ້ງໃນເມື່ອ component')

  return (
    <div>
      <h1>ຈຳນວນ: {count}</h1>
      <button className='border bg-gray-400 text-white' onClick={() => setCount(count + 1)}>
        ເພີ່ມຈຳນວນ
      </button>
    </div>
  )
}

export default App
