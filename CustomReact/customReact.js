function customRender(reactElement,mainContainer){
    let domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for(let key in reactElement.props){
        domElement.setAttribute(key,reactElement.props[key]);
        domElement.setAttribute(key,reactElement.props[key]);
    }
    mainContainer.append(domElement);
}
let mainContainer=document.querySelector("#root");
let reactElement={
    type:"a",
    props:{
        href:"https//:google.com",
        target:"_blank"
    },
    children:"click me to visit google"
}
customRender(reactElement,mainContainer);