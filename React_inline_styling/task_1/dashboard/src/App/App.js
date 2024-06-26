import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FDFEFE ',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  Applogo: {
    position: 'relative',
    position: 'absolute',
    left: '0%',
    width: '20%',
    height: 'auto',
    top: '1cap',
  },
  Appheaderh1: {
    color: '#FF3352',
    textalign: 'right',
    position: 'relative',
    position: 'absolute',
    left: '0px',
    width: '45%',
    height: 'auto',
    top: '3cap',
  },
  Appheader: {
    backgroundcolor: 'white',
    minheight: '5vh',
    display: 'flex',
    flexdirection: 'rowreverse',
    alignitems: 'center',
    justifycontent: 'center',
    fontsize: 'calc(10px + 2vmin)',
  },
  appBody: {
    flex: '1',
    padding: '80px',
    bordertop: '2px solid #FF336B',
    margintop: '20%',
    marginright: '90px',
  },
  horizontalform: {
    display: 'flex',
    alignitems: 'center', /* Alinea los elementos verticalmente al centro */
  },
  footer: {
    backgroundColor: '#FDFEFE ',
    padding: '10px',
    textAlign: 'center',
  },
  horizontalformdiv: {
    display: 'flex',
    alignitems: 'center',
    marginright: '20px', /* Espacio entre los divs */
  },
  horizontalformlabel: {
    marginright: '10px', /* Espacio entre la etiqueta y el input */
  },
  horizontalforminput: {
    padding: '5px',
  },
  horizontalformbutton: {
    padding: '10px',
    backgroundcolor: '#f2f4f6',
    color: 'rgb(3, 3, 3)',
    border: 'none',
    cursor: 'pointer',
    borderradius: '7px',
  },
  horizontalformbuttonhover: {
    backgroundcolor: '#f2f4f6',
  },
  Appbodyp: {
    margintop: '4%',
    textalign: 'left',
    width: '50%',
  },
  Appfooterp: {
    textalign: 'center',
    padding: '10px',
    background: '#FDFEFE ',
    color: '#FF336B',
    borderColor: '2px solid #FF336B',
    margintop: '25%',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];

    return (
      <React.Fragment>
        <Notifications displayDrawer={true} listNotifications={listNotifications} />
        <div className={css(styles.app)}>
          <Header />
          <div className={css(styles.appBody)}>
            {this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar
                  facilisis justo mollis, auctor consequat urna.
              </p>
            </BodySection>
          </div>
          <footer className={css(styles.footer)}>
            <p>&copy; 2024 Your Company</p>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
