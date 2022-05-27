import * as React from 'react';
import {
  Checkbox,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

interface IData {
  "Make": string,
  "Type": string,
  "Color": string,
  "Registration Number": string,
  "Date Of FirstRegistration": string,
  "Date Of Registration": string,
  "Year Of Manufacture": string,
  "Driver Name": string,
  "Initial Mileage": number
}

const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{pt: 2}}>
      <Paper>
        <TableContainer sx={{maxHeight: "85vh"}}>
          <Table stickyHeader aria-label="sticky table">
            {/*<TableHead>
              <TableRow>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
            </TableBody>*/}
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default Dashboard;
