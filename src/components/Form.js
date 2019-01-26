import React, { Component } from 'react';
class Form extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.getFilterData}>
                    <div className={'container'}>
                        <div className={'col s12 m12'} >
                            <input type="text" name={'city'} placeholder={'City'}/>
                            <input type="text" name={'name'} placeholder={'Name'}/>
                        </div>
                        <button className="waves-effect green lighten-2 btn col s12 m12">Filter</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Form;