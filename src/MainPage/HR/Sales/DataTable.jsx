import { useTable, usePagination } from "react-table";

import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, TableFooter, TablePagination } from "@mui/material";
// import TablePaginationActions from './TablePaginationActions'

import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

const DataTable = ({
  columns,
  data,
  initialState,
  enablePagination,
  defaultColumn,
  updateMyData,
  skipPageReset,
  customFooter,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetPage: !skipPageReset,
      updateMyData,
      initialState: {
        pageIndex: 0,
        hiddenColumns: columns
          .filter((column) => !column?.isVisible)
          .map((column) => column.accessor),
      },
    },
    usePagination
  );

  function Footer() {
    return (
      <>
        <div className="rdt_Pagination">
          <FirstPageIcon
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </FirstPageIcon>{" "}
          <KeyboardArrowLeftIcon
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </KeyboardArrowLeftIcon>{" "}
          <KeyboardArrowRight
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {">"}
          </KeyboardArrowRight>{" "}
          <LastPageIcon
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </LastPageIcon>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  }

  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(Number(event.target.value));
  };

  const removeByIndexs = (array, indexs) =>
    array.filter((_, i) => !indexs.includes(i));

  const deleteUserHandler = (event) => {
    if (data.length > 0) {
      const newData = removeByIndexs(
        data,
        Object.keys(selectedRowIds).map((x) => parseInt(x, 10))
      );
      setData(newData);
    }
  };

  const addUserHandler = (user) => {
    const newData = data.concat([user]);
    setData(newData);
  };

  // Render the UI for your table
  return (
    <>
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {(rows.length > 0 &&
            rows.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })) || <span>no data....</span>}
        </TableBody>

        <TableFooter>
          <TableRow>
            {enablePagination && <Footer />}
            {/* <TablePagination
                            rowsPerPageOptions={[
                                5,
                                10,
                                25,
                                { label: 'All', value: data.length },
                            ]}
                            colSpan={3}
                            count={data.length}
                            rowsPerPage={pageSize}
                            page={pageIndex}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={CustomPagination}
                        /> */}
          </TableRow>
        </TableFooter>
      </MaUTable>
      {customFooter}
    </>
  );
};

export default DataTable;
