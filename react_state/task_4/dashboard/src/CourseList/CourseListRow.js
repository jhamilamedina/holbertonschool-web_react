import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
  },
  headerStyle: {
    backgroundColor: '#deb5b545',
  },
  headerCell: {
    fontWeight: 'bold',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell = null }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const rowClassNames = css(
    isHeader ? styles.headerStyle : styles.rowStyle,
    isChecked && styles.rowChecked
  );

  return (
    <tr className={rowClassNames}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(styles.headerCell)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.headerCell)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            {textFirstCell}
          </td>
          {textSecondCell !== null && <td>{textSecondCell}</td>}
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
