
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div class="grid grid-cols-3 gap-4 content-start ml-10">
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  )
}


