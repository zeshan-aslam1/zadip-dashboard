import * as React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableRow,
  Title,
} from "./styled.components";
const FormsDetails = () => {
  const { translations } = useTheme();
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/getllAll")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  console.log("here is data", data);
  const renderTableData = () => {
    return (
      data &&
      data?.map((item, index) => {
        const { ID, Name, MobileNumber, Email, ServiceName, Page } = item; //destructuring
        return (
          <TableRow key={ID}>
            <TableData>{ID}</TableData>
            <TableData>{Name}</TableData>
            <TableData>{MobileNumber}</TableData>
            <TableData>{Email}</TableData>
            <TableData>{ServiceName}</TableData>
            <TableData>{Page}</TableData>
          </TableRow>
        );
      })
    );
  };
  const renderTableHeader = () => {
    return (
      <>
        <TableHead>ID</TableHead>
        <TableHead>NAME</TableHead>
        <TableHead>PHONE</TableHead>
        <TableHead>EMAIL</TableHead>
        <TableHead>SERVICE</TableHead>
        <TableHead>Page</TableHead>
      </>
    );
  };
  return (
    <Container>
      <Title>{translations?.serviceDetails}</Title>
      <Table id="Services" className="Services">
        <TableBody>
          <TableRow>{renderTableHeader()}</TableRow>
          {renderTableData()}
        </TableBody>
      </Table>
    </Container>
  );
};
export default FormsDetails;
