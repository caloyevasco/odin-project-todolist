import { SideBar } from "./components/side-bar/side-bar.js";
import { ContentView } from "./components/content-view/content-view.js";
import "./styles.css"

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


const callbackFunc = (entry) => {
    console.log(`previous ${selectedEntry.content}`);
    selectedEntry = entry;
    console.log(`new ${selectedEntry.content}`)
    render([SideBar(todos), ContentView(selectedEntry.content)]);
}


let todos = [
    {
        isChecked: false,
        content: 'Todo 1',
        createdAt: '01/12/26',
        selectedCallback: callbackFunc,
        id: 't-1'
    },
    {
        isChecked: false,
        content: 'Todo 2',
        createdAt: '01/12/26',
        selectedCallback: callbackFunc,
        id: 't-2'
    }
]



render([
    SideBar(todos),
    ContentView(selectedEntry.content)
])