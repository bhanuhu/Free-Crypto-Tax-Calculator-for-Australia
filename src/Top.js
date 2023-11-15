import { Fragment } from "react";
import { FormControl, Grid, GridItem, Select , Text} from "@chakra-ui/react";
const Top = () => {
  return (
  
    <Fragment>
      <Grid background="white"
      width="100%"
      px="20%"
    justifyContent="center"
        h="100pvh"
        templateRows={{sm:"repeat(1, 1fr)", md:"repeat(1, 1fr)", lg:"repeat(1, 1fr)"}}
        templateColumns={{sm:"repeat(2, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(2, 1fr)"}}
        gap={4}
        pb="2rem">
        <GridItem gap={4}>
          <FormControl>
            <Text>Financial Year</Text>
            <Select id="dropdownFinancial">
              <option value="2023-24">FY 2023-24</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <Text>Country</Text>
            <Select id="dropdownCountry">
              <option value="australia">Australia</option>
            </Select>
          </FormControl>
        </GridItem>
      </Grid>
    </Fragment>
  );
};
export default Top;
