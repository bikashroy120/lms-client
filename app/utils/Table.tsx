"use client"


import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';

type Props = {
    columns:any;
    data:any;
}

const Table = ({columns,data}: Props) => {

    createTheme('solarized', {
        text: {
          primary: '#ffffff',
          secondary: '#fff',
        },
        background: {
          default: 'transparent',
        },
        context: {
          background: '#cb4b16'
        },
        divider: {
          default: '#808191',
          height:"1px"
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');

      const customStyles = {
        rows: {
            style: {
                minHeight: '52px', // override the row height
                
            },
        },

        headRows:{
            style: {
                minHeight: '52px', // override the row height
                background:"red",
                borderRadius:"20px"
            },
        },
        headCells: {
            style: {
                paddingLeft: '20px', // override the cell padding for head cells
                paddingRight: '20px',
                fontSize:"16px",
                backgroundColor: 'rgb(244, 246, 248)',
            },
        },
        cells: {
            style: {
                padding:"15px 20px ",
                paddingLeft: '20px', // override the cell padding for data cells
                paddingRight: '20px',
                fontSize:"16px",
                color: "rgb(99, 115, 129)",
            },
        },
    };
  return (
    <div className=' w-full font-Poppins text-slate-500 '>
        <DataTable
            columns={columns}
            data={data && data}
            customStyles={customStyles}
        />
    </div>
  )
}

export default Table