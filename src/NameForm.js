import React from 'react';
import ReactDOM from 'react-dom';
import './nameform.css';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    parseBold = (string) => {
        let u = this.state.foo === 0 ? string.replace(/<n>/g, '*') : this.state.foo === 1 ? string.replace(/<n>/g, '**') : string.replace(/<n>/g, '');
        return u;
    }

    myChangeHandler = (event) => {
        this.setState({ text: this.parseBold(event.target.value) });
        console.log(this.state.foo);
    }



    render() {
        let header = '';
        header = <textarea value={this.state.text} rows="6" cols="40" />

        return (
            <form id="App-form">
                <p>Publicâe</p>
                <div>
                    <textarea type='text' onChange={this.myChangeHandler} rows="6" cols="40" />
                </div>
                <div>
                    <input class="btn btn-primary" type="button" value="Whatsapp" onClick={(event) => this.setState({ foo: 0 })}></input>
                    <input class="btn btn-primary" type="button" value="Telegram" onClick={(event) => this.setState({ foo: 1 })}></input>
                    <input class="btn btn-primary" type="button" value="Instagram" onClick={(event) => this.setState({ foo: 2 })}></input>
                </div>
                <div>
                    {header}
                </div>
            </form >


        );
    }
}

export default NameForm;