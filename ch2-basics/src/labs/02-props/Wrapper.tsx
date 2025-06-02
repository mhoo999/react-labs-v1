type Child = { children:React.ReactNode };

export default function Wrapper({children}: Child) {
    return (
        <div>
            {children}
        </div>
    )
}