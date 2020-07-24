import React from 'react';
import './PersonalInfoForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import csc from 'country-state-city';

class PersonalInfoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dateOfBirth: '',
            phoneNumber: '',
            email: '',
            fatherName: '',
            motherName: '',
            addressLine1: '',
            addressLine2: '',
            countries: [],
            states: [],
            cities: [],
            selectedCountry: '',
            selectedState: '',
            selectedCity: '',
            pincode: '',
            personWithDisability: ''
        }

        this.handleChange_name = this.handleChange_name.bind(this)
        this.handleChange_dateOfBirth = this.handleChange_dateOfBirth.bind(this)
        this.handleChange_phoneNumber = this.handleChange_phoneNumber.bind(this)
        this.handleChange_email = this.handleChange_email.bind(this)
        this.handleChange_fatherName = this.handleChange_fatherName.bind(this)
        this.handleChange_motherName = this.handleChange_motherName.bind(this)
        this.handleChange_addressLine1 = this.handleChange_addressLine1.bind(this)
        this.handleChange_addressLine2 = this.handleChange_addressLine2.bind(this)
        this.handleChange_city = this.handleChange_city.bind(this)
        this.handleChange_state = this.handleChange_state.bind(this)
        this.handleChange_country = this.handleChange_country.bind(this)
        this.handleChange_pincode = this.handleChange_pincode.bind(this)
        this.handleChange_personWithDisability = this.handleChange_personWithDisability.bind(this)
        this.submitForm = this.submitForm.bind(this)


    }

    componentDidMount() {
        const countries = csc.getAllCountries();

        this.setState({ countries: [{ name: 'Select option', id: 0 }].concat(countries) })
    }

    handleChange_name(evt) {
        this.setState({ name: evt.target.value })
    }

    handleChange_dateOfBirth(evt) {
        this.setState({ dateOfBirth: evt.target.value })
    }

    handleChange_phoneNumber(evt) {
        this.setState({ phoneNumber: evt.target.value })
    }

    handleChange_email(evt) {
        this.setState({ email: evt.target.value })
    }

    handleChange_fatherName(evt) {
        this.setState({ fatherName: evt.target.value })
    }

    handleChange_motherName(evt) {
        this.setState({ motherName: evt.target.value })
    }

    handleChange_addressLine1(evt) {
        this.setState({ addressLine1: evt.target.value })
    }

    handleChange_addressLine2(evt) {
        this.setState({ addressLine2: evt.target.value })
    }

    handleChange_city(evt) {
        const selectedCityId = evt.target.value;
        const cityName = csc.getCityById(selectedCityId).name

        this.setState({ selectedCity: cityName })

    }

    handleChange_state(evt) {

        const selectedStateId = evt.target.value;
        const stateName = csc.getStateById(selectedStateId).name

        this.setState({ selectedState: stateName })

        this.setState({ cities: [{ id: 0, name: 'Select a State' }].concat(csc.getCitiesOfState(selectedStateId)) })
    }

    handleChange_country(evt) {

        const selectedCountryId = evt.target.value;
        const countryName = csc.getCountryById(selectedCountryId).name

        this.setState({ selectedCountry: countryName })

        this.setState({ states: [{ id: 0, name: 'Select a State' }].concat(csc.getStatesOfCountry(selectedCountryId)) })

    }

    handleChange_pincode(evt) {
        this.setState({ pincode: evt.target.value })
    }

    handleChange_personWithDisability(evt) {
        this.setState({ personWithDisability: evt.target.value })
    }

    submitForm() {
        const form = this.state;

        const age = Number(((new Date() - new Date(form.dateOfBirth)) / (24 * 60 * 60 * 1000)) / 365)

        delete form['countries']
        delete form['states']
        delete form['cities']


        if (age < 8) {
            alert('You must be atleast 8 years old!')
            return;
        } else if (age >= 8 && age < 12) {
            form['group'] = 'New Comers'

        } else if (age >= 12 && age < 16) {
            form['group'] = 'Teens'

        } else if (age >= 16 && age < 18) {
            form['group'] = 'Pros'
        }

        console.log(JSON.stringify(form))
        return false;
    }


    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className='container'>
                    <h2>Registration Form</h2>
                    <h5>Personal Information</h5>
                    <div className='row'>
                        <div className='col-6'>
                            <label>Name</label>
                            <br></br>
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChange_name}
                                placeholder="Enter your name">
                            </input>
                        </div>
                        <div className='col-6'>
                            <label>Date of Birth</label>
                            <br></br>
                            <input
                                type="date"
                                value={this.state.dateOfBirth}
                                onChange={this.handleChange_dateOfBirth}>
                            </input>

                        </div>
                    </div>
                    <br></br>

                    <div className='row'>
                        <div className='col-6'>
                            <label>Phone Number</label>
                            <br></br>
                            <input
                                type="tel"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange_phoneNumber}
                                placeholder='Enter phone number'>
                            </input>

                        </div>
                        <div className='col-6'>
                            <label>Email</label>
                            <br></br>
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange_email}
                                placeholder='Enter email'>
                            </input>

                        </div>
                    </div>
                    <br></br>

                    <div className='row'>
                        <div className='col-6'>
                            <label>Father's Name</label>
                            <br></br>
                            <input
                                type="Text"
                                value={this.state.fatherName}
                                onChange={this.handleChange_fatherName}
                                placeholder='Start typing'>
                            </input>

                        </div>
                        <div className='col-6'>
                            <label>Mother's Name</label>
                            <br></br>
                            <input
                                type="Text"
                                value={this.state.motherName}
                                onChange={this.handleChange_motherName}
                                placeholder='Start typing'>
                            </input>

                        </div>
                    </div>
                    <br></br>

                    <div className='row'>
                        <div className='col-6'>
                            <label>Address Line1</label>
                            <br></br>
                            <input
                                type="Text"
                                value={this.state.addressLine1}
                                onChange={this.handleChange_addressLine1}
                                placeholder='Start typing'>
                            </input>

                        </div>
                        <div className='col-6'>
                            <label>Address Line2</label>
                            <br></br>
                            <input
                                type="Text"
                                value={this.state.addressLine2}
                                onChange={this.handleChange_addressLine2}
                                placeholder='Start typing'>
                            </input>

                        </div>
                    </div>
                    <br></br>

                    <div className='row'>
                        <div className='col-6'>
                            <label>Country: <b>{this.state.selectedCountry}</b></label>
                            <br></br>
                            <select value={this.state.selectedCountry}
                                onChange={this.handleChange_country}>
                                {this.state.countries.map((item) =>
                                    <option key={item.id} value={item.id}>{item.name}</option>)}
                            </select>

                        </div>
                        <div className='col-6'>
                            <label>State: <b>{this.state.selectedState}</b></label>
                            <br></br>
                            <select value={this.state.selectedState}
                                onChange={this.handleChange_state}>
                                {this.state.states.map((item) =>
                                    <option key={item.id} value={item.id}>{item.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <br></br>

                    <div className='row'>
                        <div className='col-6'>
                            <label>City: <b>{this.state.selectedCity}</b></label>
                            <br></br>
                            <select value={this.state.selectedcity}
                                onChange={this.handleChange_city}>
                                {this.state.cities.map((item) =>
                                    <option key={item.id} value={item.id}>{item.name}</option>)}
                            </select>
                        </div>
                        <div className='col-6'>
                            <label>Pincode</label>
                            <br></br>
                            <input
                                type="text"
                                value={this.state.pincode}
                                onChange={this.handleChange_pincode}
                                placeholder='Start typing'>
                            </input>

                        </div>
                    </div>
                    <br></br>

                    <div className='row'>
                        <div className='col-6'>
                            <label>Person with Disability: <b>{this.state.personWithDisability}</b></label>
                            <br></br>
                            <select value={this.state.personWithDisability}
                                onChange={this.handleChange_personWithDisability}>
                                <option defaultValue disabled hidden value="">Select Option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>

                        </div>
                        <div className='col-6'>
                            <br></br>

                        </div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-6 submit-col'>
                            <input className='submit-btn-grp' type='submit'></input>
                            <input className='submit-btn-grp' type='reset'></input>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
                <br></br>
            </form>
        )
    }


}

export default PersonalInfoForm;