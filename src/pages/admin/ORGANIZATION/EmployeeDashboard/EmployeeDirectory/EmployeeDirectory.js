import React from "react";
import styled from "../../OrganizationDashboard/Summary/summaryOrg.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Dp from "../../../../../image/Ash-Read.png";

const EmployeeDirectory = () => {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "Description for Card 1",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description for Card 3",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Description for Card 4",
    },
  ];

  return (
    <div className={styled.MainSummaryOrgSection}>
      <div className={styled.sectionsNew}>
        <h5>Employee Directory</h5>
      </div>
      <div className={styled.sameSecdivFullWidth}>
        <Box
          display="flex"
          flexDirection="row"
          gap={2}
          className={styled.rightPadding}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Department"
            >
              <MenuItem value={10}>Software Development</MenuItem>
              <MenuItem value={20}>HR Department</MenuItem>
              <MenuItem value={30}>UI/UX Development</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Another Control"
            >
              <MenuItem value={10}>Hyderabad</MenuItem>
              <MenuItem value={20}>Bangalore</MenuItem>
              <MenuItem value={30}>Pune</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField label="Search" variant="outlined" />
          </FormControl>
        </Box>
        <Box marginTop={2}>
          <Divider />
        </Box>
        <Box className={styled.styleBox} marginTop={2} marginBottom={6}>
          <Button variant="contained">Search</Button>
        </Box>
      </div>
      <Grid container spacing={5} marginTop={5}>
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.id}>
            <Card sx={{ borderRadius: "2%" }}>
              <CardContent>
                <img
                  src={Dp}
                  alt="Card Image"
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                  }}
                />
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {card.description}
                </Typography>
                {/* Add more card content here */}
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EmployeeDirectory;
