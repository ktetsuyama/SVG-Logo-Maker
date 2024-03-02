# SVG Logo Maker

## Description

A Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

## Table of Contents

- [Introduction](#introduction)
- [Problem](#problem)
- [Solution](#solution)

## Introduction

The client would like to generate a simple logo for their project so that they don't have to pay a graphic designer.

## Problem

The logo needs to be created quickly and easily, with as few prompts as possible. The generator should also be tested to ensure that it works properly in all scenarios.

## Solution

I created an SVG generator the uses Inquirer to prompt the user with four questions:

    The three letters that the user wants in their logo
    The color of the text on the logo
    The shape they want the logo to be
    The color of the shape

After the user answers the prompts, the logo is generated in an .svg file.

I wrote a suite of tests that uses Jest to test the render methods of the shapes and validates the answers to the other three prompts.

Here is a video of the application in action:

[Link to Video](https://youtu.be/c_yHYMGEGPw)

## Credits

I collaborated George Schultz and Nick Gambino to troubleshoot any bugs that I had during development of this application. I also used phind.com to understand why my svg wasn't rendering properly.

Tutorials used:

[SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

[Basic SVG shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

## License

This project is covered under the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Learn more about this license [here](https://opensource.org/licenses/MIT).
