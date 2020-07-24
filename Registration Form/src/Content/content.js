import React from 'react';
import './content.css';
import PersonalInfoForm from './PersonalInfo/PersonalInfoForm';

class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            personalInformation: {},
            academicInformation: {}
        }
    }


    render() {
        return (
            <div className="content-body">
                <PersonalInfoForm />
            </div>
        );
    }
}

export default Content;