import './App.css';

function GreetingElementWithProps(props){
    return(
        <div className='app'>
            <h1>{props.message}</h1>
        </div>
    );
}

export default GreetingElementWithProps;