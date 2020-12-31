import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import HeaderLinks from "./yla.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "./styles.js";

import Footer from "components/Footer/Footer.js";
import Erottelu from "./koe.js";
import Palkki from "./palkki.js";
import Yhteenveto from "./Yhteenveto.js";
import Ilmaisu from "./ilmaisu.js";
import Äly from "./aly.js";
import Nouto from "./nouto.js";
import Kontakti from "./kontakti.js";
import Sosiaalistaminen from "./sosiaalistaminen.js";
import Yksinolo from "./yksinolo.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Pop3Page(props) {
  const classes = useStyles();
  
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
		<Ilmaisu/>
		<Äly/>
		<Nouto/>
		<Kontakti/>
		<Sosiaalistaminen/>
		<Yksinolo/>
		<Yhteenveto/>
	
        </div>
      </div>
      <Footer />
    </div>
	  );
}