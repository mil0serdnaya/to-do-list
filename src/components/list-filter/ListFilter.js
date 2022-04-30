import './list-filter.scss';

const ListFilter = () => {

  return(
    <footer className="list-filter">
      <button className="list-filter__btn">All</button>
      <button className="list-filter__btn">Active</button>
      <button className="list-filter__btn">Completed</button>
    </footer>
  )
}

export default ListFilter;