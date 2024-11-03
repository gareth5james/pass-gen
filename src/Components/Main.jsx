import { useState } from "react";
import { handlePasswordCreation } from "../Utilities/handlePasswordCreation";

function Main() {
    const [length, setLength] = useState(16);
    const [lowercase, setLowercase] = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [password, setPassword] = useState("");

    return <main className="main-section">
        <label className="label" htmlFor="setLength">Desired Length</label>
        <input className="input" type="number" id="setLength" name="setLength" value={length} min="5" max="50" onChange={(event) => setLength(event.target.value)}></input>
        <br/>
        <label className="label" htmlFor="lowercase">Lowercase?</label>
        <input className="input" type="checkbox" id="lowercase" name="lowercase" value={lowercase} onChange={(event) => {setLowercase(lowercase === false ? true : false)}}></input>
        <br/>
        <label className="label" htmlFor="uppercase">Uppercase?</label>
        <input className="input" type="checkbox" id="uppercase" name="uppercase" value={uppercase} onChange={(event) => {setUppercase(uppercase === false ? true : false)}}></input>
        <br/>
        <label className="label" htmlFor="numbers">Numbers?</label>
        <input className="input" type="checkbox" id="numbers" name="numbers" value={numbers} onChange={(event) => {setNumbers(numbers === false ? true : false)}}></input>
        <br/>
        <label className="label" htmlFor="symbols">Symbols?</label>
        <input className="input" type="checkbox" id="symbols" name="symbols" value={symbols} onChange={(event) => {setSymbols(symbols === false ? true : false)}}></input>
        <br/>
        <button className="button" onClick={(event) => {
            event.preventDefault();
            setPassword(handlePasswordCreation(length, lowercase, uppercase, numbers, symbols))
        }}>Get Passwords</button>
        <div className="pwDiv" id="pwDiv">{password}</div>
    </main>
}

export default Main;