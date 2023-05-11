import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    address: string;
    id: number,
    price: number
}


const sampleData: DataType[] = [{
    "id": 1,
    "name": "Linell",
    "address": "ljackalin0@etsy.com",
    "key": "04-191-5653",
    "price": 98
}, {
    "id": 2,
    "name": "Eward",
    "address": "esimioli1@angelfire.com",
    "key": "95-390-1044",
    "price": 42
}, {
    "id": 3,
    "name": "Berny",
    "address": "bblumire2@berkeley.edu",
    "key": "19-375-5474",
    "price": 64
}, {
    "id": 4,
    "name": "Vanna",
    "address": "vvant3@walmart.com",
    "key": "72-604-3510",
    "price": 97
}, {
    "id": 5,
    "name": "Minny",
    "address": "mrasmus4@ustream.tv",
    "key": "45-956-9942",
    "price": 57
}, {
    "id": 6,
    "name": "Misti",
    "address": "mstarbeck5@answers.com",
    "key": "44-426-4136",
    "price": 35
}, {
    "id": 7,
    "name": "Noelyn",
    "address": "ntocque6@gmpg.org",
    "key": "16-909-2425",
    "price": 15
}, {
    "id": 8,
    "name": "Gallard",
    "address": "ghedworth7@noaa.gov",
    "key": "48-163-1273",
    "price": 34
}, {
    "id": 9,
    "name": "Kania",
    "address": "kclerc8@phpbb.com",
    "key": "40-984-1717",
    "price": 23
}, {
    "id": 10,
    "name": "Mattie",
    "address": "mtyndall9@google.it",
    "key": "65-587-3679",
    "price": 49
}]




const CommonTable: React.FC = () =>{
    console.log('====================================');
    console.log('a');
    console.log('====================================');
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'Total',
            width: 100,
            fixed: 'left',
            key:'total',
            // render: (text: string) => <a>1 </a>,
            render(value, record, index) {
                console.log('====================================');
                console.log('dsf:: ',record);
                console.log('====================================');
                return <a>sd11f</a>
            },
        },
        { title: 'Turn 1', dataIndex: 'price', key: '1' },
        { title: 'Turn 2', dataIndex: 'price', key: '2' },
        { title: 'Turn 3', dataIndex: 'price', key: '3' },
        { title: 'Turn 4', dataIndex: 'price', key: '4' },
        { title: 'Turn 5', dataIndex: 'price', key: '5' },
        { title: 'Turn 6', dataIndex: 'price', key: '6' },
        { title: 'Turn 7', dataIndex: 'price', key: '7' },
        { title: 'Turn 8', dataIndex: 'price', key: '8' },
    ];
    
    const [data,setData] = useState(sampleData)
    

    return ( <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />)
};

export default CommonTable;
