


export const TableItem = ({category, id, product_name, img, in_stock, storage}) => {
  return (
    <tr category={category}>
        <td>{id}</td>
        <td>{product_name}</td>
        <td><img src={img} alt="" /></td>
        <td>{in_stock}</td>
        <td>{storage}</td>
    </tr>
  )
}
