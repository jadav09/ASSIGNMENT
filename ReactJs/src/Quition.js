import React from 'react'

function Quition() {
  return (
    <div className=''>
      <ul><li><h2>What is React Js?</h2></li></ul>
      <ul>
        <li>React is a JavaScript library for building user interfaces (UIs) on the web.</li>
        <li>React is a tool for building UI components</li>
        <li>React is a declarative, component based library that allows developers to build reusable UI components and It follows the Virtual DOM (Document Object Model) approach, which optimizes rendering performance by minimizing DOM updates. React is fast and works well with other tools and libraries.</li>
      </ul>

      <ul>
        <li><h3>What is NPM in React Js ?</h3></li>
      </ul>
      <ul>
        <li>The command npm is used to download JavaScript packages from Node Package Manager. </li>
        <li>npx is used to execute JavaScript packages downloaded this way.</li>
        <li>This command will download the NPM package create-react-app to a subdirectory of the current working directory named node_modules : npm install create-react-app.</li>
      </ul>


      <ul>
        <li><h3>What is Role of Node Js in react Js?</h3></li>
      </ul>

      <ul>
        <li>Using Node. js and React together empowers web applications to handle heavy server loads and requests.</li>

        <li>Therefore, it allows you to work easily throughout the development process</li>
      </ul>

      <ul>
        <li><h3>What is CLI command In React Js?</h3></li>
      </ul>
      <ul>
        <li>React has its own command-line interface (CLI) commands. However, these CLI commands are currently only used to create a passable version of a react application using the command line.</li>
        <li>react-command se hum new react appication create kar sak te hia.</li>
        <br />

        <li><b>some command</b></li>
        <li>npx create-reacp-app</li> (create a new app in react)
        <li>npm i any-installation name</li> (install some pakages)
      </ul>
      <ul>
        <li><h3>What is Components in React Js?</h3></li>
      </ul>

      <ul>
        <li><b>class component</b></li>
        <br />

        <li>When creating a React component, the component's name MUST start with an upper case letter.</li>
        <li>A class component must include the extends React.Component statement.</li>
        <li>The component also requires a render() method, this method returns HTML.</li>

        <br />
        <li><b>function component</b></li>
        <li>A Function component also returns HTML, and behaves much the same way as a Class component</li>

        <li>but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.</li>

      </ul>

      <ul>
        <li><h3>What is Header and Content Components in React Js?</h3></li>
      </ul>

      <ul>
        <li>The Header is an important element of a website’s design. It’s the first impression of the website.</li>
        <br />
        <li><b>steps:</b></li>

        <li>you can create first header command in you react app.</li>
        <li>create nav inside of header component. and create some links inside the nav.</li>
        <li>call the header component insite the main react app componnet.</li>
        <li>second content component create in react app.and call that below header component</li>
        <li>content componet ke under some some contetn hoga. ex:- div,img,containter</li>
      </ul>

      <ul>
        <li><h3>How to install React Js on Windows, Linux Operating System? How to Install NPM and How to check version of NPM?</h3></li> </ul>
      <br />

      <ul>
        <li>how to install react app for Windows follows some steps:</li>
        <br />
        <li><b>step:1</b></li>
        <li>first install node.js software in you pc</li>

        <li><b>step:2</b></li>
        <li>Open command prompt  to check whether it is completely installed or not type the command</li>

        <li><b>step:3</b></li>
        <li>Now in the terminal run the below command:== &gt; npm install -g create-react-app   </li>


        <li><b>step:3</b></li>
        <li>opne any folder you pc. and type command to crete react folder in yor</li>
        <li><b>run the command  to create folder :==&gt; npx create-react-app foldername</b></li>
        <li>folder created completely and open you folder and type command :- ==&gt; code . </li>
      </ul>

      <ul>
        <li><h3>How to check version of React Js?</h3></li>
      </ul>
      <ul>
        <li><b>check version in you react app runt the comand</b> ==&gt; npm view react version</li>
      </ul>

      <ul>
        <li><h3>How to change in components of React Js?</h3></li>
      </ul>

      <ul>
        <li>We have to set initial state value inside constructor function and set click event handler of the element upon which click, results in changing state. </li>

        <li>Then pass the function to the click handler and change the state of the component inside the function using setState.</li>

        <li>useState hook ke jariye hame component ki value change kar sak te hai.</li>


      </ul>

    </div>



  )
}

export default Quition