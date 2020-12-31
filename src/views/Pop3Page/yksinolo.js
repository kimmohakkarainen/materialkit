import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import classNames from "classnames";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
const useStyles = makeStyles(styles);

export default function Yksinolo(props) {
  const classes = useStyles();
const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
	   error,
    white,
    inputRootCustomClasses,
    success
  } = props;
  
  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }

 return (
  	<Card styles={{zIndex:'-1'}}> 

					<CardBody>
					<List>
					<ListItem> 	
					<b>
				Yksinolo
				</b> 
				</ListItem>
		<ListItem>
					<CustomDropdown
                      buttonText="Kesto"
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                    "0.05",
                    "0.1",
                    "0.15",
					"0.2",
					"0.3",
					"0.4",
					"0.5",
					"1.0",
					"1.1",
					"1.2",
					"1.3",
					"1.4",
					"1.5",
					"2.0"
                    ]}
                    />
		</ListItem>
					</List>
					</CardBody>
					</Card>
					);
					}
