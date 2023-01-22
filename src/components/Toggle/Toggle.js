
import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const Toggle = ({handleLightThemeClick, handleDarkThemeClick}) => {
    return (

                            <ButtonGroup aria-label="Theme toggle" >
                                <Button variant="secondary" onClick={handleLightThemeClick}>
                                    Light
                                </Button>
                                <Button variant="secondary" onClick={handleDarkThemeClick}>
                                    Dark
                                </Button>
                            </ButtonGroup>

    );
}
