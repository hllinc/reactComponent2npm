import React from 'react';
import * as styles from './index.css';
import PropTypes from 'prop-types'

class ReactDemo extends React.Component {

  constructor(props) {
    super(props);
    this.props = {
      type: PropTypes.string,
      value: PropTypes.string
    };
  }

  render() {
    const {
      value,
      type
    } = this.props;
    return <div className={styles.timChatWidget}>
      <p>咚咚运维</p>
      <a href={value}>点我</a>
    </div>
  }
}

export default ReactDemo;
