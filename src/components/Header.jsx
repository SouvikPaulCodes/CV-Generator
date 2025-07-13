import '../styles/Header.css'

export function Header({clBack, chBack}) {
    return (
        <header className={clBack}>
            <h1 className="title">NoResume</h1>
            <div className="head-side">
                <button className={clBack + " themeBut"} onClick={chBack}>{clBack}</button>
            </div>
        </header>
    )
}