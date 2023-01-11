import React, { Component } from "react";

//columns : array
//sortcolumn:object
//onsort: function
class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    console.log(sortColumn);

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      // console.log(path,sortColumn)
      sortColumn.path = path;
      sortColumn.order = "desc";
    }
    this.props.onSort(sortColumn);
  };
  renderSortIcon = column => {
    const {sortColumn} = this.props;
    if(column.path !== this.props.sortColumn.path)  return null;
    if(this.props.sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
    return <i className="fa fa-sort-desc"></i>;
  }
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
