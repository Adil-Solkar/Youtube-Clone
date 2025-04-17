const Button = ({name}) => {
    return(
        <>
            <button className="bg-gray-200 px-4 py-1 m-2 w-auto rounded-lg">
                {name}
            </button>
        </>
    )
}

export default Button;