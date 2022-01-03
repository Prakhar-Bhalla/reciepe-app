export const Form = () => {
    return <form>
    <input name="title" placeholder="Enter Name" onChange={reflectChange}/>
    <input name="ingredients" placeholder="Input ingredients" onChange={reflectChange}/>
    <input name="timeToCook" placeholder="Time to cook in minutes" onChange={reflectChange} type="number"/>
    <input name="image" placeholder="Image link" onChange={reflectChange}/>
    <input name="instruction" placeholder="Instructions" onChange={reflectChange}/>
    </form>
}