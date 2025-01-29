"use client"

import Button from "../_components/utils/Button"

export default function Page() {
    return (
        <main className="h-screen w-screen p-16 text-center bg-white">
            <img
                src='/croki-green.PNG'
                className='mx-auto mb-10 w-60 rounded-md'
            />
            <div className="m-auto p-5 w-[500px] border rounded-lg shadaw-md text-gray-500 text-left">
                <h1 className="mx-auto my-3 text-2xl text-gray-900 font-semibold">Sign in to your account</h1>
                <p className="mb-5">Use your email and password to sign in</p>

                <label className="block mb-2" htmlFor="login">Login</label>
                <input required id="login" className="block w-full mb-6 p-2 border rounded-lg outline-none bg-gray-50" placeholder="asd@asd.com" />

                <label className="block mb-2" htmlFor="password">Password</label>
                <input required type="password" id="password" className="block w-full mb-6 p-2 border rounded-lg outline-none bg-gray-50" placeholder="pass" />

                <div className="flex mb-6 text-sm">
                    <input id="remember" name="remember" type="checkbox" className="accent-green-500 w-4 h-4
                    text-green-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="remember" className=" ml-2">Remember me</label>
                    <button
                        className="flex-1 text-right text-green-500 hover:underline hover:text-green-600"
                        href=""
                    >Forgot password?</button>
                </div>

                <Button size="full"/>
                <div className="mt-6 flex text-sm">
                    <p>
                        Not registered yet?
                        <a className="text-green-500 hover:underline hover:text-green-600"
                            href=""
                        > Create an account</a>
                    </p>
                    {/* <button>Create an account.</button> */}
                </div>
            </div>
        </main>
    )
}