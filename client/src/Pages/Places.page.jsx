import React, { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Perks from '../components/Perks'
import axiosInstance from '../utils/axiosConfig'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { uploadFile } from '../actions/uploadPhoto.action.js'
const UPLOADED_IMAGE_PATH = import.meta.env.VITE_UPLOADED_IMAGE_PATH

const Places = () => {
  const { action } = useParams()
  const [noOfGuest, setNoOfGuest] = useState(1)
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [addedPhotos, setAddedPhotos] = useState([])
  const [photoLink, setPhotoLink] = useState('')
  const [description, setDescription] = useState('')
  const [perks, setPerks] = useState('')
  const [extrainfo, setExtraInfo] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [loadUrl, setLoadUrl] = useState(false)
  const refAddPhotoByLink = useRef()
  const dispatch = useDispatch()

  // const uploaded
  const checknegativeNumber = (e) => {
    if (e.target.value >= 0) setNoOfGuest(e.target.value)
  }

  const headerText = (title) => {
    return <h2 className="mt-4 text-2xl">{title}</h2>
  }

  const headerTextDescription = (textDescription) => {
    return <p className="text-gray-500 text-sm">{textDescription}</p>
  }

  const inputHeaderDescription = (title, textDescription) => {
    return (
      <>
        {headerText(title)}
        {headerTextDescription(textDescription)}
      </>
    )
  }

  const addPhotoByLink = async (e) => {
    try {
      e.preventDefault()
      if (!photoLink) {
        toast.error('Photo link cannot be blank !')
        refAddPhotoByLink.current.focus()
        return
      }
      const requestObject = {
        uploadLink: photoLink,
      }

      dispatch(uploadFile(requestObject))

      // const token = JSON.parse(localStorage.getItem('userInfo')).token
      // console.log('clicked' + JSON.stringify(token))
      // setLoadUrl(true)
      // const AXIOS_HEADER = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
      // const { data } = await axiosInstance.post(
      //   '/user/upload-by-link',
      //   {
      //     uploadLink: photoLink,
      //   },
      //   AXIOS_HEADER
      // )
      // setLoadUrl(false)
      // toast.success('Image uploaded successfully !')
      // setPhotoLink('')
      // setAddedPhotos((prev) => {
      //   return [...prev, data.data.imageName]
      // })
    } catch (error) {
      setLoadUrl(true)
      toast.error(error.message || 'Something went wrong while uploading photo')
      refAddPhotoByLink.current.focus()
    }
  }

  return (
    <div className="placesContainer mx-auto">
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
            {inputHeaderDescription(
              'Title',
              'Title should be short and catchy for the advertisement'
            )}
            <input
              className="w-full"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title, for example: my Lovely aprtment"
            />

            {/* Address */}
            {inputHeaderDescription('Address', 'Address to your place')}
            <input
              className="w-full"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            {/* photos */}
            {inputHeaderDescription('Photos', 'more = better')}
            <div>
              <input
                className="w-full"
                type="text"
                placeholder="Add using link... jpeg"
                ref={refAddPhotoByLink}
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
              />

              <button
                className="loading bg-primary text-white p-2 w-28 rounded-xl"
                onClick={addPhotoByLink}
              >
                {loadUrl ? (
                  <div className="flex">
                    Loading...
                    <div className="loader"></div>
                  </div>
                ) : (
                  `Add photo`
                )}
              </button>
            </div>
            {/* upload image from device */}
            <div className="flex flex-col gap-2">
              <div className="mt-2 grid gap-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2  items-center">
                {addedPhotos.length > 0 &&
                  addedPhotos.map((photo) => (
                    <div className="h-100 w-100">
                      <img
                        className="h-full width-full object-cover"
                        src={`${UPLOADED_IMAGE_PATH}/${photo}`}
                        title="hotel room"
                      />
                    </div>
                  ))}
              </div>
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
            {inputHeaderDescription('Description', 'Description of the place')}
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {/* perks */}
            {inputHeaderDescription('Perks', 'Select perks of your places')}
            <Perks selected={perks} onChange={setPerks} />

            {/* extra info */}
            {inputHeaderDescription('Extra info', 'House rules, etc.')}
            <textarea
              value={extrainfo}
              onChange={(e) => setExtraInfo(e.target.value)}
            />

            {/* check in/out time and max guest  */}
            {inputHeaderDescription(
              'Check in & out times, max guest',
              'Add check in and out times, remember to have some time window for cleaningthe room between guests'
            )}
            <div className="mt-2 grid sm:grid-cols-2 md:grid-cols-3">
              <div className="">
                <h3>Check in Time</h3>
                <input
                  type="text"
                  placeholder="14:00"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div className="">
                <h3>Check out Time</h3>
                <input
                  type="text"
                  placeholder="14:00"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div className="">
                <h3>Max numbers of guests</h3>
                <input
                  type="number"
                  placeholder="no of guest"
                  onChange={checknegativeNumber}
                  value={noOfGuest}
                />
              </div>
            </div>

            {/* save data */}
            <div className="mt-4">
              <p className="text-gray-500 text-sm italic mb-2">
                *Please review all the Details before clicking on save button
              </p>
              <button className="bg-primary text-white p-3 rounded-2xl w-24">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Places
