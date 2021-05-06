import React, {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>You clicked me {count} times already!</p>
            <button onClick={() => {
                setCount(count + 1);
            }}>
                I'm a Button
            </button>
        </div>
    );
}