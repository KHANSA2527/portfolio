import React from 'react'


const contact = () => {
  return (
    <div>
        <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]" id="contact">
            <h1 className="text-3xl text-gray-800 font-extrabold text-center">Contact us</h1>
            <form className="mt-8 space-y-4">
                <input type='text' placeholder='Name'
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-orange-500" />
                <input type='email' placeholder='Email'
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-orange-500" />
                <input type='text' placeholder='Subject'
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-orange-500" />
                <textarea placeholder='Message' rows={6}
                    className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-orange-500"></textarea>
                <button type='button'
                    className="text-white bg-orange-500 hover:bg-black tracking-wide rounded-full text-lg px-4 py-3 w-full">Send</button>
            </form>
        </div>
    </div>
  )
}

export default contact