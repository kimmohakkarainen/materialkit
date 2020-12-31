import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Search from "@material-ui/icons/Search";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import image from "assets/img/bg.jpg";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";


import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
const useStyles = makeStyles(styles);

export default function Erottelu(props) {
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
					<CardHeader>
					<b>
				Erottelu
					</b>
					</CardHeader>
					<CardBody>
					<List>
					<ListItem> 
					<CustomDropdown
                      buttonText="Paikka"
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                    "Keittiö",
                    "Olohuone",
                    "Makuuhuone",
                    "Eteinen",
                    "Parveke",
					"Etupiha",
					"Ala-aula",
					"Ainon huone",
					"Telkkarihuone",
					"Kylpyhuone",
					"Terassi",
					"Takapiha",
                    ]}
                    />
		</ListItem>
		<ListItem>
		<CustomDropdown
                      buttonText="Tekijä"
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                    "Terhi",
                    "Kimmo",
                    "Henri",
                    "Aino",
                    "Joku muu",
                    ]}
                    />
			</ListItem>
		<ListItem>
		<CustomDropdown
                      buttonText="Hypohaju 1"
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                    "H1",
                    "H2",
                    "H3",
                    "H4",
                    "H5",
					"H6",
					"H7",
                    ]}
                    />
		</ListItem>
		<ListItem>
				<CustomDropdown
                      buttonText="Hypohaju 2"
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                    "H1",
                    "H2",
                    "H3",
                    "H4",
                    "H5",
					"H6",
					"H7",
                    ]}
                    />
					</ListItem>
		<ListItem>
				<CustomDropdown
                      buttonText="Hypohaju 3"
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                    "H1",
                    "H2",
                    "H3",
                    "H4",
                    "H5",
					"H6",
					"H7",
                    ]}
                    />
					</ListItem>
		<ListItem>
		<CustomDropdown
                      buttonText="Toinen haju"

                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                    "N1",
                    "N2",
                    "N3",
                    "N4",
                    "N5",
					"N6",
					"N7",
					"T",
                    ]}
                    />
					</ListItem>
		<ListItem>
					<CustomDropdown
                      buttonText="Kolmas haju"
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                    "N1",
                    "N2",
                    "N3",
                    "N4",
                    "N5",
					"N6",
					"N7",
					"T",
                    ]}
                    />
					</ListItem>
		<ListItem>
				<CustomDropdown
                      buttonText="Neljäs haju"
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                    "N1",
                    "N2",
                    "N3",
                    "N4",
                    "N5",
					"N6",
					"N7",
					"T",
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
