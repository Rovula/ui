import React from "react";
interface Column {
    header: string;
    accessor: string;
}
interface TableProps {
    columns: Column[];
    data: Record<string, any>[];
}
declare const Table: React.FC<TableProps>;
export default Table;
