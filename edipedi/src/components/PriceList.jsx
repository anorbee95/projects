import { Table } from 'react-bootstrap';
import './content.css'

const PriceList = () => {
    return (
        <Table className='arlista' striped bordered hover>
            <thead>
                <tr>
                    <th colSpan="2">Pedikűr</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Esztétikai pedikűr</td>
                    <td>5 800 Ft</td>
                </tr>
                <tr>
                    <td>Callux Pedikűr</td>
                    <td>7 000 Ft</td>
                </tr>
                <tr>
                    <td>Speciális pedikűr</td>
                    <td>9 900 Ft</td>
                </tr>
                <tr>
                    <td>Hagyományos körömlakk</td>
                    <td>2 000 Ft</td>
                </tr>
                <tr>
                    <td>Géllakk</td>
                    <td>3 800 Ft</td>
                </tr>
                <tr>
                    <td>Géllakk eltávolítás</td>
                    <td>2 600 Ft</td>
                </tr>
                <tr>
                    <td>Körömvágás</td>
                    <td>2 800 Ft</td>
                </tr>
                <tr>
                    <td>Reflex zónás talpmasszázs</td>
                    <td>4 000 Ft</td>
                </tr>
                <tr>
                    <th colSpan="2">Manikűr</th>
                </tr>
                <tr>
                    <td>Manikűr</td>
                    <td>3 800 Ft</td>
                </tr>
                <tr>
                    <td>Géllakk</td>
                    <td>5 800 Ft</td>
                </tr>
                <tr>
                    <td>Erősített géllakk</td>
                    <td>6 500 Ft</td>
                </tr>
                <tr>
                    <td>Géllakk eltávolítás</td>
                    <td>3 200 Ft</td>
                </tr>
                <tr>
                    <td>Japán manikűr</td>
                    <td>4 600 Ft</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default PriceList;
