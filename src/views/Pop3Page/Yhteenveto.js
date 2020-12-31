import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function Yhteenveto() {
  const classes = useStyles();
  return (
  
  <div> 
   <div className={classes.title}>
            <h2>Yhteenveto</h2>
			</div>
<table class="table table-dark">

  <tbody>
    <tr>
      <th scope="row">Katulenkkejä</th>
      <td>0</td>
    
    </tr>
    <tr>
      <th scope="row">Katulenkkien kesto</th>
      <td>0</td>
    
    </tr>
    <tr>
      <th scope="row">Metsälenkkejä</th>
      <td>0</td>
    </tr>
	 <tr>
      <th scope="row">MEtsälenkkien kesto</th>
      <td>0</td>
    
    </tr>
    <tr>
      <th scope="row">Älytehtäviä</th>
      <td>0</td>
    
    </tr>
    <tr>
      <th scope="row">Erottelut</th>
      <td>0</td>

    </tr>
	 <tr>
      <th scope="row">Ilmaisut</th>
      <td>0</td>
    
    </tr>
    <tr>
      <th scope="row">Kontaktityöskentelyt</th>
      <td>0</td>
    
    </tr>
    <tr>
      <th scope="row">Namietsintä</th>
      <td>0</td>

    </tr> <tr>
      <th scope="row">sosiaalistaminen</th>
      <td>0</td>
    
    </tr>
    <tr>
      <th scope="row">sosiaalistamisen kesto</th>
      <td>0</td>
    
    </tr>
  </tbody>
</table> 
</div>
  );
}
