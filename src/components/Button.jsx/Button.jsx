

const Button = ({children, color}) => {
    return (
        <button
        className={`font-semibold rounded-full border ${color} w-60 py-1 text-xl hover:bg-opacity-70`}>
            {children}
        </button>
    )
}

export default Button