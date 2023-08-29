import React from 'react'

export default function Card(props) {
    return (
    <div className="max-w-sm bg-white shadow flex flex-col">
    <div className='h-[55%] w-[100%] bg-black bg-cover bg-center' style={{ backgroundImage: `url(${props.cardImg})` }}>

    </div>
    <div className="pl-5 pr-1 h-[45%] w-full flex flex-col justify-center items-start bg-slate-900">
        <a href="/">
            <h5 className="mb-2 lg:text-lg 2xl:text-2xl font-bold tracking-tight text-pink-600">{props.sportType} - <span className="text-white lg:text-sm 2xl:text-lg font-thin">{props.date}</span></h5>
        </a>
        <p className="mb-3 lg:text-sm 2xl:text-lg 2xl:font-medium text-white">{props.func}</p>
        <a target='_blank' href={props.url} className={`inline-flex items-center lg:px-[5px] lg:py-[3px] 2xl:px-3 2xl:py-2  text-xs 2xl:text-sm font-medium text-center text-white ${props.status? 'bg-slate-600' : 'bg-violet-600 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300'}  `}>
           <button disabled={props.status}>{!props.status ? 'Register' : 'Closed'}</button>
        </a>
    </div>
</div>
        
    )
}
