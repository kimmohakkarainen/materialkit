import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Popover from "@material-ui/core/Popover";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import Erottelu from "./koe.js";
import Palkki from "./palkki.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Pop2Page(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  const [anchorElRight, setAnchorElRight] = React.useState(null);
  const [classicModal, setClassicModal] = React.useState(false);
  
    console.log(classes);
  return (
  <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Pöptyöp"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
	/>
	
	   <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>PopPage</h1>
			<br />
              
            </GridItem>
          </GridContainer>
		</div>
		</Parallax>
		
		      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
		<Palkki/>
		<Erottelu/>
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
	
	  );
	}