import "./Component0.css";


export default function Component0() {
    const person = {
        name: "John",
        age: 25,
        city: "New York"
    };

    const h1Style = {
        color: "blue",
        fontSize: "24px"
    }

    return (

    <div>
        <h1 style={h1Style}>Component 0</h1>
        <h3 className={person.age > 10 ? "background-red" : "background-green"}>{person.name}</h3>
        <h3>{sayWord("word")}</h3>
        <button onClick={showAlert} >Click here </button>

        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

    );


} 

function sayWord(word = "JS is cool") {
    return word;
}

function showAlert() {
    alert("word");
}