import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //return lodash object wherever we can use loadash method in chain
  //value = convert lodash wraper into regular array
  return _(items).slice(startIndex).take(pageSize).value();

  //   _.slice(items, startIndex)
}
