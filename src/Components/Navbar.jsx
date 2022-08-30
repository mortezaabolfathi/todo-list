const Navbar = ({unCompleted,filterTodoS}) => {

    const selectedOption=(e)=>{
        filterTodoS(e.target.value)
    }
    return ( 
        <div>
            {unCompleted ? 
            <> 
                <h4> unCompleted Todo </h4> <span>{unCompleted}</span> 

                <select onChange={selectedOption}>
                    <option value="all">all</option>
                    <option value="unCompleted">unCompleted</option>
                    <option value="completed">completed</option>
                </select>
            </>
            : 
            <>
                <h4> Tell me about your to-do list today </h4>
            </>}
        </div>
     );
}
 
export default Navbar;