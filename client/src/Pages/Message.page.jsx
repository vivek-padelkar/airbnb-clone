const Message = ({ message }) => {
  return (
    <div className="bg-red-100  text-red-500 px-4 py-3 mt-5" role="alert">
      <p className="font-bold">Alert!</p>
      <p className="text-sm">{message}</p>
    </div>
  )
}

export default Message
