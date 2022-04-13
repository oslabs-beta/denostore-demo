import * as React from 'react';
import { QuerySelectorDropdownProps } from '../../types';

const QuerySelectorDropdown: React.FC<QuerySelectorDropdownProps> = ({
  possibleQueries,
  handleSelection,
}) => {
  const options = possibleQueries.map((queries, i) => (
    <option value={i} key={Math.floor(Math.random() * 10000)}>
      {queries.description}
    </option>
  ));

  return (
    <div>
      <select
        className="QuerySelectorDropdown"
        name="selectList"
        id="selectList"
        onChange={(e) => {
          handleSelection(e.target.value);
        }}
      >
        {options}
      </select>
    </div>
  );
};

export default QuerySelectorDropdown;
