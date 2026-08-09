import "./side-bar.css"
import { CreateEntry } from "../create-entry/create-entry.js";
import { Entry } from "../entry/entry.js";

const Header = () => {
    const container = document.createElement('div');
    container.className = 'sidebar-header';

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Todo's";

    container.append(headerTitle)
    return container;
}

const Create = () => {
    const button = document.createElement('button');
    button.textContent = '+';
    button.className = 'entry-create-button';
    return button;
}

export const SideBar = (todos, createEntry, setCheckCallback) => {
    const container = document.createElement('div');
    container.className = 'sidebar'

    container.append(Header());

    const tasks = todos.map((curr) => Entry(
        curr,
        curr.selectedCallback,
        curr.setCheckCallback
    ))

    tasks.push(createEntry);

    container.append(...tasks);

    return container;
}