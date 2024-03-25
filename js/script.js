// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTriangle () {
  // input
  const baseOfTriangle = parseInt(document.getElementById('base-of-triangle').value)
  const heightOfTriangle = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const calculateAreaOfTriangle = baseOfTriangle * heightOfTriangle * 0.5

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + baseOfTriangle * heightOfTriangle * 0.5 + ' cm²'
}
