type SortType = {
  sortName: string, 
  sortText: string, 
  onClick?: () => void, 
  defaultChecked: boolean
}

export const SortItem = ({ sortName, sortText, onClick, defaultChecked}: SortType) => {
  return (
    <div className={`sort sort-${sortName}`}>
      <input
        type="radio"
        id={`sort-${sortName}`}
        name="sort"
        value={`sort-${sortName}`}
        defaultChecked={defaultChecked}
        onClick={onClick}
      />
      <label htmlFor={`sort-${sortName}`}>{sortText}</label>
    </div>
  );
};

