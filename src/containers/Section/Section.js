import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';

class Section extends Component {
  render() {
    return (
      <Container fluid className="mb-5 px-0">
        <h4 className="mb-3">{this.props.name}</h4>
        <Row>{this.props.children}</Row>
      </Container>
    );
  }
}

Section.propTypes = {
  name: PropTypes.string,
};

Section.defaultProps = {
  name: 'Section Name',
};

export default Section;
