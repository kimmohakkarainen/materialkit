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

export default function ProductSection(props) {
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
  <div className={classes.navbar}>
  <div
          className={classes.navbar}
        
        >
   <Header
            brand="Lisää pöp"
            color="dark"
            leftLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  ><CustomDropdown
                      buttonText="lenkki"
                      dropdownHeader="Dropdown Header"
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link"
                      ]}
                    />
                  </Button>
                
                </ListItem> 
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                 erottelu
                  </Button>
                </ListItem>
				  <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                   ilmaisu
                  </Button>
                </ListItem>
				  <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    älytehtävä
                  </Button>
                </ListItem>
				  <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                 nouto
                  </Button>
                </ListItem>
				  <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    kontaktityöskentely
                  </Button>
                </ListItem>
				  <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  ><CustomDropdown
                      buttonText="Namietsintä"
                      dropdownHeader="Dropdown Header"
                      buttonProps={{
                        className: classes.listItem,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link"
                      ]}
                    />
                  </Button>
                </ListItem>
				  <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
              sosiaalistaminen
                  </Button>
                </ListItem>
				  <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                  yksinolo
                  </Button>
                </ListItem>
              </List>
            }
			/> 
   <div className={classes.title}>
            <h2>Yhteenveto</h2>
			</div>
		  </div>
	
					<Card> 
					<CardHeader>
					<b>
				erottelu
					</b>
					</CardHeader>
					<CardBody>
					<List>
					<ListItem>
					Paikka

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
		<ListItem>
					Tekijä
					</ListItem><ListItem>  <FormControl {...formControlProps} className={formControlClasses}>
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
		<ListItem>
					hypohaju 1
					</ListItem><ListItem>  <FormControl {...formControlProps} className={formControlClasses}>
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
		<ListItem>
					hypohaju 2 
					</ListItem><ListItem>  <FormControl {...formControlProps} className={formControlClasses}>
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
		<ListItem>
					hypohaju 3
					</ListItem><ListItem>  <FormControl {...formControlProps} className={formControlClasses}>
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
		<ListItem>
					toinen haju
					</ListItem><ListItem>  <FormControl {...formControlProps} className={formControlClasses}>
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
		<ListItem>
					kolmas haju
					</ListItem><ListItem>  <FormControl {...formControlProps} className={formControlClasses}>
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
		<ListItem>
					neljäs haju
					</ListItem><ListItem>  <FormControl {...formControlProps} className={formControlClasses}>
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
		<ListItem>
					arvio
					</ListItem><ListItem>  <FormControl {...formControlProps} className={formControlClasses}>
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
		<ListItem>
					muuta
					</ListItem>

					</List>
					</CardBody>
					</Card>
					</div>
					
  );
}
