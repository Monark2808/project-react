import React from 'react'
import Event from './event';

const Form = () => {
    console.log("---Form---");

    const [name, setName] = React.useState("xyz");
    const [show, setShow] = React.useState(false);
    console.log(name);

    const onSubmit = (e) => {
        e.preventDefault(); // e.stopPropogation()
        console.log("---onSubmit---");
        console.log({ name });
    }

    return (
        <div>
            {show ? <Event /> : null}
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={name} onChange={(e) => {
                            const value = e.target.value;
                            console.log(value);

                            setName(value); // xy
                        }} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                </div>
                <div>
                    <label>
                        Contact:
                        <input type="number" name="contact" />
                    </label>
                </div>
                <div>
                    <button type='submit' style={{ width: "100%" }} onClick={(e) => {
                        console.log(e);
                        console.log({ buttonWidth: e.target.clientWidth });
                    }}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;


// React (React state) => rendering => DOM (DOM state)

// Controlled vs Uncontrolled
// value onchange    result
//   NO    No      UNcontrolled
//   NO   Yes       UNcontrolled
//   Yes   No       UNCONTROLLED (Fix value)
//  Yes  Yes       CONTROLLED