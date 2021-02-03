
const List = (props) => {
    console.log(props)
    const mappedSight = props.sight.map(e => {
        return (
            <div>
                <h2>{e.sense1}</h2>
                <h2>{e.sense2}</h2>
                <h2>{e.sense3}</h2>
                <h2>{e.sense4}</h2>
                <h2>{e.sense5}</h2>
            </div>
        )
    })
    const mappedTaste = props.taste.map(e => {
        return (
            <div>
                <h2>{e.sense1}</h2>
                <h2>{e.sense2}</h2>
                <h2>{e.sense3}</h2>
                <h2>{e.sense4}</h2>
                <h2>{e.sense5}</h2>
            </div>
        )
    })
    const mappedSmell = props.smell.map(e => {
        return (
            <div>
                <h2>{e.sense1}</h2>
                <h2>{e.sense2}</h2>
                <h2>{e.sense3}</h2>
                <h2>{e.sense4}</h2>
                <h2>{e.sense5}</h2>
            </div>
        )
    })
    const mappedHear = props.hear.map(e => {
        return (
            <div>
                <h2>{e.sense1}</h2>
                <h2>{e.sense2}</h2>
                <h2>{e.sense3}</h2>
                <h2>{e.sense4}</h2>
                <h2>{e.sense5}</h2>
            </div>
        )
    })
    const mappedTouch = props.touch.map(e => {
        return (
            <div>
                <h2>{e.sense1}</h2>
                <h2>{e.sense2}</h2>
                <h2>{e.sense3}</h2>
                <h2>{e.sense4}</h2>
                <h2>{e.sense5}</h2>
            </div>
        )
    })

    return <div>
        {mappedSight}
        {mappedTaste}
        {mappedSmell}
        {mappedHear}
        {mappedTouch}
        
    </div>
}

export default List