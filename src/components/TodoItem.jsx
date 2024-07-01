import './style.css'
function TodoItem(props){
    return(
        <>
           <div className="todo-item">
            <input type="checkbox" checked = {props.item.check}/>
            <p>{props.item.text}</p>
           </div> 
        </>
    )
}
export default TodoItem 
