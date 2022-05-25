import * as React from 'react';
import TablePage from '../../components/Controls/TablePage';
import strings from '../../localization';
import EditCountry from './EditCountry';
// import { DataGrid } from '@mui/x-data-grid';






const Country = () => {
    const [data, setData] = React.useState([]);
    // const [columns, setColumns] = React.useState([]);

    React.useEffect(() => {
        getCountries();
        // setColumns([...columnDescription]);
    },[])
    

    const columnDescription = [
        {
            field: 'name', headerName: strings.pages.country.name ,width: 150
        }
    ]

    const getCountries = async() => {
        let response = await fetch("http://localhost:8080/countries");
        let res = await response.json();
        setData(res);
}


    return(
        <TablePage editPage={<EditCountry/>} tableDescription={columnDescription} data={data}/>
    );
}

export default Country;