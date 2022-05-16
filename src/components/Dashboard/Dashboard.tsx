import React from 'react';
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


const data: IData[] = [
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  }, {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  },
  {
    "Make": "Nissan",
    "Type": "Rogue",
    "Color": "Grey",
    "Registration Number": "CA9818CI",
    "Date Of FirstRegistration": "13.09.2019",
    "Date Of Registration": "19.09.2019",
    "Year Of Manufacture": "2015",
    "Driver Name": "Roman Taran",
    "Initial Mileage": 0
  }
]

export default function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{pt: 2}}>
      <Paper>
        <TableContainer sx={{maxHeight: "85vh"}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell />
                {Object.keys(data[0]).map((column) => (
                  <TableCell
                    key={column}
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => {
                return (<TableRow>
                  <Checkbox color="primary" />
                  {Object.keys(data[0]).map((column) => (
                    <TableCell key={column}>
                      {row[column as keyof IData]}
                    </TableCell>
                  ))}
                </TableRow>)
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
