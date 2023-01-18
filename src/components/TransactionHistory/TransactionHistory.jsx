import PropTypes from "prop-types";
import { Table, TableHead, Td} from "./TransactionHistory.styled";


export default function TransactionHistory({ items }) {
    
const elements = items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
        </tr>));
    
    return (
       <Table className="transaction-history">
  <TableHead>
<tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TableHead>

  <tbody>
    {elements}
  </tbody>
</Table>
    )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
                amount: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired
            }
        ).isRequired
).isRequired
}
