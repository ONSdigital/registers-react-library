import React from 'react';
import PropTypes from 'prop-types';

const TitleAndDescription = ({ title, description, marginBottom }) => {
  return (
    <div className="page-intro background--gallery">
      <div className="wrapper">
        <div className="col-wrap">
          <div className="col">
            <div className="col col--md-47 col--lg-48">
              <h1 className="page-intro__title">
                {title}
              </h1>
              <p className={`page-intro__content margin-bottom--${marginBottom}`}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TitleAndDescription.defaultProps = {
  marginBottom: '1',
  description: '',
};

TitleAndDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  marginBottom: PropTypes.string,
};

export default TitleAndDescription;
