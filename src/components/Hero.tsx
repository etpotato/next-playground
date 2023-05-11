import { useState } from "react"
// static component
// import { Image } from "./Image"
// dynamic component
import { Image } from "./index"

export function Hero() {
  const [imgVisible, setImgVisible] = useState(false)
  console.log('hero_code')
  return (
    <div>
      <h1>Hero</h1>
      <div>
        <button onClick={() => setImgVisible(state => !state)} type="button">Toggle img</button>
      </div>
      { imgVisible ? <Image /> : null}
    </div>
  )
}
