/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Counter from './Counter';

it ('renders without crash', () => {
  let wrapper = shallow(<App />);
})
// Ovanstående är MYCKET lik de bortkommenterade raderna högst upp,
// som är hämta från Davids Github React-cc-prototypes.


it ('renders the Welcome message in heading', () => {
  let wrapper = shallow(<App />)
  const greeting = <h1 className="App-title">Welcome to React</h1>;
  expect(wrapper.contains(greeting)).toBe(true)
})
// Contains har några syskon, med olika grad av känslighet. Prova dig fram, med och utan citationstecken.
// Lite märkligt: Enbart texten "Welcome to React" resulterar i true.
// Tar vi bort className="..." så blir det istället false, likaså om vi innesluter hela componenten
// inom enkelfnuttar.

it ('renders the initial counter value = 2', () => {
	let wrapper = shallow(<Counter />)
	expect( wrapper.state('value')).toBe(2);
});

it ('should increase state.value when button is clicked', () => {
	let wrapper = shallow(<Counter />);
	let wrappedButton = wrapper.find('#inca');
  // Letar upp element vid position 0, alltså det första den hittar.
	wrappedButton.simulate('click');
  expect( wrapper.state('value') ).toBe(3);
});
