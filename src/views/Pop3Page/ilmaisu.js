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

export default function Ilmaisu(props) {
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
					<ListItem> 	<b>
				Ilmaisu
					</b>
					</ListItem>
					<ListItem>
					<CustomDropdown
                      buttonText="Ilmaisu"
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                    "Ovi",
                    "Laatikko",
                    "Ihminen"
                    ]}
                    />
		</ListItem>
		<ListItem>
				<CustomDropdown
                      buttonText="Arvio"                     
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                    "Huono",
                    "Kohtalainen",
                    "Ok",
                    "Hyvä",
                    "Mahtava",
					
                    ]}
                    />
					</ListItem>
		<ListItem>
					muuta
					</ListItem>
<ListItem>  <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + " " + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses
        }}
        id={id}
        {...inputProps}
      />
    </FormControl></ListItem>
					</List>
					</CardBody>
					</Card>
					);
					}
