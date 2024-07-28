// Table.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

const Table = ({ headers, rows, footer, disabled, backgroundColor }) => {
  return (
    <div
      className={`table-container ${disabled ? 'disabled' : ''}`}
      style={{ backgroundColor }}
    >
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="table-header">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="table-row">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table-cell">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {footer && (
          <tfoot>
            <tr>
              <td colSpan={headers.length} className="table-footer">
                {footer}
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
  footer: PropTypes.node,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Table.defaultProps = {
  footer: null,
  disabled: false,
  backgroundColor: 'transparent',
};

export default Table;
