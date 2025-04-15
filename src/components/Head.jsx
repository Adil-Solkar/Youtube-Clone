const Head = () => {

  return (
    <>
    <div className="grid grid-flow-col p-5 shadow-lg">
       <div className="flex col-span-1">
            <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg" 
            alt="menu" 
            className="h-10 m-1 rounded-4xl"
            />
            <img 
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
            alt="Youtube-logo"
            className="h-10 m-1" 
            />
       </div>
       <div className="col-span-10 m-auto">
            <input type="text" className="border p-0.5 w-90 rounded-l-2xl" />
            <button className=" bg-gray-200 p-1 rounded-r-2xl w-10">🔍</button>
       </div>
       <div className="col-span-1" >
            <img 
            src="data:image/png;base64,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"
            alt="profile-logo"
            className="h-10"
            />
       </div>
    </div>
    </>
  )
}

export default Head