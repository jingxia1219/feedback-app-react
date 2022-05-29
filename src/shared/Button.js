function Button({btnClass,clickHandler,type,children}){
    return (
        <>
        <button className={btnClass} onClick={clickHandler} type={type}>{children}</button>
        </>
    )
}

export default Button;