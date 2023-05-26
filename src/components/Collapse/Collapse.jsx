import { useState } from 'react';
import PropTypes from 'prop-types';
import upArrow from '../../assets/img/upArrow.png';
import downArrow from '../../assets/img/downArrow.png';

function Collapse(props) {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <section className="collapse">
      <div className="collapse_visible" onClick={toggleState}>
        <h2 className="collapse_title">{props.collapseTitle}</h2>
        {toggle ? (
          <img className="UpArrow" src={upArrow} alt="Up Arrow" />
        ) : (
          <img className="DownArrow" src={downArrow} alt="Down Arrow" />
        )}
      </div>
      <div className={`collapse_hidden ${toggle ? 'is-visible' : ''}`} data-isaboutpage={props.isAboutPage ? 'true' : 'false'}>
        {Array.isArray(props.collapseText) ? (
          <ul>
            {props.collapseText.map((text, index) => (  /* Boucle pour afficher chaque élément du tableau collapseText */
              <li key={index}>{text}</li>
            ))}
          </ul>
        ) : (
          <p>{props.collapseText}</p>
        )}
      </div>
    </section>
  );
}

Collapse.propTypes = {
  isAboutPage: PropTypes.bool.isRequired,
  collapseTitle: PropTypes.string.isRequired,
  collapseText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

Collapse.defaultProps = {
  isAboutPage: false,
};

export default Collapse;
