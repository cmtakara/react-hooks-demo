import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function DarkMode () {
    const [ theme, setTheme ] = useState("dark");

    return (
        <ThemeContext.Provider value={theme}>
        <h1>This is the DarkMode component</h1>
        <Form/>
        {/* <Button
            onClick={() => {
                console.log(theme)
                setTheme('light');
            }}
        >
            Switch to light theme
        </Button> */}
        <label>
            <input
                type='checkbox'
                checked={theme==='dark'}
                onChange={(e) => {
                    setTheme(e.target.checked ? "dark" : "light");
                }}
            />
            use dark mode
        </label>
        </ThemeContext.Provider>
    )
}

function Form() {
    return (
        <Panel title="welcome">
            <Button>Sign Up</Button>
            <Button>Log in</Button>
        </Panel>
    )
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = "panel panel-" + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({onClick, children}) {
    const theme = useContext(ThemeContext);
    const className = "button button-" + theme;
    return <button className={className} onClick={onClick}>{children}</button>
}