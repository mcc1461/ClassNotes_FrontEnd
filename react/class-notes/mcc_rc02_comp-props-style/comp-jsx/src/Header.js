function Header() {

    const message = "Hello World!";
    console.log(message);
    
    return (
        //^  JSX
        <header>
        {/* jsx */}
        {message}
        {/* inline CSS || notasyon camelCase */}
        <h1 style={{color: "red", backgroundColor: "yellow"}}
        >Header</h1>
        </header>
    );
}

export default Header;