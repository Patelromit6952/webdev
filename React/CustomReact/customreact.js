
function customrender(reactelement,maincontainer){
    // const domelement = document.createElement(reactelement.type)
    // domelement.innerHTML = reactelement.children
    // domelement.setAttribute('href',reactelement.props.href) 
    // domelement.setAttribute('traget',reactelement.props.target) 

    // maincontainer.appendChild(domelement)

    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    for(const prop in reactelement.props){
        // if(prop === children) continue;
        domelement.setAttribute(prop,reactelement.props[prop])
    }
    maincontainer.appendChild(domelement)
}
const reactelement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'__blank'
    },
    children:'click me to visit google'
}
const maincontainer = document.querySelector('#root')

customrender(reactelement,maincontainer)
