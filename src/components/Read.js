import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://63401a71d1fcddf69cb14ce9.mockapi.io/reactCrud`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return (
        <>
            <div>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Checked</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {APIData.map((data) => {
                        return (
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                    <Link to='/update'>
                                        <Table.Cell>
                                            <Button>Update</Button>
                                        </Table.Cell>
                                    </Link>
                                </Table.Row>
                            </Table.Body>
                        )
                    })}

                </Table>
            </div>
        </>
    )
}

export default Read;