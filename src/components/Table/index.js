import React from 'react';
import { Table, Icon } from 'semantic-ui-react';

const TableComponent = ({ data }) => {
    return(
    
  <Table celled striped selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Number</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {data.map(element => {
            
            return (<Table.Row key={element._id}>
            <Table.Cell>{element._id}</Table.Cell>
            <Table.Cell>{element.number}</Table.Cell>
            <Table.Cell><Icon name='edit outline' /></Table.Cell>
        </Table.Row>
        )
        })}
    </Table.Body>
  </Table>
)}

export default TableComponent;
