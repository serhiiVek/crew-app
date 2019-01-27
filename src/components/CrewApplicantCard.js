import React, { Component } from 'react';

const textStyle = {
    textTransform: 'capitalize'
};
const arrowStyle = {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%'
};

class CrewApplicantCard extends Component {

    constructor(props) {
        super(props);
        this.state = {status: "Applied"};
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.status > 1 && this.state.status < 3) {
            console.log(this.state.status + 'потом клик');
            return true;
        }
        return false;
    }
    previousStatus = () => {
        switch (this.state.status) {
            case 'Hired':
                this.setState({status: 'Interviewing'});
                console.log('Actin: Left - previousStatus: '+ this.state.status);
                break;
            case 'Interviewing':
                this.setState({status: 'Applied'});
                console.log('Actin: Left - previousStatus: '+ this.state.status);
                break;
            default:
                console.log('Actin: Left - status is alredy: '+ this.state.status);
        }
    };
    nextStatus = () => {
        switch (this.state.status) {
            case 'Applied':
                this.setState({status: 'Interviewing'});
                console.log('Actin: Right - previousStatus: '+ this.state.status);
                break;
            case 'Interviewing':
                this.setState({status: 'Hired'});
                console.log('Actin: Right - previousStatus: '+ this.state.status);
                break;
            default:
                console.log('Actin: Right - status is alredy: '+ this.state.status);
        }
    };

    render() {
        return (
            <div className="col s12">
                <div className='card-panel grey lighten-5 z-depth-1'>
                    <div className="row valign-wrapper" style={{margin: "0px"}}>
                        <i className="material-icons"
                           onClick={this.previousStatus}
                           style={arrowStyle}
                        >keyboard_arrow_left</i>
                        <div className="col s12 m5">
                            <img src={this.props.picture} alt="asd" className="circle"/>
                        </div>
                        <div className="col s12 m7">
                            <h6 style={textStyle}><b>{this.props.firstname} {this.props.lastname}</b></h6>
                            <p style={textStyle}>{this.props.city}</p>
                            <p>Status: <span>{this.state.status}</span></p>
                        </div>
                        <i className="material-icons"
                           style={arrowStyle}
                           onClick={this.nextStatus}
                        >keyboard_arrow_right</i>
                    </div>
                </div>
            </div>
        );
    }
}
export default CrewApplicantCard;