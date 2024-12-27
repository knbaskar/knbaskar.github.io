/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "subComponents/LayoutContainers/DashboardLayout";
import DashboardNavbar from "subComponents/Navbars/DashboardNavbar";
import Footer from "subComponents/Footer";
import DataTable from "subComponents/Tables/DataTable";

// CatalogueList page components
import ProductImages from "layouts/ecommerce/catalogues/catalogue-list/components/ProductImages";
import ProductInfo from "layouts/ecommerce/catalogues/catalogue-list/components/ProductInfo";

// Data
import dataTableData from "layouts/ecommerce/catalogues/catalogue-list/data/dataTableData";

//import serviceAPI from 'services/serviceApi';
import { fetchCatalogues } from "services/manage/getCatalogues";

const CatalogueList = () => {
  // const apiName =  import.meta.env.API_URL; //'https://mohanakrish24-sample1.hf.space';

  useEffect(() => {
    // const serviceName = '/api/v1/catalogue/';
    // serviceAPI.serviceAPICall({
    //    apiName: `${apiName}${serviceName}`,
    //    method: 'get',
    //    requestPayload: {
    //      merchant_id: 'M001'
    //    }
    //  })
    //  .then( (resp: any) => {
    //    console.log(resp);
    //  });
    fetchCatalogues({
        merchant_id: 'M001'
      })
      .then((resp: any) => {
      console.log(resp);
      });    
   }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Card sx={{ overflow: "visible" }}>
          <MDBox p={3}>
            <MDBox mb={3}>
              <MDTypography variant="h5" fontWeight="medium">
                Product Details
              </MDTypography>
            </MDBox>

            <Grid container spacing={3}>
              <Grid item xs={12} lg={6} xl={5}>
                <ProductImages />
              </Grid>
              <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
                <ProductInfo />
              </Grid>
            </Grid>

            <MDBox mt={8} mb={2}>
              <MDBox mb={1} ml={2}>
                <MDTypography variant="h5" fontWeight="medium">
                  Other Products
                </MDTypography>
              </MDBox>
              <DataTable
                table={dataTableData}
                entriesPerPage={false}
                showTotalEntries={false}
                isSorted={false}
              />
              <DataTable
                table={dataTableData}
                entriesPerPage={false}
                showTotalEntries={false}
                isSorted={false}
              />
            </MDBox>
          </MDBox>
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CatalogueList;
