export const Info = ({data}) => {
    if(data === undefined)
    {
        return <></>
    }
    return <>
    <img src={data.image} alt="pic"/>
    <p>Title: {data.title}</p>
    <p>Ingredients: {data.ingredients}</p>
    <p>Time to Cook in minutes: {data.timeToCook}</p>
    <p>Instructions: {data.instruction}</p>
    </>
}