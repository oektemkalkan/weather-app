import './form.css'

export default function Form({onAddActivity}){
    return(
        <>
        <form>
        <h2>Add new Activity:</h2>
        <div>
        <h3>Name:</h3>
        <input type="text"/>
        </div>
        <br/>
        <div>
        <h3>Good-Weather activity:</h3>
        <input type="checkbox"/>
        </div>
        <br/>
        <button>Submit</button>
        </form>
        </>
    )
}