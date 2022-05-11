import React, { Component } from 'react';
import { Image, Dropdown, Icon } from 'semantic-ui-react';
import Avatar from 'react-avatar';

class Collaborators extends Component {

	render() {
  	return (

      <div 
        style={{
          position: 'relative',
          backgroundColor: '#DEDEDE',
          borderRadius: '50px/60px',
          width: '120px',
          height: '32px',
          padding: '3px'
        }}
      >
          <Avatar // can have a googleID attribute that you pass it
            name="Laurie Anderson" 
            size="26px" 
            round={true}
            style={{
              position: 'absolute',
              left: '50%',
            }}
          /> 
          <Avatar
            name="Joe Shmo"
            size="26px"
            round={true}
            style={{
              position: 'absolute',
              left: '35%',
            }}
          />
          <Avatar
            name="Sam Hill"
            size="26px"
            round={true}
            style={{
              position: 'absolute',
              left: '20%',
            }}
          />
          <span
            style={{
              borderRadius: '50%',
              padding: '6px',
              position: 'absolute',
              left: '5%',
              backgroundColor: 'grey',
              width: '26px',
              height: '26px',
              fontSize: '.8em',
              fontWeight: 'bold' //not working???
            }}
          >
          <span
            style={{
              fontSize: 'small'
            }}
          > 
            <Dropdown
              trigger='+3' // this number is a reflection of how many > 3 collaborators there are
              icon={null}
              floating
              simple // causes the dropdown to trigger on hover rather than click
            >
              <Dropdown.Menu>
                <Dropdown.Item>List of additional collaborators</Dropdown.Item>
              </Dropdown.Menu>
              {/* the dropdown displays the additional collaborators */}
            </Dropdown>
          </span>
          </span>
          <span
            style={{
              position: 'absolute',
              left: '75%',
              padding: '6px'
            }}
          >
            <Icon 
              name='dropdown'
              style={{
                cursor: 'pointer'
              }}
              onClick={() => {
                this.props.openSharingModal();
              }} 
            />
          </span>
      </div>
  	);
	}
}

export default Collaborators;