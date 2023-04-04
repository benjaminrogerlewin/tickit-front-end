export default function Events(props) {
    return(
        <>
            {props.eventContent.map((ven) => (
                    <div>
                       <h1>{ven.artist}</h1> 
                    </div>
                ))}
        </>
    )
}