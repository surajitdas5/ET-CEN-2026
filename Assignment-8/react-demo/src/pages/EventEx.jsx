import { useState } from "react";
function EventEx(){
    // let statevar = useState(0)
    // let [x, setX] = useState(0)
    // console.log(statevar)
    // let count = 0;
    let [count, setCount] = useState(0);
    let [ visible, setVisible ] = useState(true)
    function handleClick(){
        // count =  count + 1;
        setCount(count+1)
        console.log(`button is clicked ${count} times`)
    }
    function updateVisible(){
        setVisible(!visible)
    }
    return(
        <>
        <p>button is clicked {count} times</p>
        <button className="btn btn-primary" onClick={handleClick}>Click</button>

        {/* {
            visible ? (
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam quidem culpa impedit esse porro, quasi laudantium aperiam nostrum velit, tenetur sit maxime incidunt commodi mollitia eligendi, maiores voluptatibus minus ad dignissimos ex. Explicabo ipsam fuga iste fugit. Nam saepe sapiente neque. Magnam ratione illum deleniti maiores ipsa quidem voluptates?</p>
            ) : ( "" )
        } */}
        {
            visible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam quidem culpa impedit esse porro, quasi laudantium aperiam nostrum velit, tenetur sit maxime incidunt commodi mollitia eligendi, maiores voluptatibus minus ad dignissimos ex. Explicabo ipsam fuga iste fugit. Nam saepe sapiente neque. Magnam ratione illum deleniti maiores ipsa quidem voluptates?</p>
        }

        <button className="btn btn-warning" onClick={updateVisible}>
            { visible ? 'Hide' : 'Show'}
        </button>
        </>
    )
}

export default EventEx;