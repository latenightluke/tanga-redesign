import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Container } from 'reactstrap';

import styles from './CategoryBar.module.css';

import categories from './categories.json';

class CategoryBar extends Component {
  render() {
    const listCategories = categories.map((category, i) => (
      <NavLink
        to={category.url}
        className={styles.link + ' d-block text-nowrap'}
        key={i}
      >
        <span className={`text-${category.color}`}>
          {category.icon ? (
            <FontAwesomeIcon icon={category.icon} className="fs-xxs mr-2" />
          ) : null}
          {category.name}
        </span>
      </NavLink>
    ));
    return (
      <Container
        fluid
        className={styles.categoryBar + ' bg-white px-md-4 px-0 fs-xs bs-sm'}
        style={{ overflow: 'hidden', overflowY: 'visible', maxWidth: '100%' }}
      >
        <div
          className={
            styles.scrollable + ' d-flex flex-row justify-content-start'
          }
        >
          {listCategories}
        </div>
      </Container>
    );
  }
}

export default CategoryBar;
