import React from 'react'

function LiskHooks() {
  return (
    <div className='mt-5'>
      <ul>
        <li><h3>Explain Life cycle in Class Component and functional component with Hooks</h3></li>
      </ul>

    <ul>
      <li><b>The component’s lifecycle consists of three phases:</b></li>
      <br/>
      <ol>
        <li><b>Mounting lifecycle methods</b></li>
        <p>that is inserting elements into the DOM.</p>
        <p>As we mentioned, during the mounting phase of the lifecycle, the class component is inserted into the DOM. A good example would be componentDidMount() – a lifecycle method that runs after the component is mounted and rendered to the DOM. It is great when you want to do an interval function or an asynchronous request. </p>


        <li><b>Updating</b></li>
        <p>which involves methods for updating components in the DOM.</p>
        <p>The componentDidUpdate() render method is called right after the updating happens. This one is called always except for the initial render. That’s a good place to interact with a non-reactive environment. It’s a good idea to make http requests here. </p>

        <p>You can call setState() in this method to enqueues changes to the component’s state. but it is very important to wrap that in some condition to avoid an infinite loop (doesn’t matter if state has the same values or not). If there is no condition, the process goes as follows:</p>
        
        <ol>
          <li>You call setState() in the componentDidUpdate() method.</li>
          <li>The component is updated.</li>
          <li>componentDidUpdate() is invoked.</li>
          <li>setState() is called again …</li>
        </ol>

        <li><b>Unmounting</b></li>
        <p> that is removing a component from the DOM</p>
        <p>componentWillUnmount() is invoked just before the component is removed from the DOM. You should use that to remove event listeners, clear intervals and cancel requests. In other words: all the needed cleanup.</p>
      </ol>
    </ul>
    </div>
  )
}

export default LiskHooks