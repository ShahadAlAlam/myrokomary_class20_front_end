const person={
    name:"Shahad",
    address:{
        "house":"2/7/1",
        "road":"1",
        "area":"Tolarbag"
    },
    profiles:["twitter","linkedin"],
    printProfile : ()=>{
        person.profiles.map(
            (profile)=>{
                console.log(profile)
            }
        )
    }


}
export default function LearningJavaScript(){
    return (
        <div className="LearningJavaScript">
            <h1>LearningJavaScript {person.name}</h1>
            <div>{person.address.area}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </div>
    )
}