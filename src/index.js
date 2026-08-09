import { SideBar } from "./components/side-bar/side-bar.js";
import { ContentView } from "./components/content-view/content-view.js";
import { CreateEntry } from "./components/create-entry/create-entry.js";
import "./styles.css";

let selectedEntry = {
    content: ''
};

const root = document.createElement('div');

const render = (elements) => {
    console.log('rerendering')
    root.innerHTML = ''
    root.className = 'main-container';
    root.append(...elements);
    document.body.append(root)
}


const setContentCallback = (todoObject, content) => {
    console.log(content);
    todos = todos.map((todo) => {
        if(todo.id == todoObject.id){
            todo.content = content;
        }
        return todo;
    });
}


const createCallback = () => {
    todos.push({
        isChecked: false,
        content: 'Todo 2',
        createdAt: new Date().toDateString(),
        selectedCallback: callbackFunc,
        setCheckCallback: setCheckCallback,
        id: crypto.randomUUID()
    });
    render(
        [
            SideBar(todos, CreateEntry(createCallback)), 
            ContentView(selectedEntry, setContentCallback, setContentCallback)
        ]
    );
}



const callbackFunc = (entry) => {
    console.log(`previous ${selectedEntry.content}`);
    selectedEntry = entry;
    console.log(`new ${selectedEntry.content}`)
    render(
        [
            SideBar(todos, CreateEntry(createCallback)), 
            ContentView(selectedEntry, setContentCallback, setCheckCallback)
        ]
    );
}


const setCheckCallback = (todoObject, isChecked) => {
    console.log(todoObject);
    todos = todos.map((todo) => {
    if(todo.id == todoObject.id){
        todo.isChecked = isChecked;
    }
    return todo;
    });
    render(
        [
            SideBar(todos, CreateEntry(createCallback)), 
            ContentView(selectedEntry, setContentCallback, setCheckCallback)
        ]
    );
}

let todos = [
    {
        isChecked: false,
        content: 'Todo 1',
        createdAt: new Date().toDateString(),
        selectedCallback: callbackFunc,
        setCheckCallback: setCheckCallback,
        id: crypto.randomUUID()
    },
    {
        isChecked: false,
        content: 'Todo 2',
        createdAt: new Date().toDateString(),
        selectedCallback: callbackFunc,
        id: crypto.randomUUID(),
        setCheckCallback: setCheckCallback
    }
]


render([
    SideBar(todos, CreateEntry(createCallback), setCheckCallback),
    ContentView(selectedEntry, setContentCallback)
])