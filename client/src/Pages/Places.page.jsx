import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Places = () => {
  const { action } = useParams()

  return (
    <div>
      {!action === 'new' && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 justify-center align-middle bg-primary text-white rounded-full py-2 px-4"
            to={`/account/places/new`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new Place
          </Link>
        </div>
      )}
      {action === 'new' && (
        <div>
          <form>
            {/* title */}
            <h2 className="mt-4 text-2xl">Title</h2>
            <p className="text-gray-500 text-sm">
              Title should be short and catchy for the advertisement
            </p>
            <input
              className="w-full"
              type="text"
              placeholder="title, for example: my Lovely aprtment"
            />

            {/* Address */}
            <h2 className="mt-4 text-2xl">Address</h2>
            <p className="text-gray-500 text-sm">Address to your place</p>
            <input className="w-full" type="text" placeholder="Address" />

            {/* photos */}
            <h2 className="mt-4 text-2xl">Photos</h2>
            <p className="text-gray-500 text-sm">more = better</p>
            <div>
              <input
                className="w-full"
                type="text"
                placeholder="Add using link... jpeg"
              />
              <button className="bg-gray-300 p-2 rounded-md">Add photo</button>
            </div>

            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center">
              <button className="flex items-center gap-1 justify-center bg-transparent border border-dotted border-black rounded-2xl p-6 text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                  />
                </svg>
                Upload from your device
              </button>
            </div>

            {/* description */}
            <h2 className="mt-4 text-2xl">Description</h2>
            <p className="text-gray-500 text-sm">Description of the place</p>
            <textarea />

            {/* perks */}
            <h2 className="mt-4 text-2xl">Perks</h2>
            <p className="text-gray-500 text-sm">Select perks of your places</p>
            <div className="mt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  grid-cols-1">
              <label className="flex cursor-pointer items-center justify-items-start gap-3 p-6 border rounded-xl">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Wifi</span>
              </label>

              <label className="flex cursor-pointer items-center justify-items-start gap-3 p-6 border rounded-xl">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                  <path
                    fillRule="evenodd"
                    d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free parking</span>
              </label>

              <label className="flex cursor-pointer items-center justify-items-start p-6 gap-3 border rounded-xl">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Fire Extinguisher</span>
              </label>

              <label className="flex cursor-pointer items-center justify-items-start p-6  gap-3 border rounded-xl">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M19.5 6h-15v9h15V6Z" />
                  <path
                    fillRule="evenodd"
                    d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Tv</span>
              </label>

              <label className="flex cursor-pointer items-center justify-items-start p-6 gap-3 border rounded-xl">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                </svg>
                <span>Library</span>
              </label>

              <label className="flex cursor-pointer p-6 items-center justify-items-start gap-3 border rounded-xl">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                </svg>
                <span>Security cameras on property</span>
              </label>
            </div>

            {/* extra info */}
            <h2 className="mt-4 text-2xl">Extra info</h2>
            <p className="text-gray-500 text-sm">House rules, etc.</p>
            <textarea />

            <h2 className="mt-4 text-2xl">Check in & out times, max guest </h2>
            <p className="text-gray-500 text-sm">
              Add check in and out times, remember to have some time window for
              cleaningthe room between guests
            </p>
            <div className="grid sm:grid-cols-3">
              <div className="">
                <h3>Check in Time</h3>
                <input type="text" placeholder="14:00" />
              </div>
              <div className="">
                <h3>Check out Time</h3>
                <input type="text" placeholder="14:00" />
              </div>
              <div className="">
                <h3>Max numbers of guests</h3>
                <input type="number" />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Places
