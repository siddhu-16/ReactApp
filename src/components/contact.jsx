function ContatCard(props){
    return(
        <>
            <div className="contact-card">
                <h3>Name:{props.name}</h3>
                <p>Phone: {props.contact}</p>
                <p>Email:{props.email}</p>
            </div>
        </>
    )
}
export default ContatCard 